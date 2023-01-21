import { useDispatch } from "react-redux";
import { useState } from "react";

import axiosFoodieInstance from "../../../axios/axiosFoodieInstance";
import { setNotification } from "../../../redux/slices/notification";
import { mainTheme } from "../../../themes/mainTheme";
import { useForm } from "../../../hooks/useForm";

import ActionButton from "../../../components/UI/ActionButton/ActionButton";
import Button from "../../../components/UI/Button/Button";
import Label from "../../../components/UI/Label/Label";
import Input from "../../../components/UI/Input/Input";

import { Post } from "../../../models/Forum/Post";

import * as S from "./AddNewPost.style";

interface AddNewPostProps {
    open: boolean;
    setIsOpen: () => void;
}
const AddNewPost = ({ open, setIsOpen }: AddNewPostProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const dispatch = useDispatch();
    if (!open) return null;

    const {
        handleSubmit,
        handleChange,
        data: newPost,
        errors,
    } = useForm<Post>({
        validations: {
            title: {
                required: {
                    value: true,
                    message: "this field is required",
                },
            },
            description: {
                required: {
                    value: true,
                    message: "this field is required",
                },
            },
        },
        onSubmit: () => {
            setIsLoading(true);
            const post = {
                title: newPost.title,
                description: newPost.description,
                imagePath: newPost.postImagePath,
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
        },
    });
    return (
        <S.Container>
            <S.Post>
                <Label textAlign='center' color={mainTheme.colors.mainBlack} fontSize='1rem'>
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
                        onChange={handleChange("postImagePath")}
                        label='Image'
                        value={newPost.postImagePath}
                        error={errors.postImagePath}
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
