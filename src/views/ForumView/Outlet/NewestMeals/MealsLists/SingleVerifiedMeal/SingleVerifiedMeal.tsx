import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getForumFullMeal } from "../../../../PostsList/const/Posts";
import ModalPortal from "../../../../../../components/UI/ModalPortal/ModalPortal";
import FullVerifiedMealItem from "./FullVerifiedMeal/FullVerifiedMealItem";
import RecipeInfoModal from "../../../../../UserProfileView/BasicUserProfileView/components/OwnRecipesCard/components/OwnRecipe/RecipeInfoModal/RecipeInfoModal";

interface SinglePostItemProps {
    id: number;
    modalIsOpen: boolean;
    close: () => void;
}
const SingleVerifiedMeal = ({ id,modalIsOpen, close }: SinglePostItemProps) => {

  const {
    data: fullPost
  } = useQuery([`forumRecipeVerified-${id}`, id], () => getForumFullMeal(id));

    return modalIsOpen && fullPost ?  <RecipeInfoModal userRecipe={fullPost} close={close}/> : <></>
};

export default SingleVerifiedMeal;
