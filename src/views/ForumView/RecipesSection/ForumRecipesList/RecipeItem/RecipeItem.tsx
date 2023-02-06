import RecipeInfo from "../../../../UserProfileView/BasicUserProfileView/components/OwnRecipesCard/components/OwnRecipe/RecipeInfo/RecipeInfo";

import { Recipe } from "../../../../../models/Meal/Recipe";
import { User } from "../../../../../models/User/User";

import * as S from "./RecipeItem.style";

type RecipeItemProps = {
    recipe: Recipe;
    user: User;
};

const RecipeItem = ({ recipe, user }: RecipeItemProps) => {
    return (
        <S.Container>
            <RecipeInfo recipe={recipe} />
        </S.Container>
    );
};

export default RecipeItem;
