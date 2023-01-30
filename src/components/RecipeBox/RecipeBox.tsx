import { useMemo, useState } from "react";

import { mainTheme } from "../../themes/mainTheme";
import noPhoto from "../../assets/no-photo.jpg";
import { prepareRecipeNutriensToChart } from "../../helpers/statistics";
import { prepareRecipeInstrucion } from "../../helpers/textParse";

import RecipeInfoModal from "../../views/UserProfileView/BasicUserProfileView/components/OwnRecipesCard/components/OwnRecipe/RecipeInfoModal/RecipeInfoModal";
import GradientLabel from "../UI/GradientLabel/GradientLabel";
import ActionButton from "../UI/ActionButton/ActionButton";
import Label from "../UI/Label/Label";
import PieChart from "../Charts/PieChart/PieChart";

import { Ingredient, RECIPE_NUTRIONS_PRESET } from "../../models/Meal/Recipe";
import { PublishedRecipe } from "../../models/User/ExpandedUser";

import * as S from "./RecipeBox.style";

type RecipeBoxProps = {
    version?: "basic" | "author";
    recipe: PublishedRecipe;
};

const RecipeBox = ({ recipe, version = "basic" }: RecipeBoxProps) => {
    const preparedNutriensChartData = useMemo(
        () =>
            prepareRecipeNutriensToChart({
                protein: recipe.protein,
                carbs: recipe.carbs,
                fat: recipe.fat,
            }),
        [recipe],
    );

    const [openRecipeModal, setOprenRecipeModal] = useState(false);

    return (
        <S.Wrapper>
            <S.Container>
                <S.TopSection>
                    <ActionButton
                        size='normal'
                        type='info'
                        onClick={() => setOprenRecipeModal(true)}
                    />
                    <S.MealImage image={recipe?.imagePath ? recipe?.imagePath : noPhoto} />
                    <S.RateBox rate={Boolean(recipe.recipeLikes.length)}>
                        <Label
                            textAlign='center'
                            fontFamily='Montserrat'
                            fontWeight='500'
                            fontSize='16px'
                            color={mainTheme.colors.checked}
                        >
                            {recipe.recipeLikes.length ? recipe.recipeLikes.length : "NEW"}
                        </Label>
                    </S.RateBox>
                </S.TopSection>
                <S.MiddleSection version={version}>
                    <Label
                        fontFamily='Montserrat'
                        fontWeight='600'
                        fontSize='18px'
                        textAlign='center'
                        color={mainTheme.colors.mainBlack}
                    >
                        {recipe.title}
                    </Label>
                    {version === "basic" ? (
                        <S.BasicIngredients>
                            <Label fontSize='14px' color='white'>
                                Basic ingredients
                            </Label>
                            <S.IngredientsList>
                                {recipe.recipesIngredients.map((ingredient: Ingredient, index) => {
                                    if (index < 6)
                                        return (
                                            <li key={ingredient.id}>
                                                <Label
                                                    fontWeight='300'
                                                    fontSize='12px'
                                                    lineHeight='10px'
                                                    color='white'
                                                    whiteSpace='no-wrap'
                                                >
                                                    {ingredient.name}
                                                </Label>
                                            </li>
                                        );
                                })}
                            </S.IngredientsList>
                        </S.BasicIngredients>
                    ) : (
                        <S.TextContent>
                            <Label
                                fontFamily='Montserrat'
                                fontSize='11px'
                                textAlign='center'
                                color='white'
                            >
                                {prepareRecipeInstrucion(recipe.instructions)}
                            </Label>
                        </S.TextContent>
                    )}
                </S.MiddleSection>

                <S.BottomSection>
                    <S.NutrionsContainer>
                        <S.NutrionItem>
                            <Label
                                fontFamily='Montserrat'
                                fontWeight='500'
                                fontSize='18px'
                                color={mainTheme.colors.inputText}
                            >
                                {"Kcal: "}
                            </Label>
                            <Label
                                fontFamily='Montserrat'
                                fontWeight='500'
                                fontSize='18px'
                                color='#E6CB6E'
                            >
                                {recipe.calories}
                            </Label>
                        </S.NutrionItem>
                        {Object.keys(RECIPE_NUTRIONS_PRESET).map((nutrionKey: string) => (
                            <S.NutrionItem key={nutrionKey}>
                                <Label
                                    fontFamily='Montserrat'
                                    fontWeight='500'
                                    fontSize='14px'
                                    color={mainTheme.colors.mainBlack}
                                >
                                    {`${RECIPE_NUTRIONS_PRESET[nutrionKey]}:`}
                                </Label>
                                <Label
                                    fontFamily='Montserrat'
                                    fontWeight='500'
                                    fontSize='14px'
                                    color='#E6CB6E;'
                                >
                                    {`${recipe[nutrionKey]} g`}
                                </Label>
                            </S.NutrionItem>
                        ))}
                    </S.NutrionsContainer>
                    <PieChart nutriensChartData={preparedNutriensChartData} />
                </S.BottomSection>
            </S.Container>
            {version !== "basic" && recipe?.user && (
                <S.AuthorBox>
                    <S.AuthorName>
                        <GradientLabel gradient={mainTheme.gradients.buttonGradient}>
                            <Label fontSize='12px' fontWeight='600'>
                                Author
                            </Label>
                        </GradientLabel>
                        <Label fontSize='14px' fontWeight='500' color={mainTheme.colors.mainBlack}>
                            {`${recipe.user.firstName} ${recipe.user.lastName}`}
                        </Label>
                    </S.AuthorName>
                    <img
                        src={recipe.recipeCreatorImage ? recipe.recipeCreatorImage : noPhoto}
                        alt='meal author'
                    />
                </S.AuthorBox>
            )}
            {openRecipeModal && (
                <RecipeInfoModal userRecipe={recipe} close={() => setOprenRecipeModal(false)} />
            )}
        </S.Wrapper>
    );
};

export default RecipeBox;
