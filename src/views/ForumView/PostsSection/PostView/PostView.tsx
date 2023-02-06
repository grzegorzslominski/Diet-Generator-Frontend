import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import BoxPad from "../../../../components/UI/BoxPad/BoxPad";
import Spinner from "../../../../components/UI/Spinner/Spinner";
import ViewBox from "../../../../components/UI/ViewBox/ViewBox";
import Label from "../../../../components/UI/Label/Label";
import AuthorBox from "../../../../components/AuthorBox/AuthorBox";
import AddComment from "../../components/AddComment/AddComment";
import CommentsList from "../../components/CommentsList/CommentsList";

import { mainTheme } from "../../../../themes/mainTheme";
import noPhoto from "../../../../assets/no-photo.jpg";
import { getForumPost } from "../../../../models/Forum/Forum";
import { ReactComponent as CommentIcon } from "../../../../assets/icons/comment.svg";
import { ReactComponent as HeartEmptyIcon } from "../../../../assets/icons/heart-empty.svg";
import { ReactComponent as HeartFullIcon } from "../../../../assets/icons/heart-full.svg";
import { FollowStatus, Like } from "../../../../models/User/ExpandedUser";
import { likePost } from "../../../../models/Forum/Post";
import { setNotification } from "../../../../redux/slices/notification";
import { parseUnixTime } from "../../../AuthViews/helpers/date";

import * as S from "./PostView.style";

type PostViewProps = {
    userID: number | undefined;
};

const PostView = ({ userID }: PostViewProps) => {
    const { postID } = useParams();
    const dispatch = useDispatch();

    const { data: postData, isLoading } = useQuery(
        ["forumPost", postID],
        () => getForumPost(postID ? +postID : undefined),
        { refetchOnMount: true },
    );
    const [likeStatus, setLikeStatus] = useState<FollowStatus>({
        follow: postData?.likes?.some((like: Like) => like.user.id === userID) || false,
        followersCount: postData?.likes?.length || 0,
    });

    const handleLikePost = async () => {
        if (!userID || !postData) return;
        const currentLikeStatus: FollowStatus = JSON.parse(JSON.stringify(likeStatus));
        const followResponse = await likePost(postData.id);
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
        <ViewBox>
            <S.Container>
                {isLoading || !postData ? (
                    <Spinner size='big' color='secondary' />
                ) : (
                    <>
                        <BoxPad padding='0' width='100%'>
                            <S.PostContainer>
                                <S.PostInfo>
                                    <S.InfoItem>
                                        <Label
                                            fontSize='16px'
                                            fontWeight='500'
                                            width='15px'
                                            color={mainTheme.colors.secondaryColor}
                                        >
                                            {likeStatus.followersCount}
                                        </Label>
                                        {likeStatus.follow ? (
                                            <HeartFullIcon onClick={handleLikePost} />
                                        ) : (
                                            <HeartEmptyIcon onClick={handleLikePost} />
                                        )}
                                    </S.InfoItem>
                                    <S.InfoItem>
                                        <Label
                                            fontSize='16px'
                                            fontWeight='500'
                                            width='15px'
                                            color={mainTheme.colors.secondaryColor}
                                        >
                                            {postData.postComments?.length}
                                        </Label>
                                        <CommentIcon />
                                    </S.InfoItem>
                                </S.PostInfo>
                                <S.PostContent>
                                    <S.Header>
                                        <Label
                                            fontSize='18px'
                                            fontWeight='500'
                                            color={mainTheme.colors.mainBlack}
                                        >
                                            {postData?.title}
                                        </Label>
                                        <Label
                                            fontSize='14px'
                                            color={mainTheme.colors.mainBlack}
                                            textAlign='end'
                                        >
                                            {parseUnixTime(postData?.timestamp)}
                                        </Label>
                                    </S.Header>
                                    <S.MiddleSectio>
                                        <img
                                            src={
                                                postData.postImagePath
                                                    ? postData.postImagePath
                                                    : noPhoto
                                            }
                                        />
                                        <Label
                                            fontSize='16px'
                                            lineHeight='22px'
                                            color={mainTheme.colors.mainBlack}
                                            textAlign='justify'
                                        >
                                            {postData.description}
                                        </Label>
                                    </S.MiddleSectio>
                                    <AuthorBox
                                        author={postData.author}
                                        authorImage={postData.userImagePath}
                                    />
                                </S.PostContent>
                            </S.PostContainer>
                        </BoxPad>
                        <AddComment type='post' id={postData.id} />
                        <CommentsList comments={postData.postComments} />
                    </>
                )}
            </S.Container>
        </ViewBox>
    );
};

export default PostView;
