import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";

import { Post, getForumPost } from "../../../PostsList/const/Posts";
import { mainTheme } from "../../../../../themes/mainTheme";

import { ReactComponent as HeartEmptyIcon } from "../../../../../assets/icons/heart-empty.svg";
import { ReactComponent as HeartFullIcon } from "../../../../../assets/icons/heart-full.svg";
import { ReactComponent as Comment } from "../../../../../assets/icons/CommentIcon.svg";

import Label from "../../../../../components/UI/Label/Label";
import Button from "../../../../../components/UI/Button/Button";
import FullPostItem from "../../../PostsList/PostItem/FullPostItem/FullPostItem";
import ModalPortal from "../../../../../components/UI/ModalPortal/ModalPortal";
import AddNewPost from "../../../AddNewPost/AddNewPost";

import * as S from "./RightSection.style";
import BoxPad from "../../../../../components/UI/BoxPad/BoxPad";

interface RightSectionProps {
    basicPosts: Post[];
}
const RightSection = ({ basicPosts }: RightSectionProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isOpenMostLikedPost, setIsOpenMostLikedPost] = useState<boolean>(false);
    const [mostLikedPost, setMostLikedPost] = useState<Post | undefined>();
    const [id, setId] = useState<number>();

    useEffect(() => {
        const mostLikedPost = basicPosts.reduce((prev, curr) =>
            prev.likesCount > curr.likesCount ? prev : curr,
        );
        setMostLikedPost(mostLikedPost);
        setId(mostLikedPost.id);
    }, [basicPosts, id]);

    const { data: fullPost } = useQuery([`forumPost-${id}`, id], () => getForumPost(id), {
        enabled: Boolean(id),
    });

    const handleIsOpen = () => setIsOpen((curr) => !curr);
    const handleIsOpenMostLikedPost = () => setIsOpenMostLikedPost((curr) => !curr);

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
                                Most liked post
                            </Label>
                        </S.SectionTitle>
                        <S.Header>
                            {mostLikedPost.userProfilePicture ? (
                                <img src={mostLikedPost.userProfilePicture} alt='' />
                            ) : null}
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
                                    {mostLikedPost.likesCount}
                                </Label>
                                <Comment />
                                <Label textAlign='center' color={mainTheme.colors.mainBlack}>
                                    {mostLikedPost.commentsCount}
                                </Label>
                            </S.Icons>

                            <Button
                                styleType='primaryFull'
                                width='100px'
                                size='small'
                                borderRadius='8px'
                                fontSize='14px'
                                onClick={handleIsOpen}
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
                        onClick={handleIsOpen}
                        background={mainTheme.gradients.buttonGradient}
                    >
                        Add new post
                    </Button>
                </S.AddPost>
            </BoxPad>
            {isOpen && (
                <ModalPortal blurBackground={true} close={handleIsOpen}>
                    <AddNewPost open={isOpen} setIsOpen={handleIsOpen} />
                </ModalPortal>
            )}
            {isOpenMostLikedPost && fullPost && (
                <ModalPortal
                    blurLevel='normal'
                    blurBackground={true}
                    close={handleIsOpenMostLikedPost}
                >
                    <FullPostItem post={fullPost} close={handleIsOpenMostLikedPost} />
                </ModalPortal>
            )}
        </S.Container>
    );
};

export default RightSection;
