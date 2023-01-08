import { useState } from "react";
import { useDispatch } from "react-redux";

import { setNotification } from "../../../../../redux/slices/notification";
import axiosFoodieInstance from "../../../../../axios/axiosFoodieInstance";
import { ENDPOINTS_PROFILE } from "../../../../../navigation/endpoints";
import { mainTheme } from "../../../../../themes/mainTheme";

import GradientLabel from "../../../../../components/UI/GradientLabel/GradientLabel";
import ActionButton from "../../../../../components/UI/ActionButton/ActionButton";
import SelectOption from "../../../../../components/UI/Select/SelectOption";
import Select from "../../../../../components/UI/Select/Select";
import Button from "../../../../../components/UI/Button/Button";
import BoxPad from "../../../../../components/UI/BoxPad/BoxPad";
import Input from "../../../../../components/UI/Input/Input";
import Label from "../../../../../components/UI/Label/Label";

import {
    BasicUserProfileValidation,
    BASIC_USER_PROFILE_VALIDATION_DATA,
} from "../../../../../models/User/UserForm";
import { GENDERS, GenderType, UserData } from "../../../../../models/User/User";

import * as S from "./UserDetailsCard.style";
import { validEmail } from "../../../../../helpers/validation";

type UserDetailsCardProps = {
    user: UserData;
    className?: string;
};

