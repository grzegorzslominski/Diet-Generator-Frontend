import { useDispatch } from "react-redux";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { prepareRecipeInstrucion } from "../../../../helpers/textParse";
import axiosFoodieInstance from "../../../../axios/axiosFoodieInstance";
import { ENDPOINTS_MEALS } from "../../../../navigation/endpoints";
import noPhoto from "../../../../assets/no-photo.png";
import { getUserRecipes, Recipe } from "../../../../models/Meal/Recipe";
import { mainTheme } from "../../../../themes/mainTheme";
import { setNotification } from "../../../../redux/slices/notification";
import { AxiosError } from "axios";

import Label from "../../../../components/UI/Label/Label";
import Spinner from "../../../../components/UI/Spinner/Spinner";
import RecipeProperyTable from "../../../../components/RecipeProperyTable/RecipeProperyTable";
import ActionButton from "../../../../components/UI/ActionButton/ActionButton";

import * as S from "./RecipesList.style";

type RecipesListProps = {
    userID: number;
    onEditRecipe: (recipe: Recipe) => void;
};

const RecipesList = ({ userID, onEditRecipe }: RecipesListProps) => {
    const dispatch = useDispatch();
    const queryClient = useQueryClient();
    const { data: userRecipes, isLoading } = useQuery(["userRecipes", userID], () =>
        getUserRecipes(userID),
    );

    const removeRecipe = (recipeID?: number) => {
        axiosFoodieInstance
            .delete(`${ENDPOINTS_MEALS.removeUserRecipe}/${recipeID}`)
            .then((response) => {
                if (response.status === 202) {
                    queryClient.invalidateQueries(["userRecipes"], {
                        refetchType: "all",
                    });
                    dispatch(
                        setNotification({
                            label: "Delete recipe",
                            header: "Success",
                            message: "Recipe was deleted",
                            timeout: 5000,
                        }),
                    );
                }
            })
            .catch((err: AxiosError) => {
                dispatch(
                    setNotification({
                        label: "Delete recipe",
                        header: "Failed",
                        message: `Recipe could not be deleted: ${err.message}`,
                        timeout: 5000,
                    }),
                );
            });
    };

    return (
        <S.Container>
            <Label fontSize='16px' fontWeight='500' color={mainTheme.colors.mainBlack} width='100%'>
                Your recipes
            </Label>

            <S.Content>
                {isLoading ? (
                    <Spinner color='secondary' size='medium' />
                ) : !userRecipes || false ? (
                    <Label fontSize='12px'> {`You haven't added any recipes yet`}</Label>
                ) : (
                    <S.RecipesList>
                        {userRecipes.map((recipe) => (
                            <S.RecipeItem key={recipe.id}>
                                <S.TopSection>
                                    <Label
                                        fontSize='16px'
                                        fontWeight='600'
                                        color={mainTheme.colors.mainBlack}
                                    >
                                        {recipe.title}
                                    </Label>
                                    <S.ActionContainer>
                                        <ActionButton
                                            size='small'
                                            type='edit'
                                            onClick={() => onEditRecipe(recipe)}
                                        />
                                        <ActionButton
                                            size='small'
                                            type='remove'
                                            onClick={() => removeRecipe(recipe.id)}
                                        />
                                    </S.ActionContainer>
                                </S.TopSection>

                                <S.RecipeContent>
                                    <img src={recipe.imagePath ? recipe.imagePath : noPhoto} />
                                    <RecipeProperyTable {...recipe} />
                                    <S.RecipeInstrucion>
                                        <Label
                                            fontSize='13px'
                                            fontWeight='500'
                                            color={mainTheme.colors.mainBlack}
                                        >
                                            Instrucion of preparing
                                        </Label>
                                        <Label fontSize='13px' color={mainTheme.colors.mainBlack}>
                                            {prepareRecipeInstrucion(
                                                recipe?.instructions?.slice(0, 300),
                                            )}
                                        </Label>
                                    </S.RecipeInstrucion>
                                </S.RecipeContent>
                            </S.RecipeItem>
                        ))}
                    </S.RecipesList>
                )}
            </S.Content>
        </S.Container>
    );
};

export default RecipesList;
