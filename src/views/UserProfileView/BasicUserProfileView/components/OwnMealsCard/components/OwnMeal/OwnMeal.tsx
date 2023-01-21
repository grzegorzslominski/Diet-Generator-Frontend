import { useState } from "react";

import { mainTheme } from "../../../../../../../themes/mainTheme";

import NutriensBarChart from "../../../../../../../components/NutriensBarChart/NutriensBarChart";
import ActionButton from "../../../../../../../components/UI/ActionButton/ActionButton";
import Label from "../../../../../../../components/UI/Label/Label";

import { UserRecipe } from "../../../../../../../models/Profile/BasicProfile";

import * as S from "./OwnMeal.style";
import MealInfoModal from "./MealInfoModal/MealInfoModal";

type OwnMealProps = {
    userRecipe: UserRecipe;
};

const OwnMeal = ({ userRecipe }: OwnMealProps) => {
    const [openMealInfoModal, setOpenMealInfoModal] = useState(false);

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
                <ActionButton type='info' onClick={() => setOpenMealInfoModal(true)} size='small' />
            </S.TopSection>
            <S.MealValuesSection>
                <NutriensBarChart
                    fat={userRecipe?.fat}
                    protein={userRecipe?.protein}
                    carbs={userRecipe?.carbs}
                />
                <S.CaloriesValueContainer>
                    <Label fontSize='16px' fontWeight='500' color={mainTheme.colors.mainBlack}>
                        {userRecipe.kcal}
                    </Label>
                    <Label fontSize='12px' fontWeight='600' color={mainTheme.colors.mainBlack}>
                        kcal
                    </Label>
                </S.CaloriesValueContainer>
            </S.MealValuesSection>
            {openMealInfoModal && (
                <MealInfoModal userRecipe={userRecipe} close={() => setOpenMealInfoModal(false)} />
            )}
        </S.Container>
    );
};

export default OwnMeal;
