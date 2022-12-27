import React from "react";
import { PostsI } from "../../const/Posts";
import * as S from "./FullPostItem.style"
import Label from "../../../../../components/UI/Label/Label";
import { ReactComponent as Comment } from "../../../../../assets/icons/CommentIcon.svg";
import { mainTheme } from "../../../../../themes/mainTheme";
import { ReactComponent as Heart } from "../../../../../assets/icons/heart.svg";
import CommentsList from "./CommentsList/CommentsList";
import AddNewComment from "./AddNewComment/AddNewComment";
import ActionButton from "../../../../../components/UI/ActionButton/ActionButton";
import { useNavigate } from "react-router-dom";

const FullPostItem = (props: PostsI) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
      if(location.pathname === `/forum/posts/post/${props.id}`){
        navigate("/forum/posts")
      }
      else if(location.pathname === `/forum/newMeals/newMeal/${props.id}`){
        navigate("/forum/newMeals")
      }
      else if(location.pathname === `/forum/feedbacks/feedback/${props.id}`){
        navigate("/forum/feedbacks")
      }
      else if(location.pathname === `/forum/newlyAddedMeals/newlyAddedMeal/${props.id}`){
        navigate("/forum/newlyAddedMeals")
      }
  }
  return (
    <S.Container>
      <S.Post>
        <S.Header>
          <img src={props.image} alt="" />
          <Label
            fontSize="1rem"
            textAlign="center"
            fontWeight="600"
            color={mainTheme.colors.mainBlack}
          >
            Posted by user: {props.userName}
          </Label>
        </S.Header>
        <Label
          textAlign="center"
        >
          {props.title}
        </Label>
        <Label
          textAlign="center"
        >
          {props.description}
        </Label>
        <S.Footer>
          <S.FfirstItem>
              <S.IconWrapper>
                <Comment/>
                <Label
                  fontSize="1rem"
                  fontWeight="400"
                  color={mainTheme.colors.mainBlack}
                  textAlign="center"
                >
                  {props.comments.length}
                </Label>
              </S.IconWrapper>
              <S.IconWrapper>
                <Heart/>
                <Label
                  fontSize="1rem"
                  fontWeight="400"
                  color={mainTheme.colors.mainBlack}
                  textAlign="center"
                >
                  {props.likes}
                </Label>
              </S.IconWrapper>
          </S.FfirstItem>
        </S.Footer>
      </S.Post>
      <S.Comments>
      <AddNewComment/>
      <CommentsList image={props.image} username={props.userName} comments={props.comments}/>
      </S.Comments>
      <S.ClosingContainer>
      <ActionButton type='remove' onClick={() => handleNavigate()} />
      </S.ClosingContainer>
    </S.Container>
  );
};

export default FullPostItem;