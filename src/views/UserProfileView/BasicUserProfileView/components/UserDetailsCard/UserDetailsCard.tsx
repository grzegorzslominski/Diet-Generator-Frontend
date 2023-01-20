import { useQueryClient } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { setNotification } from "../../../../../redux/slices/notification";
import axiosFoodieInstance from "../../../../../axios/axiosFoodieInstance";
import { ENDPOINTS_IMAGE_UPLOAD, ENDPOINTS_USER } from "../../../../../navigation/endpoints";
import { validEmail } from "../../../../../helpers/validation";

import addPhotoIMG from "../../../../../assets/add-photo.png";
import { mainTheme } from "../../../../../themes/mainTheme";
import { setUser } from "../../../../../redux/slices/user";

import GradientLabel from "../../../../../components/UI/GradientLabel/GradientLabel";
import ActionButton from "../../../../../components/UI/ActionButton/ActionButton";
import SelectOption from "../../../../../components/UI/Select/SelectOption";
import UploadBox from "../../../../../components/UI/UploadBox/UploadBox";
import Select from "../../../../../components/UI/Select/Select";
import Button from "../../../../../components/UI/Button/Button";
import BoxPad from "../../../../../components/UI/BoxPad/BoxPad";
import Input from "../../../../../components/UI/Input/Input";
import Label from "../../../../../components/UI/Label/Label";

import {
    BasicUserProfileValidation,
    BASIC_USER_PROFILE_VALIDATION_DATA,
} from "../../../../../models/User/UserForm";
import {
    GENDERS,
    GenderType,
    User,
    UserData,
    getUserData,
    UserFormData,
} from "../../../../../models/User/User";

import * as S from "./UserDetailsCard.style";
import { removeImageFile, uploadImageFile } from "../../../../../helpers/uploadFile";

type UserDetailsCardProps = {
    className?: string;
    user: User;
};

