import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import axiosFoodieInstance from "../../axios/axiosFoodieInstance";
import { ENDPOINTS_IMAGE_UPLOAD, ENDPOINTS_MEALS } from "../../navigation/endpoints";
import { setNotification } from "../../redux/slices/notification";
import { parseImageToEdit, removeImageFile, uploadImageFile } from "../../helpers/uploadFile";
import { mainTheme } from "../../themes/mainTheme";

import RecipeFormContent from "./componets/RecipeFormContent/RecipeFormContent";
import RecipesList from "./componets/RecipesList/RecipesList";
import BoxPad from "../../components/UI/BoxPad/BoxPad";
import ViewBox from "../../components/UI/ViewBox/ViewBox";
import Button from "../../components/UI/Button/Button";

import Label from "../../components/UI/Label/Label";

import { getRecipe, Ingredient, Recipe } from "../../models/Meal/Recipe";
import {
    RecipeForm,
    NEW_RECIPE_DATA,
    RecipeValidation,
    RECIPE_VALIDATION_DATA,
} from "../../models/Meal/RecipeForm";

import * as S from "./RecipeView.style";

type RecipeViewProps = {
    userID: number;
};

const RecipeView = ({ userID }: RecipeViewProps) => {
    const dispatch = useDispatch();
    const queryClient = useQueryClient();
    const { recipeID } = useParams();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [openRecipeForm, setOpenRecipeForm] = useState(false);
    const [recipe, setRecipe] = useState<RecipeForm>(JSON.parse(JSON.stringify(NEW_RECIPE_DATA)));
    const [recipeValidation, setRecipeValidation] = useState<RecipeValidation>(
        JSON.parse(JSON.stringify(RECIPE_VALIDATION_DATA)),
    );

    useEffect(() => {
        if (recipeID) {
            editFetchedRecipe(+recipeID);
        }
    }, [recipeID]);

    const editFetchedRecipe = async (recipeID: number) => {
        const fetchedRecipe: Recipe | undefined = await getRecipe(recipeID);
        if (fetchedRecipe) {
            const parsedRecipe = parseImageToEdit(fetchedRecipe, "imagePath");
            setRecipe(parsedRecipe);
        }
        setOpenRecipeForm(true);
    };

    const handleOnChange = (property: string, value: any, index?: number) => {
        const currentRecipe: RecipeForm = recipe;

        const currentRecipeValidation = JSON.parse(JSON.stringify(recipeValidation));
        if (index !== undefined) {
            currentRecipe.ingredients[index][property] = value;
        } else {
            currentRecipe[property] = value;
        }
        if (property === "ingredients") {
            currentRecipeValidation["isIngredient"] = "";
        }
        currentRecipeValidation[property] = "";
        setRecipeValidation(currentRecipeValidation);
        setRecipe(currentRecipe);
    };

    const onChangeRecipeImagePrehandler = (files: any) => {
        if (files.length) {
            const newImageURL = URL.createObjectURL(files[0]);
            const recipeImage = {
                url: newImageURL,
                type: files[0].type,
                file: files[0],
            };
            handleOnChange("imagePath", recipeImage);
        }
    };

    const dataValidation = (): boolean => {
        let validationPassed = true;
        const currentValidation: RecipeValidation = JSON.parse(
            JSON.stringify(RECIPE_VALIDATION_DATA),
        );
        const currentRecipe: RecipeForm = JSON.parse(JSON.stringify(recipe));
        Object.keys(currentValidation).forEach((key: string) => {
            if (key === "ingredients") {
                currentRecipe[key].forEach((product: Ingredient, index: number) => {
                    if (!product.amount) {
                        currentValidation["ingredients"][index] = "This field is required";
                        validationPassed = false;
                    }
                });
            } else if (key === "isIngredient" && !currentRecipe["ingredients"].length) {
                currentValidation.isIngredient = "Minimum 1 ingredient";
                validationPassed = false;
            } else if (!currentRecipe[key] && key !== "isIngredient") {
                currentValidation[key] = "This field is required";
                validationPassed = false;
            }
        });

        setRecipeValidation(currentValidation);
        return validationPassed;
    };

    const checkRemoveOldUserAvatar = (newUplodedImageURL: string | undefined | null) => {
        if (
            recipe?.id &&
            recipe?.imagePath &&
            (!newUplodedImageURL || recipe.imagePath.url !== newUplodedImageURL)
        ) {
            removeImageFile(ENDPOINTS_IMAGE_UPLOAD.deleteRecipeImage);
        }
    };

    const handleSubmit = async () => {
        setIsLoading(true);
        const validationPassed = dataValidation();

        if (validationPassed) {
            const dataToSend = JSON.parse(JSON.stringify(recipe));

            if (recipe?.imagePath?.file) {
                const { imageURL, err: recipeImageUploadError } = await uploadImageFile(
                    ENDPOINTS_IMAGE_UPLOAD.uploadRecipeImage,
                    "image",
                    recipe?.imagePath.file,
                );

                if (recipeImageUploadError) {
                    dispatch(
                        setNotification({
                            label: "File upload",
                            header: "Failed",
                            message: `Photo could not be uploaded${recipeImageUploadError}`,
                            timeout: 5000,
                        }),
                    );
                } else {
                    dataToSend.imagePath = imageURL;
                }
            } else {
                dataToSend.imagePath = "";
            }

            checkRemoveOldUserAvatar(dataToSend.imagePath);

            await axiosFoodieInstance
                .post(
                    !recipe?.id
                        ? ENDPOINTS_MEALS.addMeal
                        : `${ENDPOINTS_MEALS.editUserRecipe}/${recipe.id}`,
                    dataToSend,
                )
                .then((response) => {
                    if (response.status === 200 || response.status === 201) {
                        dispatch(
                            setNotification({
                                label: "Recipe",
                                header: "Success",
                                message: `Meal was ${!recipe?.id ? "added" : "edited"}`,
                                timeout: 5000,
                            }),
                        );
                        setRecipe(JSON.parse(JSON.stringify(NEW_RECIPE_DATA)));
                        queryClient.invalidateQueries(["userRecipes"], {
                            refetchType: "all",
                        });
                    }
                })
                .catch((err) => {
                    const errorMessage = err.response.data?.message
                        ? err.response.data.message
                        : `Cannot ${!recipe.id ? "add" : "edit"} meal`;

                    dispatch(
                        setNotification({
                            label: "Recipe",
                            header: "Failed",
                            message: errorMessage,
                            timeout: 5000,
                        }),
                    );
                });
        }
        setIsLoading(false);
    };

    const editRecipe = (recipe: Recipe) => {
        const parseRecipe: RecipeForm = parseImageToEdit(recipe, "imagePath");
        setRecipe(parseRecipe);
        setOpenRecipeForm(true);
    };

    return (
        <ViewBox>
            <BoxPad padding='24px'>
                <S.Container>
                    <S.TopeSection>
                        <Label fontSize='18px' color={mainTheme.colors.mainBlack} width='100%'>
                            Create and manage recipes
                        </Label>
                        {!openRecipeForm && (
                            <Button width='180px' onClick={() => setOpenRecipeForm(true)}>
                                Add new recipe
                            </Button>
                        )}
                    </S.TopeSection>

                    {(openRecipeForm || recipeID) && (
                        <RecipeFormContent
                            recipe={recipe}
                            recipeValidation={recipeValidation}
                            isLoading={isLoading}
                            onChange={handleOnChange}
                            onImageChange={onChangeRecipeImagePrehandler}
                            onSubmit={handleSubmit}
                            onClose={() => setOpenRecipeForm(false)}
                        />
                    )}
                    <S.Divider />
                    <RecipesList
                        userID={userID}
                        onEditRecipe={(recipe: any) => editRecipe(recipe)}
                    />
                </S.Container>
            </BoxPad>
        </ViewBox>
    );
};

export default RecipeView;
