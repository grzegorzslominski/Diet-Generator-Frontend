import React from 'react';
import * as S from "./RightSection.style"
import { PostsI } from '../../PostsList/const/Posts';
import Label from '../../../../components/UI/Label/Label';
import Button from '../../../../components/UI/Button/Button';
import { mainTheme } from '../../../../themes/mainTheme';
import {ReactComponent as Heart} from "../../../../assets/icons/heart.svg"
import {ReactComponent as Comment} from "../../../../assets/icons/CommentIcon.svg"
import { useLocation, useNavigate } from 'react-router-dom';

interface props {
    data: PostsI[];
}
const RightSection = ({data}: props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const mostLikedPost = data.reduce((prev,curr) => prev.likes > curr.likes ? prev : curr);
    const handleNavigate = () => {
        if(location.pathname === "/forum/posts"){
            navigate(`/forum/posts/post/${mostLikedPost.id}`)
        }
        else if(location.pathname === "/forum/newMeals"){
            navigate(`/forum/newMeals/newMeal/${mostLikedPost.id}`)
        }
        else if(location.pathname === "/forum/feedbacks"){
            navigate(`/forum/feedbacks/feedback/${mostLikedPost.id}`)
        }
        else if(location.pathname === "/forum/newlyAddedMeals"){
            navigate(`/forum/newlyAddedMeals/newlyAddedMeal/${mostLikedPost.id}`)
        }
    }

    return (
        <S.Container>
            <S.Header>
            <img src={mostLikedPost.image} alt="" />
            <Label>
                {mostLikedPost.userName}
            </Label>
            </S.Header>
            <S.MiddleSection>
                <Label
                textAlign='center'
                >
                    {mostLikedPost.title}
                </Label>
                <S.Description>
                <Label
                textAlign='center'
                >
                    {mostLikedPost.description}
                </Label>
                </S.Description>
            </S.MiddleSection>
            <S.IconContainer>
                <Heart/>
                <Label
                textAlign='center'
                color={mainTheme.colors.mainBlack}
                >
                    {mostLikedPost.likes}
                </Label>
                <Comment/>
                <Label
                textAlign='center'
                color={mainTheme.colors.mainBlack}
                >
                    {mostLikedPost.comments.length}
                </Label>
            </S.IconContainer>
            <S.Footer>
                <Button
                    styleType='primary'
                    width='6rem'
                    isLoading={false}
                    size='small'
                    borderRadius='10px'
                    fontSize='1rem'
                    onClick={() => handleNavigate()}
                    background={mainTheme.gradients.buttonGradient}
                >
                    <Label
                    textAlign='center'
                    color='white'
                    >
                        Go to post
                    </Label>
                </Button>
            </S.Footer>
        </S.Container>
    );
};

export default RightSection;