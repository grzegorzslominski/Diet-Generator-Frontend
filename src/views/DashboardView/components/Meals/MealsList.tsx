import { mainTheme } from "../../../../themes/mainTheme";
import { MEALS_DATA, MealI } from "./const/mealListData";

import Carousel from "../../../../components/UI/Carousel/Carousel";
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
                fontSize='24px'
                fontFamily='Lato'
                fontWeight='600'
                color={mainTheme.colors.mainBlack}
                width='100%'
            >
                {title}
            </Label>

            <S.MealsContainer>
                <Carousel
                    widthElement={270}
                    version='arrows'
                    gap={35}
                    buttonPosition={{ horizontal: -35, vertical: 230 }}
                >
                    {MEALS_DATA.map((meal: MealI) => (
                        <MealItem key={meal.name} {...meal} version={version} />
                    ))}
                </Carousel>
            </S.MealsContainer>
        </S.Container>
    );
};

export default MealsList;
