import React, { useState } from "react";
import * as S from "./AddNewPost.style"
import ActionButton from "../../../components/UI/ActionButton/ActionButton";
import Label from "../../../components/UI/Label/Label";
import { mainTheme } from "../../../themes/mainTheme";
import Input from "../../../components/UI/Input/Input";
import { useForm } from "../../../hooks/useForm";
import { NewPost } from "../../../models/User/User";
import Button from "../../../components/UI/Button/Button";
import axiosFoodieInstance from "../../../axios/axiosFoodieInstance";
import { ENDPOINTS_USER } from "../../../navigation/endpoints";
import { setNotification } from "../../../redux/slices/notification";
import { useDispatch } from "react-redux";

interface props {
  open: boolean
  setIsOpen: () => void;
}
const AddNewPost = ({open,setIsOpen}: props) => {
  const [isLoading,setIsLoading] = useState<boolean>(false)
  const dispatch = useDispatch();
  if(!open) return null;

  const {
    handleSubmit,
    handleChange,
    data: newPost,
    errors,
  } = useForm<NewPost>({
    validations: {
      title: {
        required: {
          value: true,
          message: "this field is required"
        },

      },
      description: {
        required: {
          value: true,
          message: "this field is required"
        }
      }
    },
    onSubmit: () => {
      setIsLoading(true);
      const post = {
        title: newPost.title,
        description: newPost.description,
        imagePath: newPost.image
      };

      axiosFoodieInstance
        .post("/forum/post", post)
        .then((response) => {
          if (response.status === 201) {
            dispatch(
              setNotification({
                label: "NewPost",
                header: "Success",
                message: "New post was created",
                timeout: 5000,
              }),
            );
          }
        })
        .catch((err) => {
          const errorMessage = err.response.data?.message
            ? err.response.data.message
            : "Cannot create new post";

          dispatch(
            setNotification({
              label: "NewPost",
              header: "Failed",
              message: errorMessage,
              timeout: 5000,
            }),
          );
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  })
  return (
    <S.Container>
      <S.Post>
        <Label
          textAlign='center'
          color={mainTheme.colors.mainBlack}
          fontSize='1rem'
        >
          Add new post
        </Label>

        <S.InputContainer>
        <Input
          placeholder='Type title'
          onChange={handleChange("title")}
          label='Title'
          value={newPost.title}
          error={errors.title}
        />
          <Input
            placeholder='Type description'
            onChange={handleChange("description")}
            label='Description'
            value={newPost.description}
            error={errors.description}
          />
          <Input
            placeholder='Add image'
            onChange={handleChange("image")}
            label='Image'
            value={newPost.image}
            error={errors.image}
          />
        </S.InputContainer>

        <Button
          isLoading={isLoading}
          width='12rem'
          styleType='gradientFull'
          onClick={handleSubmit}
          borderRadius='15px'
          fontSize='1rem'
          size='small'
        >
          Create new post
        </Button>
      </S.Post>
      <S.ClosingContainer>
        <ActionButton type='remove' onClick={() => setIsOpen()} />
      </S.ClosingContainer>
    </S.Container>
  );
};

export default AddNewPost;