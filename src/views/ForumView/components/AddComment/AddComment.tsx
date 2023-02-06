import { useState } from "react";
import { useForm } from "../../../../hooks/useForm";
import { useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

import BoxPad from "../../../../components/UI/BoxPad/BoxPad";
import Label from "../../../../components/UI/Label/Label";
import TextArea from "../../../../components/UI/TextArea/TextArea";
import Button from "../../../../components/UI/Button/Button";

import axiosFoodieInstance from "../../../../axios/axiosFoodieInstance";
import { ENDPOINTS_FORUM } from "../../../../navigation/endpoints";
import { setNotification } from "../../../../redux/slices/notification";
import { mainTheme } from "../../../../themes/mainTheme";

import { CommentForm } from "../../../../models/Forum/Forum";

import * as S from "./AddComment.style";

type AddComment = {
    type: "post" | "meal";
    id: number;
};

const AddComment = ({ type, id }: AddComment) => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const queryClient = useQueryClient();

    const {
        handleSubmit,
        handleChange,
        data: comment,
        errors,
    } = useForm<CommentForm>({
        validations: {
            content: {
                required: {
                    value: true,
                    message: "Comment can not be empty.",
                },
            },
        },
        onSubmit: () => {
            setIsLoading(true);
            const requestConfig = {
                method: "post",
                url: `${
                    ENDPOINTS_FORUM[type === "post" ? "addPostComment" : "addMealComment"]
                }/${id}`,
                data: comment,
            };

            axiosFoodieInstance(requestConfig)
                .then((response) => {
                    if (response.status === 201 || response.status === 200) {
                        dispatch(
                            setNotification({
                                label: "Comment",
                                header: "Success",
                                message: "Comment was added",
                                timeout: 5000,
                            }),
                        );
                        queryClient.invalidateQueries(
                            [type === "post" ? "forumPosts" : "forumMeals"],
                            {
                                refetchType: "all",
                            },
                        );
                        queryClient.invalidateQueries(
                            [`${type === "post" ? "forumPost" : "forumMeal"}`],
                            {
                                refetchType: "all",
                            },
                        );
                    }
                })
                .catch((err) => {
                    const errorMessage = err.response.data?.message
                        ? err.response.data.message
                        : "Cannot add comment, please try again later";

                    dispatch(
                        setNotification({
                            label: "Comment post",
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
        <BoxPad padding='16px 18px' width='100%'>
            <S.Container>
                <Label
                    width='100%'
                    fontSize='14px'
                    fontWeight='500'
                    color={mainTheme.colors.mainBlack}
                >
                    Add comment
                </Label>
                <TextArea
                    onChange={handleChange("content")}
                    placeholder='Add your own comment'
                    value={comment.content}
                    height='70px'
                    error={errors.content}
                    width='100%'
                    limit={300}
                />
                <Button
                    isLoading={isLoading}
                    styleType='primaryFull'
                    width='80px'
                    onClick={handleSubmit}
                    size='extraSmall'
                >
                    Add
                </Button>
            </S.Container>
        </BoxPad>
    );
};

export default AddComment;
