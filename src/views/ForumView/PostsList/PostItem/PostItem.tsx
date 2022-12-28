import React, { useState } from "react";
import { PostsI } from "../const/Posts";
import * as S from "./PostItem.style";
import Label from "../../../../components/UI/Label/Label";
import { ReactComponent as Heart } from "../../../../assets/icons/heart.svg";
import { ReactComponent as Comment } from "../../../../assets/icons/CommentIcon.svg";
import Button from "../../../../components/UI/Button/Button";
import { mainTheme } from "../../../../themes/mainTheme";
import { useLocation, useNavigate } from "react-router-dom";

const PostItem = (props: PostsI) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigate = () => {
        if (location.pathname === "/forum/posts") {
            navigate(`/forum/posts/post/${props.id}`);
        } else if (location.pathname === "/forum/newMeals") {
            navigate(`/forum/newMeals/newMeal/${props.id}`);
        } else if (location.pathname === "/forum/feedbacks") {
            navigate(`/forum/feedbacks/feedback/${props.id}`);
        } else if (location.pathname === "/forum/newlyAddedMeals") {
            navigate(`/forum/newlyAddedMeals/newlyAddedMeal/${props.id}`);
        }
    };

    return (
        <S.Container>
            <S.Header>
                <img src={props.image} alt='' />
                <Label
                    fontSize='1rem'
                    textAlign='center'
                    fontWeight='600'
                    color={mainTheme.colors.mainBlack}
                >
                    Posted by user: {props.userName}
                </Label>
            </S.Header>
            <S.Title>
                <Label
                    textAlign='center'
                    fontSize='1rem'
                    fontWeight='400'
                    color={mainTheme.colors.mainBlack}
                >
                    {props.title}
                </Label>
            </S.Title>
            <S.Description>
                <Label
                    textAlign='center'
                    width='80%'
                    fontSize='0.8rem'
                    fontWeight='400'
                    color={mainTheme.colors.mainBlack}
                >
                    {props.description}
                </Label>
            </S.Description>
            <S.Footer>
                <S.FfirstItem>
                    <S.IconWrapper>
                        <Comment />
                        <Label
                            fontSize='1rem'
                            fontWeight='400'
                            color={mainTheme.colors.mainBlack}
                            textAlign='center'
                        >
                            {props.comments.length}
                        </Label>
                    </S.IconWrapper>
                    <S.IconWrapper>
                        <Heart />
                        <Label
                            fontSize='1rem'
                            fontWeight='400'
                            color={mainTheme.colors.mainBlack}
                            textAlign='center'
                        >
                            {props.likes}
                        </Label>
                    </S.IconWrapper>
                </S.FfirstItem>
                <S.FsecondItem>
                    <Button
                        width='80px'
                        styleType='primaryFull'
                        fontSize='0.8rem'
                        size='extraSmall'
                        background={mainTheme.gradients.buttonGradient}
                        onClick={handleNavigate}
                    >
                        <Label
                            textAlign='center'
                            color={mainTheme.colors.mainBlack}
                            fontSize='0.8rem'
                            fontWeight='400'
                        >
                            Join
                        </Label>
                    </Button>
                </S.FsecondItem>
            </S.Footer>
        </S.Container>
    );
};

export default PostItem;
