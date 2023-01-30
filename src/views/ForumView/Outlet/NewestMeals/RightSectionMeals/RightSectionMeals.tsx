import { useState, useEffect } from "react";

import { mainTheme } from "../../../../../themes/mainTheme";
import { ReactComponent as HeartEmptyIcon } from "../../../../../assets/icons/heart-empty.svg";
import { ReactComponent as HeartFullIcon } from "../../../../../assets/icons/heart-full.svg";

import { ReactComponent as Comment } from "../../../../../assets/icons/CommentIcon.svg";

import Label from "../../../../../components/UI/Label/Label";
import Button from "../../../../../components/UI/Button/Button";
import ModalPortal from "../../../../../components/UI/ModalPortal/ModalPortal";

import * as S from "./RightSectionMeals.style";
import { useQuery } from "@tanstack/react-query";
import { getForumFullMeal, recipeVerifiedBasicI } from "../../../PostsList/const/Posts";
import FullVerifiedMealItem from "../MealsLists/SingleVerifiedMeal/FullVerifiedMeal/FullVerifiedMealItem";
import { NAVIGATION } from "../../../../../navigation/paths";
import { useNavigate } from "react-router-dom";

interface RightSectionProps {
    basicPosts: recipeVerifiedBasicI[];
}
const RightSectionMeals = ({ basicPosts }: RightSectionProps) => {
    const [isOpenMostLikedPost, setIsOpenMostLikedPost] = useState<boolean>(false);
    const [mostLikedPost, setMostLikedPost] = useState<recipeVerifiedBasicI | undefined>();
    const [id, setId] = useState<number>();
    const navigate = useNavigate();
    const handleNavigate = () => navigate(NAVIGATION.recipes);

    useEffect(() => {
        const mostLikedPost = basicPosts.reduce((prev, curr) =>
            prev.likesCount > curr.likesCount ? prev : curr,
        );
        setMostLikedPost(mostLikedPost);
        setId(mostLikedPost.id);
    }, [basicPosts, id]);

    const { data: fullPost } = useQuery([`forumPost-${id}`, id], () => getForumFullMeal(id), {
        enabled: Boolean(id),
    });

    const handleIsOpenMostLikedPost = () => setIsOpenMostLikedPost((curr) => !curr);
    return (
        <S.Wrapper>
            <S.Container2>
                <Label color={mainTheme.colors.mainBlack}>Add new post</Label>
                <Button
                    styleType='primaryFull'
                    width='8rem'
                    isLoading={false}
                    size='small'
                    borderRadius='10px'
                    fontSize='1rem'
                    onClick={handleNavigate}
                    background={mainTheme.gradients.buttonGradient}
                >
                    <Label textAlign='center' color='white'>
                        Add new meal
                    </Label>
                </Button>
            </S.Container2>
            <S.Container>
                {mostLikedPost ? (
                    <>
                        <S.Header>
                            {mostLikedPost.userProfilePicture ? (
                                <img src={mostLikedPost.userProfilePicture} alt='' />
                            ) : null}
                            <Label color={mainTheme.colors.mainBlack}>
                                {mostLikedPost.author.firstName && mostLikedPost.author.lastName
                                    ? `${mostLikedPost.author.firstName} ${mostLikedPost.author.lastName}`
                                    : `user${mostLikedPost.author.id}`}
                            </Label>
                        </S.Header>
                        <S.MiddleSection>
                            <Label textAlign='center' color={mainTheme.colors.mainBlack}>
                                {mostLikedPost.title}
                            </Label>
                            <S.Description>
                                <Label textAlign='center' color={mainTheme.colors.mainBlack}>
                                    {mostLikedPost.description}
                                </Label>
                            </S.Description>
                        </S.MiddleSection>
                        <S.IconContainer>
                            <HeartEmptyIcon />
                            <Label textAlign='center' color={mainTheme.colors.mainBlack}>
                                {mostLikedPost.likesCount}
                            </Label>
                            <Comment />
                            <Label textAlign='center' color={mainTheme.colors.mainBlack}>
                                {mostLikedPost.commentsCount}
                            </Label>
                        </S.IconContainer>
                        <S.Footer>
                            <Button
                                styleType='primaryFull'
                                width='6rem'
                                isLoading={false}
                                size='small'
                                borderRadius='10px'
                                fontSize='1rem'
                                onClick={() => handleIsOpenMostLikedPost()}
                                background={mainTheme.gradients.buttonGradient}
                            >
                                <Label textAlign='center' color='white'>
                                    Go to post
                                </Label>
                            </Button>
                        </S.Footer>
                    </>
                ) : null}
            </S.Container>
            {isOpenMostLikedPost && fullPost ? (
                <ModalPortal
                    blurLevel='normal'
                    blurBackground={true}
                    close={handleIsOpenMostLikedPost}
                >
                    <FullVerifiedMealItem recipe={fullPost}  close={handleIsOpenMostLikedPost} />
                </ModalPortal>
            ) : null}
        </S.Wrapper>
    );
};

export default RightSectionMeals;
