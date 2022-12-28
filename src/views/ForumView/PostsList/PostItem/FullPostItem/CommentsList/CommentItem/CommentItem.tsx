import React from "react";
import { CommentsI } from "../../../../const/Posts";
import * as S from "./CommentItem.style"
import Label from "../../../../../../../components/UI/Label/Label";
import {ReactComponent as Heart} from "../../../../../../../assets/icons/heart.svg"
import { mainTheme } from "../../../../../../../themes/mainTheme";

interface props {
  image: string;
}

type prop = props & CommentsI
const CommentItem = (props: prop) => {
  return (
    <S.Container>
        <S.Header>
          <img src={props.image} alt="profile" />
          <Label
            textAlign="center"
            fontSize="1rem"
            fontWeight="400"
            color={mainTheme.colors.mainBlack}
          >
            {props.userName}
          </Label>
        </S.Header>
        <S.Description>
          <Label
          textAlign="center"
          fontSize="1.2rem"
          fontWeight="400"
          color={mainTheme.colors.mainBlack}
          >
            {props.comment}
          </Label>
        </S.Description>
        <S.Footer>
          <Label
          textAlign="center"
          fontSize="1rem"
          fontWeight="400"
          color={mainTheme.colors.mainBlack}
          >
            {props.likes}
          </Label>
          <Heart/>
        </S.Footer>
    </S.Container>
  );
};

export default CommentItem;