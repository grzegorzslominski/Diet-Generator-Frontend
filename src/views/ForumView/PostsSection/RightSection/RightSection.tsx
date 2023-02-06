import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as HeartEmptyIcon } from "../../../../assets/icons/heart-empty.svg";
import { ReactComponent as HeartFullIcon } from "../../../../assets/icons/heart-full.svg";
import { ReactComponent as Comment } from "../../../../assets/icons/comment.svg";
import defaultUserImage from "../../../../assets/empty-user.jpg";

import { mainTheme } from "../../../../themes/mainTheme";
import { NAVIGATION } from "../../../../navigation/paths";

import BoxPad from "../../../../components/UI/BoxPad/BoxPad";
import Label from "../../../../components/UI/Label/Label";
import Button from "../../../../components/UI/Button/Button";
import AddNewPost from "../../components/AddNewPost/AddNewPost";

import { Post } from "../../../../models/Forum/Post";

import * as S from "./RightSection.style";

interface RightSectionProps {
    mostLikedPost: Post;
}
const RightSection = ({ mostLikedPost }: RightSectionProps) => {
    const navigate = useNavigate();

    const [openNewPostModal, setOpenNewPostModal] = useState(false);

    return (
        <S.Container>
            <BoxPad>
                {mostLikedPost && (
                    <S.PostContainer>
                        <S.SectionTitle>
                            <Label
                                fontSize='16px'
                                fontWeight='600'
                                color={mainTheme.colors.mainBlack}
                            >
                                Most liked posts
                            </Label>
                        </S.SectionTitle>
                        <S.Header
                            onClick={() =>
                                navigate(`${NAVIGATION.profile}/${mostLikedPost.author.id}`)
                            }
                        >
                            <img
                                src={
                                    mostLikedPost.userProfilePicture
                                        ? mostLikedPost.userProfilePicture
                                        : defaultUserImage
                                }
                                alt='Post author'
                            />

                            <Label
                                fontSize='15px'
                                fontWeight='500'
                                color={mainTheme.colors.mainBlack}
                            >
                                {mostLikedPost.author.firstName && mostLikedPost.author.lastName
                                    ? `${mostLikedPost.author.firstName} ${mostLikedPost.author.lastName}`
                                    : `user${mostLikedPost.author.id}`}
                            </Label>
                        </S.Header>
                        <S.PostTitle>
                            <Label
                                fontSize='16px'
                                fontWeight='500'
                                color={mainTheme.colors.mainBlack}
                            >
                                {mostLikedPost.title}
                            </Label>

                            <Label
                                fontSize='14px'
                                textAlign='justify'
                                color={mainTheme.colors.mainBlack}
                            >
                                {mostLikedPost.description}
                            </Label>
                        </S.PostTitle>
                        <S.BottomPostSection>
                            <S.Icons>
                                <HeartEmptyIcon />
                                <Label textAlign='center' color={mainTheme.colors.mainBlack}>
                                    {mostLikedPost.postLikes.length}
                                </Label>
                                <Comment />
                                <Label textAlign='center' color={mainTheme.colors.mainBlack}>
                                    {mostLikedPost.postComments.length}
                                </Label>
                            </S.Icons>

                            <Button
                                styleType='primaryFull'
                                width='100px'
                                size='small'
                                borderRadius='8px'
                                fontSize='14px'
                                onClick={() =>
                                    navigate(`${NAVIGATION.forumPosts}/${mostLikedPost.id}`)
                                }
                                background={mainTheme.gradients.buttonGradient}
                            >
                                Go to post
                            </Button>
                        </S.BottomPostSection>
                    </S.PostContainer>
                )}
            </BoxPad>
            <BoxPad>
                <S.AddPost>
                    <Label fontSize='16px' color={mainTheme.colors.mainBlack}>
                        Add new post
                    </Label>
                    <Button
                        styleType='primaryFull'
                        width='8rem'
                        size='small'
                        borderRadius='8px'
                        fontSize='14px'
                        onClick={() => setOpenNewPostModal(true)}
                        background={mainTheme.gradients.buttonGradient}
                    >
                        Add new post
                    </Button>
                </S.AddPost>
            </BoxPad>
            {openNewPostModal && <AddNewPost close={() => setOpenNewPostModal(false)} />}
        </S.Container>
    );
};

export default RightSection;
