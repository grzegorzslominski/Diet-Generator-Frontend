import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getForumFullMeal } from "../../../../PostsList/const/Posts";
import ModalPortal from "../../../../../../components/UI/ModalPortal/ModalPortal";
import FullVerifiedMealItem from "./FullVerifiedMeal/FullVerifiedMealItem";

interface SinglePostItemProps {
    id: number;
    close: () => void;
}
const SingleVerifiedMeal = ({ id, close }: SinglePostItemProps) => {

  const {
    data: fullPost,
    isLoading,
    error,
  } = useQuery([`forumRecipeVerified-${id}`, id], () => getForumFullMeal(id));

    return fullPost ? (
        <ModalPortal blurLevel='normal' blurBackground={true} close={close}>
            <FullVerifiedMealItem recipe={fullPost} close={close} />
        </ModalPortal>
    ) : null;
};

export default SingleVerifiedMeal;
