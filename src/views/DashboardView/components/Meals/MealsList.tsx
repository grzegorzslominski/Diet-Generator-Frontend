import { mainTheme } from "../../../../themes/mainTheme";
import { MEALS_DATA, MealI } from "./const/mealListData";

import Label from "../../../../components/UI/Label/Label";
import MealItem from "./item/MealItem";

import * as S from "./MealList.style";

type MealsListProps = {
    title: string;
    version?: "basic" | "author";
};
const MealsList = ({ title, version = "basic" }: MealsListProps) => {
    return (
        <S.Container>
            <Label
                fontSize='27px'
                fontFamily='Lato'
                fontWeight='700'
                color={mainTheme.colors.mainBlack}
            >
                {title}
            </Label>

            <S.MealsContainer>
                {MEALS_DATA.map((meal: MealI) => (
                    <MealItem key={meal.name} {...meal} version={version} />
                ))}
            </S.MealsContainer>
        </S.Container>
    );
};

export default MealsList;
