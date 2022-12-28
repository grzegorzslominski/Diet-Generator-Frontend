import React from "react";
import * as S from "./AddNewComment.style";
import Input from "../../../../../../components/UI/Input/Input";
import { UserComment } from "../../../../../../models/User/User";
import { useForm } from "../../../../../../hooks/useForm";
import Label from "../../../../../../components/UI/Label/Label";
import { mainTheme } from "../../../../../../themes/mainTheme";
import Button from "../../../../../../components/UI/Button/Button";

const AddNewComment = () => {
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
        onSubmit: () => {},
    });
    return (
        <S.Container>
            <Label textAlign='center' fontSize='1rem' color={mainTheme.colors.mainBlack}>
                Add new comment
            </Label>
            <Input
                placeholder='What are your thoughts?'
                onChange={handleChange("comment")}
                value={userComment.comment}
                error={errors.comment}
            />
            <S.ButtonContainer>
                <Button
                    width='120px'
                    styleType='primaryEmpty'
                    fontSize='0.8rem'
                    size='extraSmall'
                    background={mainTheme.gradients.buttonGradient}
                    onClick={() => console.log()}
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

export default AddNewComment;
