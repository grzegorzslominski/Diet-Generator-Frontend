import React from "react";
import { PostsI } from "../../const/Posts";
import * as S from "./FullPostItem.style"
import Label from "../../../../../components/UI/Label/Label";
import { ReactComponent as Comment } from "../../../../../assets/icons/CommentIcon.svg";
import { mainTheme } from "../../../../../themes/mainTheme";
import { ReactComponent as Heart } from "../../../../../assets/icons/heart.svg";
import CommentsList from "./CommentsList/CommentsList";

const FullPostItem = (props: PostsI) => {
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
                  {45}
                </Label>
              </S.IconWrapper>
          </S.FfirstItem>
        </S.Footer>
      </S.Post>
      <CommentsList comments={props.comments}/>
    </S.Container>
  );
};

export default FullPostItem;