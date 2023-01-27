import Label from "../../../../../components/UI/Label/Label";
import CommentsList from "./CommentsList/CommentsList";
import AddNewPostComment from "./AddNewComment/AddNewPostComment";
import ActionButton from "../../../../../components/UI/ActionButton/ActionButton";

import { ReactComponent as Comment } from "../../../../../assets/icons/CommentIcon.svg";
import { mainTheme } from "../../../../../themes/mainTheme";
import { ReactComponent as HeartEmptyIcon } from "../../../../../assets/icons/heart-empty.svg";
import { ReactComponent as HeartFullIcon } from "../../../../../assets/icons/heart-full.svg";

import { FullPostI } from "../../const/Posts";

import * as S from "./FullPostItem.style";
import { useDispatch, useSelector } from "react-redux";
import axiosFoodieInstance from "../../../../../axios/axiosFoodieInstance";
import { setNotification } from "../../../../../redux/slices/notification";
import { useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { TStore } from "../../../../../redux/store/store";

type FullPostItem = {
    post: FullPostI;
    close: () => void;
};

const FullPostItem = ({ post, close }: FullPostItem) => {
    const dispatch = useDispatch();
    const queryClient = useQueryClient();
    const user = useSelector((state: TStore) => state?.userReducer);
    const [isLike, setIsLike] = useState(post.likes);

    useEffect(() => {
        setIsLike(post.likes);
    }, [post.likes]);
    const addLike = () => {
        axiosFoodieInstance
            .get(`/forum/post/like/${post.id}`)
            .then((response) => {
                if (response.status === 201 || response.status === 200) {
                    dispatch(
                        setNotification({
                            label: "Like post",
                            header: "Success",
                            message: "Like was added",
                            timeout: 5000,
                        }),
                    );
                    queryClient.invalidateQueries([`forumPost-${post.id}`, post.id], {
                        refetchType: "all",
                    });
                    queryClient.invalidateQueries(["forumPosts"], {
                        refetchType: "all",
                    });
                }
            })
            .catch((err) => {
                const errorMessage = err.response.data?.message
                    ? err.response.data.message
                    : "Cannot add like";

                dispatch(
                    setNotification({
                        label: "add like to post",
                        header: "Failed",
                        message: errorMessage,
                        timeout: 5000,
                    }),
                );
            });
    };
    return (
        <S.Container>
            <S.Post>
                <S.Header>
                    {post.userProfilePicture ? <img src={post.userProfilePicture} alt='' /> : null}
                    <Label
                        fontSize='1rem'
                        textAlign='center'
                        fontWeight='600'
                        color={mainTheme.colors.mainBlack}
                    >
                        {post.author && post.author.firstName && post.author.lastName
                            ? `${post.author.firstName} ${post.author.lastName}`
                            : `user${post.author.id}`}
                    </Label>
                </S.Header>
                <Label textAlign='center'>{post.title}</Label>
                <Label textAlign='center'>{post.description}</Label>
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
                                {post.postComments?.length}
                            </Label>
                        </S.IconWrapper>
                        <S.IconWrapper>
                            {isLike && user && isLike.find((item) => item.user.id === user.id) ? (
                                <HeartFullIcon onClick={addLike} />
                            ) : (
                                <HeartEmptyIcon onClick={addLike} />
                            )}
                            <Label
                                fontSize='1rem'
                                fontWeight='400'
                                color={mainTheme.colors.mainBlack}
                                textAlign='center'
                            >
                                {post.likes?.length}
                            </Label>
                        </S.IconWrapper>
                    </S.FfirstItem>
                </S.Footer>
            </S.Post>
            <S.Comments>
                <AddNewPostComment id={post.id} />
                <CommentsList comments={post.postComments} />
            </S.Comments>
            <S.ClosingContainer>
                <ActionButton type='remove' onClick={close} />
            </S.ClosingContainer>
        </S.Container>
    );
};

export default FullPostItem;
