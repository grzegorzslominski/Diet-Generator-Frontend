import { useEffect, useState } from "react";

import { mainTheme } from "../../../../themes/mainTheme";
import { ReactComponent as HeartEmptyIcon } from "../../../../assets/icons/heart-empty.svg";
import { ReactComponent as HeartFullIcon } from "../../../../assets/icons/heart-full.svg";
import { ReactComponent as Comment } from "../../../../assets/icons/CommentIcon.svg";

import Label from "../../../../components/UI/Label/Label";
import Button from "../../../../components/UI/Button/Button";
import SinglePostItem from "../SinglePostItem/SinglePostItem";

import noUser from "../../../../assets/empty-user.jpg";

import { BasicPostI } from "../const/Posts";

import * as S from "./PostItem.style";
import Spinner from "../../../../components/UI/Spinner/Spinner";

type PostItemProps = {
    post: BasicPostI;
    openPost: boolean;
};

const PostItem = ({ post, openPost }: PostItemProps) => {
    const [openModal, setOpenModal] = useState(false);

    const handleChangeOpenModal = () => setOpenModal((prev) => !prev);

    useEffect(() => {
        setOpenModal(openPost);
    }, [openPost]);

    return (
        <S.Container>
            {!post ? (
                <Spinner color='secondary' size='medium' />
            ) : (
                <>
                    <S.Header>
                        {
                            <img
                                src={post?.userProfilePicture ? post.userProfilePicture : noUser}
                                alt='User picture'
                            />
                        }

                        <Label
                            fontSize='1rem'
                            textAlign='center'
                            fontWeight='600'
                            color={mainTheme.colors.mainBlack}
                        >
                            {post?.author && post?.author.firstName && post?.author.lastName
                                ? `${post?.author?.firstName} ${post?.author?.lastName}`
                                : `user${post?.author?.id}`}
                        </Label>
                    </S.Header>
                    <S.Title>
                        <Label
                            textAlign='center'
                            fontSize='1rem'
                            fontWeight='400'
                            color={mainTheme.colors.mainBlack}
                        >
                            {post.title}
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
                            {post.description}
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
                                    {post.commentsCount}
                                </Label>
                            </S.IconWrapper>
                            <S.IconWrapper>
                                <HeartEmptyIcon />
                                <Label
                                    fontSize='1rem'
                                    fontWeight='400'
                                    color={mainTheme.colors.mainBlack}
                                    textAlign='center'
                                >
                                    {post.likesCount}
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
                                onClick={() => handleChangeOpenModal()}
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
                    {openModal ? (
                        <SinglePostItem id={post.id} close={handleChangeOpenModal} />
                    ) : null}
                </>
            )}
        </S.Container>
    );
};

export default PostItem;
