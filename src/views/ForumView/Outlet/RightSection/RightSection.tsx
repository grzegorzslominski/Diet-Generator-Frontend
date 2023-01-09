import { useState, useEffect } from "react";

import { BasicPostI } from "../../PostsList/const/Posts";
import { mainTheme } from "../../../../themes/mainTheme";
import { ReactComponent as Heart } from "../../../../assets/icons/heart.svg";
import { ReactComponent as Comment } from "../../../../assets/icons/CommentIcon.svg";

import Label from "../../../../components/UI/Label/Label";
import Button from "../../../../components/UI/Button/Button";
import ModalPortal from "../../../../components/UI/ModalPortal/ModalPortal";
import AddNewPost from "../../AddNewPost/AddNewPost";

import * as S from "./RightSection.style";

interface RightSectionProps {
    basicPosts: BasicPostI[];
}
const RightSection = ({ basicPosts }: RightSectionProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [mostLikedPost, setMostLikedPost] = useState<BasicPostI | undefined>();

    useEffect(() => {
        const mostLikedPost = basicPosts.reduce((prev, curr) =>
            prev.likesCount > curr.likesCount ? prev : curr,
        );
        setMostLikedPost(mostLikedPost);
    }, [basicPosts]);

    const handleIsOpen = () => setIsOpen((curr) => !curr);

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
                    onClick={handleIsOpen}
                    background={mainTheme.gradients.buttonGradient}
                >
                    <Label textAlign='center' color='white'>
                        Add new post
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
                            <Heart />
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
                                onClick={() => {}}
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
            {isOpen ? (
                <ModalPortal blurBackground={true} close={handleIsOpen}>
                    <AddNewPost open={isOpen} setIsOpen={handleIsOpen} />
                </ModalPortal>
            ) : null}
        </S.Wrapper>
    );
};

export default RightSection;
