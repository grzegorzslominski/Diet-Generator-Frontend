import { useEffect, useState } from "react";

import { mainTheme } from "../../../../themes/mainTheme";
import { ReactComponent as HeartEmptyIcon } from "../../../../assets/icons/heart-empty.svg";
import { ReactComponent as Comment } from "../../../../assets/icons/CommentIcon.svg";
import { parseUnixTime } from "../../../AuthViews/helpers/date";
import noPhoto from "../../../../assets/no-photo.jpg";

import Label from "../../../../components/UI/Label/Label";
import Button from "../../../../components/UI/Button/Button";
import SinglePostItem from "../SinglePostItem/SinglePostItem";
import Spinner from "../../../../components/UI/Spinner/Spinner";
import BoxPad from "../../../../components/UI/BoxPad/BoxPad";

import noUser from "../../../../assets/empty-user.jpg";

import { Post } from "../const/Posts";

import * as S from "./PostItem.style";

type PostItemProps = {
    post: Post;
    openPost: boolean;
};

const PostItem = ({ post, openPost }: PostItemProps) => {
    const [openModal, setOpenModal] = useState(false);

    const handleChangeOpenModal = () => setOpenModal((prev) => !prev);

    useEffect(() => {
        setOpenModal(openPost);
    }, [openPost]);

    return (
        <BoxPad padding='24px 30px' width='100%'>
            <S.Container>
                {!post ? (
                    <Spinner color='secondary' size='medium' />
                ) : (
                    <>
                        <S.Header>
                            <Label
                                fontSize='16px'
                                fontWeight='500'
                                color={mainTheme.colors.mainBlack}
                            >
                                {post.title}
                            </Label>
                            <S.HeaderRightSection>
                                <Label
                                    fontSize='14px'
                                    fontWeight='400'
                                    color={mainTheme.colors.mainBlack}
                                    textAlign='end'
                                >
                                    {parseUnixTime(post.timestamp)}
                                </Label>
                                <S.Icons>
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
                                </S.Icons>
                            </S.HeaderRightSection>
                        </S.Header>
                        <S.MidSection>
                            <img src={post?.postImagePath ? post?.postImagePath : noPhoto} />
                            <Label
                                textAlign='justify'
                                fontSize='14px'
                                fontWeight='400'
                                color={mainTheme.colors.mainBlack}
                            >
                                {post.description}
                            </Label>
                        </S.MidSection>

                        <S.Footer>
                            <S.Author>
                                {
                                    <img
                                        src={
                                            post?.userProfilePicture
                                                ? post.userProfilePicture
                                                : noUser
                                        }
                                        alt='User picture'
                                    />
                                }

                                <Label
                                    fontSize='14px'
                                    textAlign='center'
                                    fontWeight='500'
                                    color={mainTheme.colors.mainBlack}
                                >
                                    {post?.author && post?.author.firstName && post?.author.lastName
                                        ? `${post?.author?.firstName} ${post?.author?.lastName}`
                                        : `user${post?.author?.id}`}
                                </Label>
                            </S.Author>
                            <Button
                                width='100px'
                                styleType='gradientFull'
                                size='small'
                                fontSize='14px'
                                onClick={handleChangeOpenModal}
                            >
                                Go to post
                            </Button>
                        </S.Footer>

                        {openModal && <SinglePostItem id={post.id} close={handleChangeOpenModal} />}
                    </>
                )}
            </S.Container>
        </BoxPad>
    );
};

export default PostItem;
