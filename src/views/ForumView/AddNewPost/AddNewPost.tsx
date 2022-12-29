import React from "react";
import * as S from "./AddNewPost.style"
import ActionButton from "../../../components/UI/ActionButton/ActionButton";

interface props {
  open: boolean
  setIsOpen: () => void;
}
const AddNewPost = ({open,setIsOpen}: props) => {
  if(!open) return null;
  return (
    <S.Container>

      <S.Post>

      </S.Post>
      <S.ClosingContainer>
        <ActionButton type='remove' onClick={() => setIsOpen()} />
      </S.ClosingContainer>
    </S.Container>
  );
};

export default AddNewPost;