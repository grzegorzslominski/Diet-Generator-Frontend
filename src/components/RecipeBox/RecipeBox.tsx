import { mainTheme } from "../../themes/mainTheme";
import noPhoto from "../../assets/no-photo.png";

import GradientLabel from "../UI/GradientLabel/GradientLabel";
import Label from "../UI/Label/Label";
import PieChart from "../Charts/PieChart/PieChart";

import { Ingredient, Recipe, RECIPE_NUTRIONS_PRESET } from "../../models/Meal/Recipe";

import * as S from "./RecipeBox.style";
import { PublishedRecipe } from "../../models/User/ExpandedUser";
import ActionButton from "../UI/ActionButton/ActionButton";
import { useMemo, useState } from "react";
import RecipeInfoModal from "../../views/UserProfileView/BasicUserProfileView/components/OwnRecipesCard/components/OwnRecipe/RecipeInfoModal/RecipeInfoModal";
import { prepareRecipeNutriensToChart } from "../../helpers/statistics";

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
                            lineHeight='1rem'
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
                        fontSize='22px'
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
                                {recipe.recipesIngredients.map((ingredient: Ingredient) => {
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
                                {recipe.instructions}
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
            {version === "author" && recipe?.created_at ? (
                <S.AuthorBox>
                    <S.AuthorName>
                        <GradientLabel gradient={mainTheme.gradients.buttonGradient}>
                            <Label fontSize='12px' fontWeight='600'>
                                Author
                            </Label>
                        </GradientLabel>
                        <Label fontSize='14px' fontWeight='500' color={mainTheme.colors.mainBlack}>
                            {recipe.created_at}
                        </Label>
                    </S.AuthorName>
                    <img src={""} alt='meal author' />
                </S.AuthorBox>
            ) : null}
            {openRecipeModal && (
                <RecipeInfoModal userRecipe={recipe} close={() => setOprenRecipeModal(false)} />
            )}
        </S.Wrapper>
    );
};

export default RecipeBox;
