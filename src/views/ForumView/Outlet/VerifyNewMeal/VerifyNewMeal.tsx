import React from "react";
import * as S from "./VerifyNewMeal.style";
import { Outlet, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {  getForumUnverifiedPostsMeals } from "../../PostsList/const/Posts";
import RightSectionVerifyMeal from "./RightSectionVerifyMeal/RightSectionVerifyMeal";
import NotVerifiedMealsList from "./NotVerifiedMealsList/NotVerifiedMealsList";

const VerifyNewMeal = () => {
  const { postID } = useParams();

  const { data: basicPosts, isLoading, error } = useQuery(["getForumNotVerifiedMeals"], () => getForumUnverifiedPostsMeals());

  return (
    <S.Container>
      {basicPosts ? (
        <>
          <S.Posts>
            <NotVerifiedMealsList basicPosts={basicPosts} />
          </S.Posts>
          <RightSectionVerifyMeal/>
          <Outlet />
        </>
      ) : null}
    </S.Container>
  );
};

export default VerifyNewMeal;
