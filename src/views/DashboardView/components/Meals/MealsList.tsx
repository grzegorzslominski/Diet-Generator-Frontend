import { mainTheme } from "../../../../themes/mainTheme";

import Carousel from "../../../../components/UI/Carousel/Carousel";
import RecipeBox from "../../../../components/RecipeBox/RecipeBox";
import Label from "../../../../components/UI/Label/Label";

import { PublishedRecipe } from "../../../../models/User/ExpandedUser";

import * as S from "./MealList.style";

type MealsListProps = {
    title: string;
    recipes: PublishedRecipe[];
    version?: "basic" | "author";
};
const MealsList = ({ title, recipes, version = "basic" }: MealsListProps) => {
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
                    {recipes.map((recipe: PublishedRecipe, index) => (
                        <RecipeBox key={`meal.name-${index}`} recipe={recipe} version={version} />
                    ))}
                </Carousel>
            </S.MealsContainer>
        </S.Container>
    );
};

export default MealsList;
