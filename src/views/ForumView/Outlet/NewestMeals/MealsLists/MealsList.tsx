import React from "react";
import { BasicPostI, recipeVerifiedBasicI } from "../../../PostsList/const/Posts";
import * as S from "./MealsList.style"
import MealItem from "./MealItem/MealItem";


interface props {
  basicPosts: recipeVerifiedBasicI[];
}

const MealsList = ({ basicPosts }: props) => {
  return (
    <S.Container>
      {basicPosts.map((item: recipeVerifiedBasicI) => {
        return (
          <MealItem
            key={item.id}
            id={item.id}
            author={item.author}
            title={item.title}
            description={item.description}
            userProfilePicture={item.userProfilePicture}
            likesCount={item.likesCount}
            commentsCount={item.commentsCount}
            timestamp={item.timestamp}
            recipeComments={item.recipeComments}/>
        );
      })}
    </S.Container>
  );
};

export default MealsList;