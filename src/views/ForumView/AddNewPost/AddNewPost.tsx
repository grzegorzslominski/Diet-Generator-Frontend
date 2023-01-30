import { useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useState } from "react";

import axiosFoodieInstance from "../../../axios/axiosFoodieInstance";
import { setNotification } from "../../../redux/slices/notification";
import { mainTheme } from "../../../themes/mainTheme";
import { NEW_POST_DATA, NEW_POST_VALIDATION_DATA } from "../../../models/Forum/PostForm";
import { uploadImageFile } from "../../../helpers/uploadFile";
import { ENDPOINTS_FORUM, ENDPOINTS_IMAGE_UPLOAD } from "../../../navigation/endpoints";

import ActionButton from "../../../components/UI/ActionButton/ActionButton";
import Button from "../../../components/UI/Button/Button";
import Label from "../../../components/UI/Label/Label";
import Input from "../../../components/UI/Input/Input";
import BoxPad from "../../../components/UI/BoxPad/BoxPad";
import TextArea from "../../../components/UI/TextArea/TextArea";
import UploadBox from "../../../components/UI/UploadBox/UploadBox";

import * as S from "./AddNewPost.style";

interface AddNewPostProps {
    open: boolean;
    setIsOpen: () => void;
}
const AddNewPost = ({ setIsOpen }: AddNewPostProps) => {
    const dispatch = useDispatch();

    const queryClient = useQueryClient();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [newPost, setNewPost] = useState(JSON.parse(JSON.stringify(NEW_POST_DATA)));
    const [newPostValidation, setNewPostValidation] = useState(
        JSON.parse(JSON.stringify(NEW_POST_VALIDATION_DATA)),
    );

    const handleOnChange = (property: string, value: any) => {
        let file;
        if (newPost?.imagePath?.file) {
            file = newPost?.imagePath?.file;
        }
        const currentNewPost = JSON.parse(JSON.stringify(newPost));
        const currentNewPostValidation = JSON.parse(JSON.stringify(NEW_POST_VALIDATION_DATA));
        currentNewPost[property] = value;
        currentNewPostValidation[property] = "";

        if (file) {
            currentNewPostValidation.imagePath.file = file;
        }

        setNewPostValidation(currentNewPostValidation);
        setNewPost(currentNewPost);
    };

    const changeImageHandler = (files: any) => {
        if (files.length) {
            const newImageURL = URL.createObjectURL(files[0]);
            const postImage = {
                url: newImageURL,
                type: files[0].type,
                file: files[0],
            };
            handleOnChange("imagePath", postImage);
        }
    };

    const savePost = async () => {
        setIsLoading(true);
        const validationPassed = validatePost();
        if (validationPassed) {
            const dataToSend: any = JSON.parse(JSON.stringify(newPost));

            if (newPost?.imagePath.file) {
                console.log(newPost.imagePath?.file);

                const { imageURL, err: postImageUploadError } = await uploadImageFile(
                    ENDPOINTS_IMAGE_UPLOAD.uploadPostImage,
                    "image",
                    newPost.imagePath?.file,
                );

                if (postImageUploadError) {
                    dispatch(
                        setNotification({
                            label: "File upload",
                            header: "Failed",
                            message: `Photo could not be uploaded${postImageUploadError}`,
                            timeout: 5000,
                        }),
                    );
                }
                dataToSend.imagePath = imageURL;
            }
            if (!dataToSend.imagePath) dataToSend.imagePath = null;

            axiosFoodieInstance
                .post(ENDPOINTS_FORUM.addPost, dataToSend)
                .then((response) => {
                    if (response.status === 200) {
                        queryClient.invalidateQueries(["userBasicProfile"], {
                            refetchType: "all",
                        });
                        dispatch(
                            setNotification({
                                label: "New post",
                                header: "Success",
                                message: "New post was crated",
                                timeout: 5000,
                            }),
                        );
                    }
                })
                .catch((err) => {
                    dispatch(
                        setNotification({
                            label: "New post",
                            header: "Failed",
                            message: "Failed to add new post, please try again later",
                            timeout: 5000,
                        }),
                    );
                });
        }

        setIsLoading(false);
    };

    const validatePost = (): boolean => {
        let validationPassed = true;
        const currentNewPost = JSON.parse(JSON.stringify(newPost));
        const currentNewPostValidation = JSON.parse(JSON.stringify(NEW_POST_VALIDATION_DATA));

        Object.keys(currentNewPostValidation).forEach((key) => {
            if (!currentNewPost[key]) {
                validationPassed = false;
                currentNewPostValidation[key] = "This field is required";
            }
        });
        setNewPostValidation(currentNewPostValidation);
        return validationPassed;
    };

    return (
        <BoxPad width='100%'>
            <S.Container>
                <Label
                    textAlign='center'
                    color={mainTheme.colors.mainBlack}
                    fontSize='18px'
                    fontWeight='500'
                >
                    Add new post
                </Label>

                <S.InputContainer>
                    <Input
                        placeholder='Type title'
                        onChange={(e) => handleOnChange("title", e.target.value)}
                        label='Title'
                        value={newPost.title}
                        error={newPostValidation.title}
                    />
                    <TextArea
                        width='100%'
                        onChange={(e) => handleOnChange("description", e.target.value)}
                        label='Post content'
                        value={newPost.description}
                        error={newPostValidation.description}
                        height='160px'
                        limit={1000}
                    />

                    <S.UploadBoxWrapper>
                        <Label fontSize='12px' fontWeight='600' color={mainTheme.colors.inputText}>
                            Profile background image
                        </Label>
                        <UploadBox
                            url={newPost.imagePath?.url}
                            type='image/png'
                            onChange={(file) => changeImageHandler(file)}
                            onRemove={() => handleOnChange("imagePath", null)}
                            error={newPostValidation.imagePath}
                            disable={false}
                        />
                    </S.UploadBoxWrapper>
                </S.InputContainer>

                <Button
                    isLoading={isLoading}
                    width='115px'
                    styleType='gradientFull'
                    onClick={savePost}
                    borderRadius='10px'
                    fontSize='16px'
                    size='small'
                >
                    Save
                </Button>

                <S.ClosingContainer>
                    <ActionButton size='normal' type='remove' onClick={() => setIsOpen()} />
                </S.ClosingContainer>
            </S.Container>
        </BoxPad>
    );
};

export default AddNewPost;
