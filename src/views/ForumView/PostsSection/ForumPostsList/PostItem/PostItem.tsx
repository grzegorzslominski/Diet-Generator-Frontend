import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { mainTheme } from "../../../../../themes/mainTheme";
import { ReactComponent as HeartEmptyIcon } from "../../../../../assets/icons/heart-empty.svg";
import { ReactComponent as HeartFullIcon } from "../../../../../assets/icons/heart-full.svg";
import { ReactComponent as Comment } from "../../../../../assets/icons/comment.svg";
import { parseUnixTime } from "../../../../AuthViews/helpers/date";
import noPhoto from "../../../../../assets/no-photo.jpg";
import { NAVIGATION } from "../../../../../navigation/paths";
import { setNotification } from "../../../../../redux/slices/notification";

import Label from "../../../../../components/UI/Label/Label";
import Button from "../../../../../components/UI/Button/Button";
import Spinner from "../../../../../components/UI/Spinner/Spinner";
import BoxPad from "../../../../../components/UI/BoxPad/BoxPad";
import AuthorBox from "../../../../../components/AuthorBox/AuthorBox";

import { TStore } from "../../../../../redux/store/store";
import { likePost, Post } from "../../../../../models/Forum/Post";
import { FollowStatus } from "../../../../../models/User/ExpandedUser";

import * as S from "./PostItem.style";

type PostItemProps = {
    post: Post;
};

const PostItem = ({ post }: PostItemProps) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state: TStore) => state?.userReducer);

    const [likeStatus, setLikeStatus] = useState<FollowStatus>({
        follow: post?.postLikes?.some((like) => like.user.id === user?.id) || false,
        followersCount: post?.postLikes?.length || 0,
    });

    const handleLikePost = async () => {
        if (!user?.id || !post) return;
        const currentLikeStatus: FollowStatus = JSON.parse(JSON.stringify(likeStatus));
        const followResponse = await likePost(post.id);
        if (followResponse !== undefined) {
            currentLikeStatus.follow = !likeStatus?.follow;
            currentLikeStatus.followersCount =
                likeStatus?.follow && likeStatus.followersCount
                    ? currentLikeStatus.followersCount - 1
                    : currentLikeStatus.followersCount + 1;
            setLikeStatus(currentLikeStatus);
        } else {
            dispatch(
                setNotification({
                    label: "Follow",
                    header: "Failed",
                    message: "Failed to change like status, please try again later",
                    timeout: 5000,
                }),
            );
        }
    };

    return (
        <BoxPad padding='24px 30px' width='100%'>
            <S.Container>
                {!post ? (
                    <Spinner color='secondary' size='medium' />
                ) : (
                    <>
                        <S.Header>
                            <Label
                                fontSize='18px'
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
                                            {post.postComments.length}
                                        </Label>
                                    </S.IconWrapper>
                                    <S.IconWrapper>
                                        {likeStatus.follow ? (
                                            <HeartFullIcon onClick={handleLikePost} />
                                        ) : (
                                            <HeartEmptyIcon onClick={handleLikePost} />
                                        )}
                                        <Label
                                            fontSize='1rem'
                                            fontWeight='400'
                                            color={mainTheme.colors.mainBlack}
                                            textAlign='center'
                                        >
                                            {likeStatus.followersCount}
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
                            <AuthorBox author={post.author} authorImage={post.userProfilePicture} />
                            <Button
                                width='100px'
                                styleType='gradientFull'
                                size='small'
                                fontSize='14px'
                                onClick={() => navigate(`${NAVIGATION.forumPosts}/${post.id}`)}
                            >
                                Go to post
                            </Button>
                        </S.Footer>
                    </>
                )}
            </S.Container>
        </BoxPad>
    );
};

export default PostItem;
