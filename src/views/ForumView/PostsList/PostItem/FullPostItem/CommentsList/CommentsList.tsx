import React from "react";
import * as S from "./CommentsList.style"
import { CommentsI } from "../../../const/Posts";
import CommentItem from "./CommentItem/CommentItem";

interface props {
  comments: CommentsI[]
}
const CommentsList = (props: props) => {
  return (
    <S.Container>
      <h1>blalal</h1>
      {
        props.comments.map((item: CommentsI) => {
            return <CommentItem key={item.userName}
              userName={item.userName}
              comment={item.comment}/>
        })
      }
    </S.Container>
  );
};

export default CommentsList;