const UserDetailsCard = ({ user, className }: UserDetailsCardProps) => {
    const dispatch = useDispatch();

    const [editMode, setEditMode] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [userDetails, setUserDetails] = useState<UserData>(user);
    const [userDetailsValidation, setUserDetailsValidation] = useState<BasicUserProfileValidation>(
        BASIC_USER_PROFILE_VALIDATION_DATA,
    );

    const handleOnChange = (property: string, value: any) => {
        const currentUserDetailsData: UserData = JSON.parse(JSON.stringify(userDetails));

        if (property === "firstName" || property === "lastName" || property === "email") {
            currentUserDetailsData[property] = value;
        } else {
            currentUserDetailsData.details[property] = value;
        }
        currentUserDetailsData[property] = value;
        setUserDetails(currentUserDetailsData);
    };

    const handleSubmit = async () => {
        setIsLoading(true);
        const validationPassed = dataValidation();

        if (validationPassed) {
            await sendData();
        }
        setIsLoading(false);
    };

    const dataValidation = (): boolean => {
        let validationPassed = true;
        const currentValidation: BasicUserProfileValidation = JSON.parse(
            JSON.stringify(BASIC_USER_PROFILE_VALIDATION_DATA),
        );
        const currentUserDetails: UserData = JSON.parse(JSON.stringify(userDetails));
        Object.keys(currentValidation).forEach((key: string) => {
            if (key !== "details") {
                if (!currentUserDetails[key]) {
                    currentValidation[key] = "This field is required";
                    validationPassed = false;
                } else if (key === "email" && validEmail(currentUserDetails[key])) {
                    currentValidation[key] = "Incorrect email address";
                    validationPassed = false;
                }
            } else {
                Object.keys(currentValidation[key]).forEach((detailKey: string) => {
                    if (!currentUserDetails.details[detailKey]) {
                        currentValidation.details[detailKey] = "This field is required";
                        validationPassed = false;
                    }
                });
            }
        });

        setUserDetailsValidation(currentValidation);
        return validationPassed;
    };

    const sendData = async () => {
        const dataToSend = JSON.parse(JSON.stringify(userDetails));
        await axiosFoodieInstance
            .post(ENDPOINTS_PROFILE.editProfile, dataToSend)
            .then((response) => {
                if (response.status === 201) {
                    dispatch(
                        setNotification({
                            label: "Profile update",
                            header: "Success",
                            message: "Profile was update",
                            timeout: 5000,
                        }),
                    );
                }
            })
            .catch((err) => {
                const errorMessage = err.response.data?.message
                    ? err.response.data.message
                    : "Cannot register account";

                dispatch(
                    setNotification({
                        label: "Profile update",
                        header: "Failed",
                        message: errorMessage,
                        timeout: 5000,
                    }),
                );
            });
    };

    return (
        <BoxPad className={className}>
            <S.Content>
                <S.TopSection>
                    <img src={user.avatar} />
                    <S.CardName>
                        <Label fontSize='16px' color={mainTheme.colors.mainBlack} fontWeight='600'>
                            Profile
                        </Label>
                        <ActionButton
                            size='small'
                            type='edit'
                            onClick={() => setEditMode(!editMode)}
                        />
                    </S.CardName>
                </S.TopSection>

                <S.DataContanier>
                    <Input
                        onChange={(e) => handleOnChange("firstName", e.target.value)}
                        label='Name'
                        value={userDetails.firstName}
                        disabled={!editMode}
                        width='90%'
                        size='small'
                        error={userDetailsValidation.firstName}
                    />
                    <Input
                        onChange={(e) => handleOnChange("lastName", e.target.value)}
                        label='Last name'
                        value={userDetails.lastName}
                        disabled={!editMode}
                        width='90%'
                        size='small'
                        error={userDetailsValidation.lastName}
                    />
                    <Input
                        onChange={(e) => handleOnChange("email", e.target.value)}
                        label='E-mail'
                        value={userDetails.email}
                        disabled={!editMode}
                        width='90%'
                        size='small'
                        error={userDetailsValidation.email}
                    />
                    <Select
                        borderRadius='0'
                        onChange={(gender: string) => handleOnChange("gender", gender)}
                        value={userDetails.details.gender}
                        width='90%'
                        label='Gender'
                        size='auto'
                        error={userDetailsValidation.details.gender}
                        disabled={!editMode}
                    >
                        {GENDERS.map((gender: GenderType) => (
                            <SelectOption
                                key={gender}
                                onChange={(gender: string) => handleOnChange("gender", gender)}
                                value={gender}
                            >
                                {gender}
                            </SelectOption>
                        ))}
                    </Select>
                    <S.BodyDetails>
                        <Input
                            onChange={(e) => handleOnChange("weight", e.target.value)}
                            label='Weight'
                            value={userDetails.details.weight}
                            disabled={!editMode}
                            width='90%'
                            size='small'
                            error={userDetailsValidation.details.weight}
                        />
                        <Input
                            onChange={(e) => handleOnChange("height", e.target.value)}
                            label='Height'
                            value={userDetails.details.height}
                            disabled={!editMode}
                            width='90%'
                            size='small'
                            error={userDetailsValidation.details.height}
                        />
                        <Input
                            onChange={(e) => handleOnChange("age", e.target.value)}
                            label='Age'
                            value={userDetails.details.age}
                            disabled={!editMode}
                            width='90%'
                            size='small'
                            error={userDetailsValidation.details.age}
                        />
                    </S.BodyDetails>
                </S.DataContanier>
                <S.ExtraDetailsContainer>
                    <S.ExtraDetail>
                        <Label color={mainTheme.colors.mainBlack} fontSize='11px' fontWeight='700'>
                            Daily calories
                        </Label>
                        <Label
                            color={mainTheme.colors.mainBlack}
                            fontSize='14px'
                            fontWeight='700'
                            lineHeight='18px'
                        >
                            {userDetails.details.dailyCalories} kcal
                        </Label>
                    </S.ExtraDetail>
                    <S.ExtraDetail>
                        <Label color={mainTheme.colors.mainBlack} fontSize='10px' fontWeight='700'>
                            BMI
                        </Label>
                        <Label
                            color={mainTheme.colors.mainBlack}
                            fontSize='14px'
                            fontWeight='700'
                            lineHeight='18px'
                        >
                            {userDetails.details.bmi}
                        </Label>
                    </S.ExtraDetail>
                    <S.ExtraDetail>
                        <Label color={mainTheme.colors.mainBlack} fontSize='11px' fontWeight='700'>
                            Account type
                        </Label>
                        <GradientLabel>
                            <Label
                                color={mainTheme.colors.mainBlack}
                                fontSize='14px'
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
                            styleType='gradientEmpty'
                            onClick={handleSubmit}
                            isLoading={isLoading}
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
