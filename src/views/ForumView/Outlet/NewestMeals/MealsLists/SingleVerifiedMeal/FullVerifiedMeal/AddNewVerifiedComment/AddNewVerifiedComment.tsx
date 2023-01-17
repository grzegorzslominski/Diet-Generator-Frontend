import { useState } from "react";
import { useDispatch } from "react-redux";

import { setNotification } from "../../../../../../../../redux/slices/notification";
import { mainTheme } from "../../../../../../../../themes/mainTheme";
import { useForm } from "../../../../../../../../hooks/useForm";

import axiosFoodieInstance from "../../../../../../../../axios/axiosFoodieInstance";
import TextArea from "../../../../../../../../components/UI/TextArea/TextArea";
import Button from "../../../../../../../../components/UI/Button/Button";
import Label from "../../../../../../../../components/UI/Label/Label";

import { UserComment } from "../../../../../../../../models/Meal/NewMeal";

import * as S from "./AddNewVerifiedComment.style";

interface AddNewVerifiedCommentProps {
    id: number;
}
const AddNewVerifiedComment = ({ id }: AddNewVerifiedCommentProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const dispatch = useDispatch();
    const {
        handleSubmit,
        handleChange,
        data: userComment,
        errors,
    } = useForm<UserComment>({
        validations: {
            comment: {
                required: {
                    value: true,
                    message: "Comment can not be empty!",
                },
            },
        },
        onSubmit: () => {
            setIsLoading(true);
            const newComment = {
                content: userComment.comment,
            };
            axiosFoodieInstance
                .post(`/forum/recipe/comment/${id}`, newComment)
                .then((response) => {
                    if (response.status === 201) {
                        dispatch(
                            setNotification({
                                label: "Comment post",
                                header: "Success",
                                message: "Comment was created",
                                timeout: 5000,
                            }),
                        );
                    }
                })
                .catch((err) => {
                    const errorMessage = err.response.data?.message
                        ? err.response.data.message
                        : "Cannot add comment";

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
        <S.Container>
            <Label textAlign='center' fontSize='1rem' color={mainTheme.colors.mainBlack}>
                Add new comment
            </Label>
            <TextArea
                onChange={handleChange("comment")}
                label='Comment'
                placeholder='What are your thoughts?'
                value={userComment.comment}
                error={errors.comment}
                width='100%'
            />
            <S.ButtonContainer>
                <Button
                    width='120px'
                    styleType='primaryEmpty'
                    fontSize='0.8rem'
                    size='extraSmall'
                    background={mainTheme.gradients.buttonGradient}
                    onClick={handleSubmit}
                    isLoading={isLoading}
                >
                    <Label
                        textAlign='center'
                        color={mainTheme.colors.mainBlack}
                        fontSize='0.8rem'
                        fontWeight='400'
                    >
                        Add comment
                    </Label>
                </Button>
            </S.ButtonContainer>
        </S.Container>
    );
};

export default AddNewVerifiedComment;
