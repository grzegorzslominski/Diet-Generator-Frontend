import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import axiosFoodieInstance from "../../axios/axiosFoodieInstance";
import { ENDPOINTS_MEALS } from "../../navigation/endpoints";
import { setNotification } from "../../redux/slices/notification";
import { getProducts, Product } from "../../models/Meal/Exclusions";
import { mainTheme } from "../../themes/mainTheme";

import SelectOption from "../../components/UI/Select/SelectOption";
import ScrollBox from "../../components/UI/ScrollBox/ScrollBox";
import TextArea from "../../components/UI/TextArea/TextArea";
import CheckMark from "../../assets/icons/checkMark.svg";
import Button from "../../components/UI/Button/Button";
import Select from "../../components/UI/Select/Select";
import Input from "../../components/UI/Input/Input";
import Label from "../../components/UI/Label/Label";
import XIcon from "../../assets/icons/XIcon.svg";

import { UNITS, Ingredient, Recipe } from "../../models/Meal/Recipe";
import {
    NEW_RECIPE_DATA,
    RecipeValidation,
    RECIPE_VALIDATION_DATA,
} from "../../models/Meal/RecipeForm";

import * as S from "./RecipeView.style";

const RecipeView = () => {
    const dispatch = useDispatch();

    const { data: products } = useQuery(["products"], () => getProducts());

    const [loading, setLoading] = useState<boolean>(false);
    const [recipe, setRecipe] = useState<Recipe>(JSON.parse(JSON.stringify(NEW_RECIPE_DATA)));
    const [searchValue, setSearchValue] = useState<string | null>(null);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>();
    const [recipeValidation, setRecipeValidation] = useState<RecipeValidation>(
        JSON.parse(JSON.stringify(RECIPE_VALIDATION_DATA)),
    );

    useEffect(() => {
        if (products && searchValue) {
            const currentFilteredProducts = products.filter((product: Product) =>
                product.name.includes(searchValue),
            );
            setFilteredProducts(currentFilteredProducts);
        }
    }, [searchValue]);

    useEffect(() => {
        if (products) {
            setFilteredProducts(products);
        }
    }, [products]);

    const handleResults = (e: any) => {
        setSearchValue(e.targer.value);
    };

    const handleOnChange = (property: string, value: any, index?: number) => {
        const currentRecipe: Recipe = JSON.parse(JSON.stringify(recipe));
        if (property === "ingredients") {
            const findedIndex = currentRecipe["ingredients"].findIndex(
                (ingridient) => ingridient.id === value.id,
            );
            if (findedIndex === -1) {
                currentRecipe["ingredients"].push({
                    name: value.name,
                    amount: 0,
                    unit: "g",
                });
            } else {
                currentRecipe["ingredients"].splice(findedIndex, 1);
            }
        } else if (index !== undefined) {
            currentRecipe.ingredients[index][property] = value;
        } else {
            currentRecipe[property] = value;
        }
        setRecipe(currentRecipe);
    };

    const dataValidation = (): boolean => {
        let validationPassed = true;
        const currentValidation: RecipeValidation = JSON.parse(
            JSON.stringify(RECIPE_VALIDATION_DATA),
        );
        const currentRecipe: Recipe = JSON.parse(JSON.stringify(recipe));
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

    const handleSubmit = async () => {
        setLoading(true);
        const validationPassed = dataValidation();

        if (validationPassed) {
            recipe["ingredients"].forEach((ingredient) => {
                delete ingredient.id;
            });
            await axiosFoodieInstance
                .post(`${ENDPOINTS_MEALS.addMeal}`, recipe)
                .then((response) => {
                    if (response.status === 201) {
                        setRecipe(JSON.parse(JSON.stringify(NEW_RECIPE_DATA)));
                        dispatch(
                            setNotification({
                                label: "Add new meal",
                                header: "Success",
                                message: "New meal was created",
                                timeout: 5000,
                            }),
                        );
                    }
                })
                .catch((err) => {
                    const errorMessage = err.response.data?.message
                        ? err.response.data.message
                        : "Cannot add new meal";

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
        setLoading(false);
    };

    return (
        <S.Container>
            <S.Border>
                <Label
                    fontFamily='Lato'
                    fontSize='1.2rem'
                    color={mainTheme.colors.mainBlack}
                    textAlign='center'
                >
                    Add new meal
                </Label>
                <S.InputContainer>
                    <S.InputRow>
                        <Input
                            placeholder='Type title'
                            onChange={(e) => handleOnChange("title", e.target.value)}
                            label='Meal name'
                            value={recipe.title}
                            error={recipeValidation.title}
                        />
                        <Input
                            placeholder='Type title'
                            onChange={(e) => handleOnChange("servings", e.target.value)}
                            label='servings'
                            type='number'
                            value={recipe.servings}
                            error={recipeValidation.servings}
                        />
                        <Input
                            placeholder='amount of time to prepare'
                            onChange={(e) => handleOnChange("readyInMinutes", e.target.value)}
                            label='ready in minutes'
                            type='number'
                            value={recipe.readyInMinutes}
                            error={recipeValidation.readyInMinutes}
                        />
                        <Input
                            placeholder='Type title'
                            onChange={(e) => handleOnChange("imagePath", e.target.value)}
                            label='image'
                            value={recipe.imagePath}
                            error={recipeValidation.imagePath}
                        />
                    </S.InputRow>
                    <TextArea
                        onChange={(e) => handleOnChange("instructions", e.target.value)}
                        label='description'
                        placeholder='give instructions'
                        value={recipe.instructions}
                        width='100%'
                        error={recipeValidation.instructions}
                    />
                </S.InputContainer>
                <S.Table>
                    <S.TableItem
                        isOpen={recipe.vegetarian}
                        onClick={() => handleOnChange("vegetarian", !recipe.vegetarian)}
                    >
                        <Label
                            fontFamily='Montserrat'
                            fontWeight='600'
                            fontSize='0.8rem'
                            lineHeight='1rem'
                            color={mainTheme.colors.mainBlack}
                        >
                            Vegetarian
                        </Label>
                        {recipe.vegetarian ? (
                            <img src={CheckMark} alt='checkMark' />
                        ) : (
                            <img src={XIcon} alt='checkMark' />
                        )}
                    </S.TableItem>
                    <S.TableItem
                        isOpen={recipe.vegan}
                        onClick={() => handleOnChange("vegan", !recipe.vegan)}
                    >
                        <Label
                            fontFamily='Montserrat'
                            fontWeight='600'
                            fontSize='0.8rem'
                            lineHeight='1rem'
                            color={mainTheme.colors.mainBlack}
                        >
                            Vegan
                        </Label>
                        {recipe.vegan ? (
                            <img src={CheckMark} alt='checkMark' />
                        ) : (
                            <img src={XIcon} alt='checkMark' />
                        )}
                    </S.TableItem>
                    <S.TableItem
                        isOpen={recipe.glutenFree}
                        onClick={() => handleOnChange("glutenFree", !recipe.glutenFree)}
                    >
                        <Label
                            fontFamily='Montserrat'
                            fontWeight='600'
                            fontSize='0.8rem'
                            lineHeight='1rem'
                            color={mainTheme.colors.mainBlack}
                        >
                            Gluten free
                        </Label>
                        {recipe.glutenFree ? (
                            <img src={CheckMark} alt='checkMark' />
                        ) : (
                            <img src={XIcon} alt='checkMark' />
                        )}
                    </S.TableItem>
                    <S.TableItem
                        isOpen={Boolean(recipe.dairyFree)}
                        onClick={() => handleOnChange("dairyFree", !recipe.dairyFree)}
                    >
                        <Label
                            fontFamily='Montserrat'
                            fontWeight='600'
                            fontSize='0.8rem'
                            lineHeight='1rem'
                            color={mainTheme.colors.mainBlack}
                        >
                            Dairy free
                        </Label>
                        {recipe.dairyFree ? (
                            <img src={CheckMark} alt='checkMark' />
                        ) : (
                            <img src={XIcon} alt='checkMark' />
                        )}
                    </S.TableItem>
                    <S.TableItem
                        isOpen={recipe.veryHealthy}
                        onClick={() => handleOnChange("veryHealthy", !recipe.veryHealthy)}
                    >
                        <Label
                            fontFamily='Montserrat'
                            fontWeight='600'
                            fontSize='0.8rem'
                            lineHeight='1rem'
                            color={mainTheme.colors.mainBlack}
                        >
                            Very healthy
                        </Label>
                        {recipe.veryHealthy ? (
                            <img src={CheckMark} alt='checkMark' />
                        ) : (
                            <img src={XIcon} alt='checkMark' />
                        )}
                    </S.TableItem>
                </S.Table>
                <S.InputContainer>
                    <S.InputRow>
                        <Input
                            placeholder='Calories'
                            onChange={(e) => handleOnChange("calories", e.target.value)}
                            label='Calories'
                            type='number'
                            value={recipe.calories}
                            error={recipeValidation.calories}
                        />
                        <Input
                            placeholder='Fat'
                            onChange={(e) => handleOnChange("fat", e.target.value)}
                            label='Fat in grams'
                            type='number'
                            value={recipe.fat}
                            error={recipeValidation.fat}
                        />
                        <Input
                            placeholder='Proteins'
                            onChange={(e) => handleOnChange("proteins", e.target.value)}
                            label='Proteins in grams'
                            type='number'
                            value={recipe.proteins}
                            error={recipeValidation.proteins}
                        />
                        <Input
                            placeholder='Carbs'
                            onChange={(e) => handleOnChange("carbs", e.target.value)}
                            label='Carbs  in grams'
                            type='number'
                            value={recipe.carbs}
                            error={recipeValidation.carbs}
                        />
                    </S.InputRow>
                </S.InputContainer>
                <S.SearchContainer>
                    <S.Search>
                        <Input
                            placeholder='results'
                            onChange={(e) => handleResults(e.target.value)}
                            label='Search'
                            value={searchValue}
                        />
                    </S.Search>
                </S.SearchContainer>
                <S.ProductsContainer>
                    <ScrollBox scrollDistance={40} height={280} mobileScrollDistance={30}>
                        <S.ProductsList>
                            {filteredProducts &&
                                filteredProducts.map((product) => {
                                    return (
                                        <S.productItem
                                            key={product.name}
                                            isOpen={recipe.ingredients
                                                .map((item) => item.name)
                                                .includes(product.name)}
                                            onClick={() => handleOnChange("ingredients", product)}
                                        >
                                            <Label
                                                fontSize='0.8rem'
                                                textAlign='center'
                                                fontWeight='400'
                                                fontFamily='Lato'
                                                color={mainTheme.colors.secondaryColor}
                                            >
                                                {product.name}
                                            </Label>
                                        </S.productItem>
                                    );
                                })}
                        </S.ProductsList>
                    </ScrollBox>
                </S.ProductsContainer>
                {recipe.ingredients.map((ingredient, index) => {
                    return (
                        <S.InputContainer key={ingredient.name}>
                            <Label
                                fontSize='1rem'
                                textAlign='center'
                                fontWeight='700'
                                fontFamily='Lato'
                                color={mainTheme.colors.mainBlack}
                            >
                                {ingredient.name}
                            </Label>
                            <S.InputRow>
                                <Input
                                    placeholder='Amount'
                                    onChange={(e) =>
                                        handleOnChange("amount", e.target.value, index)
                                    }
                                    label='Amount'
                                    type='number'
                                    value={recipe.ingredients[index].amount}
                                    error={recipeValidation.ingredients[index]}
                                />
                                <Select
                                    borderRadius='0'
                                    onChange={(unit: string) => handleOnChange("unit", unit, index)}
                                    value={recipe.ingredients[index].unit}
                                    width='100%'
                                    label='Unit'
                                    size='medium'
                                >
                                    {UNITS.map((unit: string) => (
                                        <SelectOption
                                            key={unit}
                                            onChange={(unit: string) =>
                                                handleOnChange("unit", unit, index)
                                            }
                                            value={unit}
                                        >
                                            {unit}
                                        </SelectOption>
                                    ))}
                                </Select>
                            </S.InputRow>
                        </S.InputContainer>
                    );
                })}
                {recipeValidation.isIngredient && !recipe.ingredients.length && (
                    <Label
                        fontSize='1rem'
                        textAlign='center'
                        fontWeight='700'
                        fontFamily='Lato'
                        color={mainTheme.colors.error}
                    >
                        {recipeValidation.isIngredient}
                    </Label>
                )}
                <Button
                    isLoading={loading}
                    width='12rem'
                    styleType='gradientFull'
                    onClick={handleSubmit}
                    borderRadius='15px'
                    fontSize='1rem'
                    size='small'
                >
                    Add new meal
                </Button>
            </S.Border>
        </S.Container>
    );
};

export default RecipeView;
