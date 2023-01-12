import React from "react";
import { useQuery } from "@tanstack/react-query";
import ModalPortal from "../../../../../../../components/UI/ModalPortal/ModalPortal";
import FullNotVerifiedMealItem from "./FullVerifiedMealItem/FullNotVerifiedMealItem";
import { getForumUnverifiedPostMeal } from "../../../../../PostsList/const/Posts";


interface SinglePostItemProps {
  id: number;
  close: () => void;
}
const SingleNotVerifiedMeal = ({ id, close }: SinglePostItemProps) => {
  const {
    data: fullPost,
    isLoading,
    error,
  } = useQuery([`forumRecipeVerified-${id}`, id], () => getForumUnverifiedPostMeal(id));

  return fullPost ? (
    <ModalPortal blurLevel='normal' blurBackground={true} close={close}>
      <FullNotVerifiedMealItem recipe={fullPost} close={close} />
    </ModalPortal>
  ) : null;
};

export default SingleNotVerifiedMeal;