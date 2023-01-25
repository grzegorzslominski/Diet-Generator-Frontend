import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { ReactComponent as HeartEmptyIcon } from "../../../assets/icons/heart-empty.svg";
import { ReactComponent as HeartFullIcon } from "../../../assets/icons/heart-full.svg";
import {
    changeFollowingUserStatus,
    Follower,
    FollowProfileStatus,
    getExpandedUserProfile,
} from "../../../models/User/ExpandedUser";
import noPhoto from "../../../assets/no-photo.png";
import { Post } from "../../../models/Forum/Post";
import { useParams } from "react-router-dom";
import { mainTheme } from "../../../themes/mainTheme";
import { setNotification } from "../../../redux/slices/notification";

import ViewBox from "../../../components/UI/ViewBox/ViewBox";
import Label from "../../../components/UI/Label/Label";
import Carousel from "../../../components/UI/Carousel/Carousel";
import ProfileSection from "./components/SectionBox/SectionBox";
import RecipeBox from "../../../components/RecipeBox/RecipeBox";
import ProfileArticle from "./components/ProfileArticle/ProfileArticle";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Social from "../../../components/Socials/Socials";

import * as S from "./ExpandedUserProfileView.style";

const checkUserFollow = (followingList: Follower[], userID: number) => {
    return followingList.some((listRecord) => listRecord.follower.id === userID);
};

type ExpandedUserProfileViewProps = {
    loggedUserID: number;
};

const ExpandedUserProfileView = ({ loggedUserID }: ExpandedUserProfileViewProps) => {
    const { userID } = useParams();
    const dispatch = useDispatch();
    const { data: userProfile, isLoading } = useQuery(
        [`expandedProfile-${userID}`, userID],
        () => getExpandedUserProfile(userID),
        {
            enabled: Boolean(userID),
        },
    );
    const [followingUser, setFollowingUser] = useState<FollowProfileStatus>();

    useEffect(() => {
        if (userProfile) {
            const follow: boolean = checkUserFollow(userProfile?.followingList, loggedUserID);
            const currentFollows = {
                follow: follow,
                followersCount: userProfile.followingList.length,
            };
            setFollowingUser(currentFollows);
        }
    }, [userProfile]);

    const followUser = async () => {
        console.log("test");

        if (!userProfile?.user.id) return;
        const currentFollowingUser: FollowProfileStatus = JSON.parse(JSON.stringify(followingUser));
        const followResponse = await changeFollowingUserStatus(userProfile?.user.id);
        if (followResponse === 200) {
            currentFollowingUser.follow = !followingUser?.follow;
            currentFollowingUser.followersCount =
                followingUser?.follow && followingUser.followersCount
                    ? currentFollowingUser.followersCount - 1
                    : currentFollowingUser.followersCount + 1;
            setFollowingUser(currentFollowingUser);
        } else {
            dispatch(
                setNotification({
                    label: "Follow",
                    header: "Failed",
                    message: "Failed to follow user, please try again later",
                    timeout: 5000,
                }),
            );
        }
    };

    return (
        <ViewBox paddintTop={false}>
            {isLoading ? (
                <Spinner color='secondary' size='big' />
            ) : (
                <S.Container>
                    <S.TopBackground
                        backgroundIMG={
                            userProfile?.userExtras.backgroundImagePath
                                ? userProfile?.userExtras.backgroundImagePath
                                : noPhoto
                        }
                    />
                    <S.Content>
                        <S.TopSection>
                            <S.MainDetails>
                                <S.UserAvatar
                                    avatarIMG={
                                        userProfile?.userImagePath
                                            ? userProfile?.userImagePath
                                            : noPhoto
                                    }
                                />
                                <S.UserNameContanier>
                                    <Label
                                        fontSize='24px'
                                        fontWeight='600'
                                        color={mainTheme.colors.mainBlack}
                                    >
                                        {`${userProfile?.user.firstName} ${userProfile?.user.lastName}`}
                                    </Label>
                                    <Label
                                        fontSize='14px'
                                        fontWeight='600'
                                        color={mainTheme.colors.inputText}
                                    >
                                        {userProfile?.userExtras.profession}
                                    </Label>
                                    <S.UserFollowers>
                                        <Label
                                            fontSize='20px'
                                            fontWeight='600'
                                            color={mainTheme.colors.inputText}
                                        >
                                            {followingUser?.followersCount}
                                        </Label>
                                        {followingUser?.follow ? (
                                            <HeartFullIcon onClick={followUser} />
                                        ) : (
                                            <HeartEmptyIcon onClick={followUser} />
                                        )}
                                    </S.UserFollowers>
                                </S.UserNameContanier>
                            </S.MainDetails>
                            <S.SocialContainer>
                                <Social
                                    social={userProfile?.socials ? userProfile?.socials : {}}
                                    iconSize='18px'
                                />
                            </S.SocialContainer>
                        </S.TopSection>
                        <ProfileSection title='About me' padding='0 12px'>
                            <Label width='100%' fontSize='14px' color={mainTheme.colors.inputText}>
                                {userProfile?.userExtras.about_me}
                            </Label>
                        </ProfileSection>
                        <ProfileSection title='Creator meals' padding='0 12px'>
                            {userProfile?.userRecipes && userProfile.userRecipes.length ? (
                                <S.MealsContainer>
                                    <Carousel
                                        widthElement={270}
                                        version='arrows'
                                        gap={39.5}
                                        buttonPosition={{ horizontal: -35, vertical: 230 }}
                                    >
                                        {userProfile?.userRecipes.map((recipe, index) => (
                                            <RecipeBox key={index} recipe={recipe} />
                                        ))}
                                    </Carousel>
                                </S.MealsContainer>
                            ) : (
                                <S.EmptyContainer>
                                    <Label fontSize='12px'>
                                        This creator has not added any recipes yet
                                    </Label>
                                </S.EmptyContainer>
                            )}
                        </ProfileSection>

                        <ProfileSection title='Creatore articles' gap='24px' padding='0 12px'>
                            {userProfile?.userPosts && userProfile?.userPosts.length ? (
                                <>
                                    {userProfile?.userPosts.map((post: Post) => (
                                        <ProfileArticle
                                            key={post.id}
                                            post={post}
                                            author={userProfile.user}
                                        />
                                    ))}
                                </>
                            ) : (
                                <S.EmptyContainer>
                                    <Label fontSize='12px'>
                                        This creator has not added any posts yet
                                    </Label>
                                </S.EmptyContainer>
                            )}
                        </ProfileSection>
                    </S.Content>
                </S.Container>
            )}
        </ViewBox>
    );
};

export default ExpandedUserProfileView;
