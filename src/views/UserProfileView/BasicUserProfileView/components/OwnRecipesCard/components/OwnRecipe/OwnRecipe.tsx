import { useState } from "react";

import { mainTheme } from "../../../../../../../themes/mainTheme";

import NutriensBarChart from "../../../../../../../components/NutriensBarChart/NutriensBarChart";
import ActionButton from "../../../../../../../components/UI/ActionButton/ActionButton";
import Label from "../../../../../../../components/UI/Label/Label";
import RecipeInfoModal from "./RecipeInfoModal/RecipeInfoModal";

import { Recipe } from "../../../../../../../models/Meal/Recipe";

import * as S from "./OwnRecipe.style";

type OwnRecipeProps = {
    userRecipe: Recipe;
};

const OwnRecipe = ({ userRecipe }: OwnRecipeProps) => {
    const [openRecipeModal, setOpenRecipeInfoModal] = useState(false);

    return (
        <S.Container>
            <S.TopSection>
                <Label
                    fontFamily='Lato'
                    fontWeight='700'
                    color={mainTheme.colors.inputText}
                    fontSize='16px'
                    lineHeight='22px'
                >
                    {userRecipe.title}
                </Label>
                <ActionButton
                    type='info'
                    onClick={() => setOpenRecipeInfoModal(true)}
                    size='small'
                />
            </S.TopSection>
            <S.MealValuesSection>
                <NutriensBarChart
                    fat={userRecipe?.fat}
                    protein={userRecipe?.protein}
                    carbs={userRecipe?.carbs}
                />
                <S.CaloriesValueContainer>
                    <Label fontSize='16px' fontWeight='500' color={mainTheme.colors.mainBlack}>
                        {userRecipe.calories}
                    </Label>
                    <Label fontSize='12px' fontWeight='600' color={mainTheme.colors.mainBlack}>
                        kcal
                    </Label>
                </S.CaloriesValueContainer>
            </S.MealValuesSection>
            {openRecipeModal && (
                <RecipeInfoModal
                    userRecipe={userRecipe}
                    close={() => setOpenRecipeInfoModal(false)}
                />
            )}
        </S.Container>
    );
};

export default OwnRecipe;
