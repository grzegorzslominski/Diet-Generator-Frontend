import NutriensBarChart from "../../../../../../../components/NutriensBarChart/NutriensBarChart";
import ActionButton from "../../../../../../../components/UI/ActionButton/ActionButton";
import Label from "../../../../../../../components/UI/Label/Label";
import { mainTheme } from "../../../../../../../themes/mainTheme";
import { Meal } from "../../../../const/userData";
import * as S from "./OwnMeal.style";

const OwnMeal = (meal: Meal) => {
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
                    {meal.name}
                </Label>
                <ActionButton type='info' onClick={() => {}} size='small' />
            </S.TopSection>
            <S.MealValuesSection>
                <NutriensBarChart {...meal.nutrients} />
                <S.CaloriesValueContainer>
                    <Label fontSize='16px' fontWeight='500' color={mainTheme.colors.mainBlack}>
                        {meal.kcal}
                    </Label>
                    <Label fontSize='12px' fontWeight='600' color={mainTheme.colors.mainBlack}>
                        kcal
                    </Label>
                </S.CaloriesValueContainer>
            </S.MealValuesSection>
        </S.Container>
    );
};

export default OwnMeal;
