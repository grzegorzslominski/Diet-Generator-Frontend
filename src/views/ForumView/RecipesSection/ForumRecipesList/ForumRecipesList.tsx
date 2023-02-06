import RecipeItem from "./RecipeItem/RecipeItem";

import { User } from "../../../../models/User/User";
import { Recipe } from "../../../../models/Meal/Recipe";

import * as S from "./ForumRecipesList.style";

type ForumRecipesListProps = {
    user: User;
    recipes: Recipe[];
};

const ForumRecipesList = ({ user, recipes }: ForumRecipesListProps) => {
    return (
        <S.Container>
            {recipes.map((recipe: Recipe) => {
                return <RecipeItem key={recipe.id} recipe={recipe} user={user} />;
            })}
        </S.Container>
    );
};

export default ForumRecipesList;
