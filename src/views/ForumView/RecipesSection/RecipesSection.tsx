import { useQuery } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";

import { getForumRecipes } from "../../../models/Forum/Forum";

import Spinner from "../../../components/UI/Spinner/Spinner";
import ViewBox from "../../../components/UI/ViewBox/ViewBox";
import RightSection from "../PostsSection/RightSection/RightSection";
import ForumRecipesList from "./ForumRecipesList/ForumRecipesList";

import { User } from "../../../models/User/User";

import * as S from "./RecipesSection.style";

type RecipesSectionProps = {
    user: User;
};

const RecipesSection = ({ user }: RecipesSectionProps) => {
    const { data: recipes, isLoading } = useQuery(["forumRecipes"], () => getForumRecipes());

    return (
        <ViewBox>
            <S.Container>
                {isLoading || !recipes ? (
                    <Spinner size='big' color='secondary' />
                ) : (
                    <>
                        <ForumRecipesList recipes={recipes} user={user} />
                        {/* <RightSection
                            mostLikedRecipe={
                                recipes.sort((a, b) => b.postLikes.length - a.postLikes.length)[0]
                            }
                        /> */}
                        <Outlet />
                    </>
                )}
            </S.Container>
        </ViewBox>
    );
};

export default RecipesSection;
