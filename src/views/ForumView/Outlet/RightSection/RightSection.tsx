import React, { useState } from "react";
import * as S from "./RightSection.style";
import { PostsI } from "../../PostsList/const/Posts";
import Label from "../../../../components/UI/Label/Label";
import Button from "../../../../components/UI/Button/Button";
import { mainTheme } from "../../../../themes/mainTheme";
import { ReactComponent as Heart } from "../../../../assets/icons/heart.svg";
import { ReactComponent as Comment } from "../../../../assets/icons/CommentIcon.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { NAVIGATION } from "../../../../navigation/paths";
import ModalPortal from "../../../../components/UI/ModalPortal/ModalPortal";
import AddNewPost from "../../AddNewPost/AddNewPost";

interface props {
    data: PostsI[];
}
const RightSection = ({ data }: props) => {
    const [isOpen,setIsOpen] = useState<boolean>(false);
    const location = useLocation();
    const navigate = useNavigate();
    const mostLikedPost = data.reduce((prev, curr) => (prev.likes > curr.likes ? prev : curr));
    const handleIsOpen = () => setIsOpen(curr => !curr);
    const handleNavigate = () => {
        if (location.pathname === NAVIGATION.forumPosts) {
            navigate(`${NAVIGATION.forumPost}/${mostLikedPost.id}`);
        } else if (location.pathname === NAVIGATION.forumMeals) {
            navigate(`${NAVIGATION.forumMeal}/${mostLikedPost.id}`);
        } else if (location.pathname === NAVIGATION.forumFeedbacks) {
            navigate(`${NAVIGATION.forumFeedback}/${mostLikedPost.id}`);
        } else if (location.pathname === NAVIGATION.forumNewlyAddedMeals) {
            navigate(`${NAVIGATION.forumNewlyAddedMeal}/${mostLikedPost.id}`);
        }
    };
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
                <S.Header>
                    <img src={mostLikedPost.image} alt='' />
                    <Label color={mainTheme.colors.mainBlack}>{mostLikedPost.userName}</Label>
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
                        {mostLikedPost.likes}
                    </Label>
                    <Comment />
                    <Label textAlign='center' color={mainTheme.colors.mainBlack}>
                        {mostLikedPost.comments.length}
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
                        onClick={() => handleNavigate()}
                        background={mainTheme.gradients.buttonGradient}
                    >
                        <Label textAlign='center' color='white'>
                            Go to post
                        </Label>
                    </Button>
                </S.Footer>
            </S.Container>
            {
                isOpen ?
                <ModalPortal blurBackground={true} close={handleIsOpen}>
                    <AddNewPost open={isOpen} setIsOpen={handleIsOpen}/>
                </ModalPortal> : null
            }

        </S.Wrapper>
    );
};

export default RightSection;
