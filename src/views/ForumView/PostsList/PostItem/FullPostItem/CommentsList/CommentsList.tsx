import React from "react";
import * as S from "./CommentsList.style"
import { CommentsI } from "../../../const/Posts";
import CommentItem from "./CommentItem/CommentItem";

interface props {
  username: string;
  image: string;
  comments: CommentsI[];
}
const CommentsList = (props: props) => {
  return (
    <S.Container>
      {
        props.comments.map((item: CommentsI) => {
            return <CommentItem key={item.userName}
            userName={item.userName}
            comment={item.comment}
            image={props.image} 
            likes={item.likes}              />
        })
      }
    </S.Container>
  );
};

export default CommentsList;