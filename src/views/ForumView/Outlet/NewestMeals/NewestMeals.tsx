import { Outlet, useParams } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import { getForumPostsMeals } from "../../PostsList/const/Posts";

import MealsList from "./MealsLists/MealsList";
import RightSectionMeals from "./RightSectionMeals/RightSectionMeals";

import * as S from "./NewestMeals.style";

const NewestMeals = () => {
    const { postID } = useParams();

    const {
        data: basicPosts,
        isLoading,
        error,
    } = useQuery(["getForumPostsMeals"], () => getForumPostsMeals());

    return (
        <S.Container>
            {basicPosts ? (
                <>
                    <S.Posts>
                        <MealsList basicPosts={basicPosts} />
                    </S.Posts>
                    <RightSectionMeals basicPosts={basicPosts} />
                    <Outlet />
                </>
            ) : null}
        </S.Container>
    );
};

export default NewestMeals;
