import { mainTheme } from "../../../../themes/mainTheme";
import { MEALS_DATA, MealI } from "./const/mealListData";

import Carousel from "../../../../components/UI/Carousel/Carousel";
import Label from "../../../../components/UI/Label/Label";
import MealItem from "../../../../components/RecipeBox/RecipeBox";

import * as S from "./MealList.style";
import { RecipeViewI } from "../../models/Dashboard";

type MealsListProps = {
    title: string;
    version?: "basic" | "author";
    creatorRecipes: RecipeViewI[]
};
const MealsList = ({ title, version = "basic", creatorRecipes }: MealsListProps) => {
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
                    buttonPosition={{ horizontal: -30, vertical: 230 }}
                >
                    {creatorRecipes.map((meal: RecipeViewI, index) => (
                        <MealItem recipe={meal} key={`meal.name-${index}`} version={version} />
                    ))}
                </Carousel>
            </S.MealsContainer>
        </S.Container>
    );
};

export default MealsList;
