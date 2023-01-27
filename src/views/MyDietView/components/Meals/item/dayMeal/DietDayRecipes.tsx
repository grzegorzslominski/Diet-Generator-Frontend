import { PublishedRecipe } from "../../../../../../models/User/ExpandedUser";

import DietDayRecipe from "./item/DietDayRecipe";

import * as S from "./DietDayRecipes.style";

interface DietDayRecipesProps {
    recipes: PublishedRecipe[];
    userID: number;
}

const DietDayRecipes = ({ recipes, userID }: DietDayRecipesProps) => {
    return (
        <S.Container>
            {recipes.map((recipe: PublishedRecipe, index: number) => {
                return <DietDayRecipe key={index} recipe={recipe} userID={userID} />;
            })}
        </S.Container>
    );
};

export default DietDayRecipes;