const UserDetailsCard = ({ className, user }: UserDetailsCardProps) => {
    const dispatch = useDispatch();
    const queryClient = useQueryClient();

    const [editMode, setEditMode] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [userDetails, setUserDetails] = useState<UserFormData>();
    const [userDetailsValidation, setUserDetailsValidation] = useState<BasicUserProfileValidation>(
        BASIC_USER_PROFILE_VALIDATION_DATA,
    );

    useEffect(() => {
        const currentUserDetails = JSON.parse(JSON.stringify(user));
        currentUserDetails.profileImagePath = {
            type: "image/png",
            url: currentUserDetails.profileImagePath,
            file: null,
        };
        setUserDetails(currentUserDetails as UserFormData);
    }, [user]);

    const handleOnChange = (property: string, value: any) => {
        const currentUserDetailsData = JSON.parse(JSON.stringify(userDetails));
        currentUserDetailsData[property] = value;
        setUserDetails(currentUserDetailsData);
    };

    const userAvatarOnChangePrehandler = (files: any) => {
        if (files.length) {
            const newImageURL = URL.createObjectURL(files[0]);
            const userAvatar = {
                url: newImageURL,
                type: files[0].type,
                file: files[0],
            };
            handleOnChange("profileImagePath", userAvatar);
            //  setNewAchievementValidation({ ...newAchievementValidation, logo: "" });
        }
    };

    const handleSubmit = async () => {
        setIsLoading(true);
        const validationPassed = dataValidation();

        if (validationPassed) {
            await updateUserData();
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
            if (!currentUserDetails[key]) {
                currentValidation[key] = "This field is required";
                validationPassed = false;
            } else if (key === "email" && validEmail(currentUserDetails[key])) {
                currentValidation[key] = "Incorrect email address";
                validationPassed = false;
            }
        });

        setUserDetailsValidation(currentValidation);
        return validationPassed;
    };

    const checkRemoveOldUserAvatar = async (newUplodedImageURL: string | undefined | null) => {
        if (
            user?.profileImagePath &&
            (!newUplodedImageURL || user.profileImagePath !== newUplodedImageURL)
        ) {
            console.log("removing");

            await removeImageFile(ENDPOINTS_IMAGE_UPLOAD.removeUserAvater);
        }
    };

    const updateUserData = async () => {
        const dataToSend = JSON.parse(JSON.stringify(userDetails));
        let refetchUser = false;

        delete dataToSend.email;
        delete dataToSend.timestamp;

        if (userDetails?.profileImagePath?.file) {
            let uploadedAvatarURL = "";
            const { imageURL, err: avatarUploadError } = await uploadImageFile(
                ENDPOINTS_IMAGE_UPLOAD.uploadUserAvatar,
                "image",
                userDetails?.profileImagePath.file,
            );

            if (avatarUploadError) {
                dispatch(
                    setNotification({
                        label: "File upload",
                        header: "Failed",
                        message: `Photo could not be uploaded${avatarUploadError}`,
                        timeout: 5000,
                    }),
                );
            } else {
                uploadedAvatarURL = imageURL;
            }

            dataToSend.profileImagePath = uploadedAvatarURL;
        }

        await checkRemoveOldUserAvatar(dataToSend.profileImagePath);

        await axiosFoodieInstance
            .post(ENDPOINTS_USER.userInfo, dataToSend)
            .then((response) => {
                if (response.status === 200) {
                    queryClient.invalidateQueries(["userBasicProfile"], { refetchType: "all" });
                    if (dataToSend?.weight && dataToSend.weight !== user?.weight) {
                        queryClient.invalidateQueries(["weightStats"], { refetchType: "all" });
                    }
                    refetchUser = true;
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

        if (refetchUser) {
            const freshUserData = await getUserData();
            dispatch(setUser(freshUserData ? freshUserData : dataToSend));
        }
    };

    return (
        <BoxPad className={className}>
            {userDetails && (
                <S.Content>
                    <S.TopSection
                        // profileIMG={Boolean(userDetails.profileImagePath)}
                        profileIMG={false}
                    >
                        <S.UserAvatarContainer>
                            <UploadBox
                                url={userDetails.profileImagePath?.url}
                                type={userDetails.profileImagePath?.type}
                                onChange={userAvatarOnChangePrehandler}
                                onRemove={() => handleOnChange("profileImagePath", null)}
                                accept={{
                                    "image/jpeg": [".jpeg", ".png"],
                                    "image/png": [".jpeg", ".png"],
                                }}
                                disable={!editMode}
                            />
                        </S.UserAvatarContainer>

                        <S.CardName>
                            <Label
                                fontSize='16px'
                                color={mainTheme.colors.mainBlack}
                                fontWeight='600'
                            >
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
                            value={userDetails.gender}
                            width='90%'
                            label='Gender'
                            size='auto'
                            error={userDetailsValidation.gender}
                            disabled={!editMode}
                        >
                            {GENDERS.map((gender: GenderType) => (
                                <SelectOption
                                    key={gender.value}
                                    onChange={(value: string) => handleOnChange("gender", value)}
                                    value={gender.value}
                                >
                                    {gender.label}
                                </SelectOption>
                            ))}
                        </Select>
                        <S.BodyDetails>
                            <Input
                                onChange={(e) => handleOnChange("weight", +e.target.value)}
                                label='Weight'
                                value={userDetails.weight}
                                disabled={!editMode}
                                width='90%'
                                size='small'
                                error={userDetailsValidation.weight}
                            />
                            <Input
                                onChange={(e) => handleOnChange("height", +e.target.value)}
                                label='Height'
                                value={userDetails.height}
                                disabled={!editMode}
                                width='90%'
                                size='small'
                                error={userDetailsValidation.height}
                            />
                            <Input
                                onChange={(e) => handleOnChange("age", +e.target.value)}
                                label='Age'
                                value={userDetails.age}
                                disabled={!editMode}
                                width='90%'
                                size='small'
                                error={userDetailsValidation.age}
                            />
                        </S.BodyDetails>
                    </S.DataContanier>
                    <S.BottomSection>
                        <S.ExtraDetailsContainer>
                            <S.ExtraDetail>
                                <Label
                                    color={mainTheme.colors.mainBlack}
                                    fontSize='11px'
                                    fontWeight='700'
                                >
                                    Calories
                                </Label>
                                <Label
                                    color={mainTheme.colors.mainBlack}
                                    fontSize='14px'
                                    fontWeight='700'
                                    lineHeight='18px'
                                >
                                    {userDetails.kCal ? `${userDetails.kCal} kcal` : "-"}
                                </Label>
                            </S.ExtraDetail>
                            <S.ExtraDetail>
                                <Label
                                    color={mainTheme.colors.mainBlack}
                                    fontSize='10px'
                                    fontWeight='700'
                                >
                                    BMI
                                </Label>
                                <Label
                                    color={mainTheme.colors.mainBlack}
                                    fontSize='14px'
                                    fontWeight='700'
                                    lineHeight='18px'
                                >
                                    {userDetails.bmi ? `${userDetails.bmi.toFixed(2)}` : "-"}
                                </Label>
                            </S.ExtraDetail>
                            <S.ExtraDetail>
                                <Label
                                    color={mainTheme.colors.mainBlack}
                                    fontSize='11px'
                                    fontWeight='700'
                                >
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
                        </S.ExtraDetailsContainer>
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
                    </S.BottomSection>
                </S.Content>
            )}
        </BoxPad>
    );
};

export default UserDetailsCard;
