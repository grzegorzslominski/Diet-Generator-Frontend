import { useState } from "react";

import { useForm } from "../../../../../hooks/useForm";
import { ENDPOINTS_PROFILE } from "../../../../../navigation/endpoints";
import { setNotification } from "../../../../../redux/slices/notification";
import axiosFoodieInstance from "../../../../../axios/axiosFoodieInstance";
import { mainTheme } from "../../../../../themes/mainTheme";

import BoxPad from "../../../../../components/UI/BoxPad/BoxPad";
import Input from "../../../../../components/UI/Input/Input";
import Label from "../../../../../components/UI/Label/Label";
import ActionButton from "../../../../../components/UI/ActionButton/ActionButton";

import { UserData } from "../../../../../models/User/User";

import * as S from "./UserDetailsCard.style";
import GradientLabel from "../../../../../components/UI/GradientLabel/GradientLabel";
import Button from "../../../../../components/UI/Button/Button";

type UserDetailsCardProps = {
    user: UserData;
};

const UserDetailsCard = ({ user }: UserDetailsCardProps) => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [isloading, setIsLoading] = useState<boolean>(false);

    const {
        handleSubmit,
        handleChange,
        data: userFormData,
        errors,
    } = useForm<UserData>({
        validations: {
            email: {
                required: {
                    value: true,
                    message: "This field is required",
                },
                pattern: {
                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Incorrect email address",
                },
            },
        },

        onSubmit: () => {
            setIsLoading(true);
            axiosFoodieInstance
                .post(ENDPOINTS_PROFILE.editProfile, user)
                .then((response) => {
                    if (response.status === 201) {
                        dispatch(
                            setNotification({
                                label: "Profile",
                                header: "Update",
                                message: "Profile was updated",
                                timeout: 5000,
                            }),
                        );
                        setEditMode(false);
                    }
                })
                .catch((err) => {
                    const errorMessage = err.response.data?.message
                        ? err.response.data.message
                        : "Cannot register account";

                    dispatch(
                        setNotification({
                            label: "Profile",
                            header: "Update",
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
        <BoxPad padding='24px 24px 48px 24px'>
            <S.Content>
                <S.AvatarContanier>
                    <img src={user.avatar} />
                </S.AvatarContanier>
                <S.CardName>
                    <Label
                        lineHeight='0.8rem'
                        color={mainTheme.colors.mainBlack}
                        fontWeight='700'
                        fontFamily='Lato'
                    >
                        Profile
                    </Label>

                    <ActionButton size='small' type='edit' onClick={() => setEditMode(!editMode)} />
                </S.CardName>
                <S.DataContanier>
                    <Input
                        onChange={handleChange("firstName")}
                        label='Name'
                        value={userFormData.firstName}
                        disabled={!editMode}
                        width='90%'
                        size='small'
                    />
                    <Input
                        onChange={handleChange("lastName")}
                        label='Last name'
                        value={userFormData.lastName}
                        disabled={!editMode}
                        width='90%'
                        size='small'
                    />
                    <Input
                        onChange={handleChange("username")}
                        label='Username'
                        value={userFormData.username}
                        disabled={!editMode}
                        width='90%'
                        size='small'
                    />
                    <Input
                        onChange={handleChange("email")}
                        label='E-mail'
                        value={userFormData.email}
                        disabled={!editMode}
                        width='90%'
                        size='small'
                    />
                    <S.BodyDetails>
                        <Input
                            onChange={handleChange("email")}
                            label='Weight'
                            value={userFormData.email}
                            // disabled={!editMode}
                            disabled
                            width='90%'
                            size='small'
                        />
                        <Input
                            onChange={handleChange("email")}
                            label='Height'
                            value={userFormData.email}
                            // disabled={!editMode}
                            disabled
                            width='90%'
                            size='small'
                        />
                    </S.BodyDetails>
                    <Input
                        onChange={handleChange("email")}
                        label='Gander'
                        value={userFormData.email}
                        // disabled={!editMode}
                        disabled
                        width='90%'
                        size='small'
                    />
                </S.DataContanier>
                <S.ExtraDetailsContainer>
                    <S.ExtraDetail>
                        <Label color={mainTheme.colors.mainBlack} fontSize='10px' fontWeight='700'>
                            BMI
                        </Label>
                        <Label
                            color={mainTheme.colors.mainBlack}
                            fontSize='12px'
                            fontWeight='700'
                            lineHeight='18px'
                        >
                            21
                        </Label>
                    </S.ExtraDetail>
                    <S.ExtraDetail>
                        <Label color={mainTheme.colors.mainBlack} fontSize='10px' fontWeight='700'>
                            Daily calories
                        </Label>
                        <Label
                            color={mainTheme.colors.mainBlack}
                            fontSize='12px'
                            fontWeight='700'
                            lineHeight='18px'
                        >
                            2200 kcal
                        </Label>
                    </S.ExtraDetail>
                    <S.ExtraDetail>
                        <Label color={mainTheme.colors.mainBlack} fontSize='10px' fontWeight='700'>
                            Account type
                        </Label>
                        <GradientLabel>
                            <Label
                                color={mainTheme.colors.mainBlack}
                                fontSize='12px'
                                fontWeight='700'
                                lineHeight='18px'
                            >
                                Premium
                            </Label>
                        </GradientLabel>
                    </S.ExtraDetail>
                    {editMode && (
                        <Button
                            size='small'
                            width='100px'
                            styleType='secondary'
                            onClick={handleSubmit}
                        >
                            Save
                        </Button>
                    )}
                </S.ExtraDetailsContainer>
            </S.Content>
        </BoxPad>
    );
};

export default UserDetailsCard;
function dispatch(arg0: any) {
    throw new Error("Function not implemented.");
}
