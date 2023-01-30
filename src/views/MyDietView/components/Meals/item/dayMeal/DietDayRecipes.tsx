import { PublishedRecipe } from "../../../../../../models/User/ExpandedUser";
import { Product } from "../../../../../../models/Meal/Exclusions";

import DietDayRecipe from "./item/DietDayRecipe";

import * as S from "./DietDayRecipes.style";

interface DietDayRecipesProps {
    recipes: PublishedRecipe[];
    userID: number;
    dayDietId: number;
}

const DietDayRecipes = ({ recipes, userID, dayDietId }: DietDayRecipesProps) => {
    return (
        <S.Container>
            {recipes.map((recipe: PublishedRecipe, index: number) => {
                return (
                    <DietDayRecipe
                        key={index}
                        recipe={recipe}
                        userID={userID}
                        dayDietId={dayDietId}
                    />
                );
            })}
        </S.Container>
    );
};

export default DietDayRecipes;
