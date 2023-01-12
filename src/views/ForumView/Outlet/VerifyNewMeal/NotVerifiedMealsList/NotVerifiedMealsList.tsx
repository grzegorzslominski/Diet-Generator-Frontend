import React from "react";
import { recipeNotVerifiedBasicI } from "../../../PostsList/const/Posts";
import * as S from "./NotVerifiedMealsList.style"
import NotVerifiedMealItem from "./NotVerifiedMealItem/NotVerifiedMealItem";


interface props {
  basicPosts: recipeNotVerifiedBasicI[];
}

const MealsList = ({ basicPosts }: props) => {
  return (
    <S.Container>
      {basicPosts.map((item: recipeNotVerifiedBasicI) => {
        return (
          <NotVerifiedMealItem
            key={item.id}
            id={item.id}
            author={item.author}
            title={item.title}
            description={item.description}
            userProfilePicture={item.userProfilePicture}
            likesCount={item.likesCount}
            commentsCount={item.commentsCount}
            timestamp={item.timestamp}
            />
        );
      })}
    </S.Container>
  );
};

export default MealsList;