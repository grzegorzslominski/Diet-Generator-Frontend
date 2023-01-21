import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import {
    ENDPOINTS_EXPANDE_USER_PROFILE,
    ENDPOINTS_IMAGE_UPLOAD,
} from "../../../../../../navigation/endpoints";
import { INIT_SOCIAL_LINKS, SocialLinks } from "../../../../../../models/SocialsLinks/SocialsLinks";
import axiosFoodieInstance from "../../../../../../axios/axiosFoodieInstance";
import { setNotification } from "../../../../../../redux/slices/notification";
import { validEmail } from "../../../../../../helpers/validation";

import ModalPortal from "../../../../../../components/UI/ModalPortal/ModalPortal";
import BoxPad from "../../../../../../components/UI/BoxPad/BoxPad";
import Button from "../../../../../../components/UI/Button/Button";
import Label from "../../../../../../components/UI/Label/Label";
import CreatorForm from "./CreatorForm/CreatorForm";

import {
    USER_EXTRAS_FORM_DATA,
    USER_EXTRAS_FORM_VALIDATION_DATA,
    UserExtrasForm,
    UserExtrasFormValidation,
} from "../../../../../../models/User/ExpandedUserForm";
import { UserExtras } from "../../../../../../models/User/ExpandedUser";
import { UserData } from "../../../../../../models/User/User";

import * as S from "./CreatorFormModal.style";
import { removeImageFile, uploadImageFile } from "../../../../../../helpers/uploadFile";

type CreatorFormModalProps = {
    user: UserData;
    userExtras: UserExtras | null | undefined;
    onClose: () => void;
};

export const CreatorFormModal = ({ user, userExtras, onClose }: CreatorFormModalProps) => {
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false);
    const [currentUserExtras, setCurrentUserExtras] = useState<UserExtrasForm>(
        JSON.parse(JSON.stringify(USER_EXTRAS_FORM_DATA)),
    );
    const [userExtrasValidation, setUserExtrasValidation] = useState<UserExtrasFormValidation>(
        JSON.parse(JSON.stringify(USER_EXTRAS_FORM_VALIDATION_DATA)),
    );
    useEffect(() => {
        if (userExtras) {
            setCurrentUserExtras({
                ...userExtras,
                background_image: {
                    file: null,
                    url: userExtras.background_image,
                    type: 'image/png"',
                },
                socials: INIT_SOCIAL_LINKS,
            });
        }
    }, [userExtras]);

    const onChangePrehandler = (property: string, value: any, socialKey?: string) => {
        const currentUserExtrasValidation: UserExtrasFormValidation = JSON.parse(
            JSON.stringify(userExtrasValidation),
        );
        const userExtrasCopy: UserExtrasForm = JSON.parse(JSON.stringify(currentUserExtras));
        if (socialKey) {
            currentUserExtrasValidation["socials"] = "";
            userExtrasCopy.socials[socialKey] = value;
        } else {
            currentUserExtrasValidation[property] = "";
            userExtrasCopy[property] = value;
        }
        setUserExtrasValidation(currentUserExtrasValidation);
        setCurrentUserExtras(userExtrasCopy);
    };

    const backgroundOnChangePrehandler = (files: any) => {
        if (files.length) {
            const newImageURL = URL.createObjectURL(files[0]);
            const backgroundImage = {
                url: newImageURL,
                type: files[0].type,
                file: files[0],
            };
            onChangePrehandler("background_image", backgroundImage);
        }
    };

    const validateForm = (): boolean => {
        let validationPassed = true;

        const extrasUserCopy: UserExtrasForm = JSON.parse(JSON.stringify(currentUserExtras));

        const currentUserExtrasValidation: UserExtrasFormValidation = JSON.parse(
            JSON.stringify(userExtrasValidation),
        );

        Object.keys(currentUserExtrasValidation).forEach((key) => {
            if (key === "socials") {
                const socialsValidationPassed = validateSocials(extrasUserCopy[key]);
                if (!socialsValidationPassed) {
                    currentUserExtrasValidation[key] = "Invalid url or no url added";
                    validationPassed = false;
                }
            } else if (key === "background_image") {
                if (
                    !extrasUserCopy["background_image"]?.url &&
                    !extrasUserCopy.background_image?.file
                ) {
                    currentUserExtrasValidation[key] = "Background image is required";
                    validationPassed = false;
                }
            } else if (extrasUserCopy[key] === "") {
                currentUserExtrasValidation[key] = "This field is required";
                validationPassed = false;
            }
        });

        setUserExtrasValidation(currentUserExtrasValidation);
        return validationPassed;
    };

    const validateSocials = (socials: SocialLinks): boolean => {
        let validationPassed = true;
        let socialIsAdded = false;
        Object.keys(INIT_SOCIAL_LINKS).forEach((key) => {
            if (socials[key]?.length && validEmail(socials[key])) {
                socialIsAdded = true;
            } else if (socials[key]?.length && !validEmail(socials[key])) {
                validationPassed = false;
            }
        });

        return Boolean(validationPassed && socialIsAdded);
    };

    const checkRemoveOldUserAvatar = async (newUplodedImageURL: string | undefined | null) => {
        if (
            user?.profileImagePath &&
            (!newUplodedImageURL || user.profileImagePath !== newUplodedImageURL)
        ) {
            await removeImageFile(ENDPOINTS_IMAGE_UPLOAD.deleteExtrasBackground);
        }
    };

    const onSubmit = async () => {
        setIsLoading(true);
        const validationPassed = validateForm();
        if (validationPassed) {
            const dataToSend = JSON.parse(JSON.stringify(currentUserExtras));
            if (currentUserExtras.background_image?.file) {
                const { imageURL, err: backgroundUploadError } = await uploadImageFile(
                    ENDPOINTS_IMAGE_UPLOAD.uploadExtrasBackground,
                    "image",
                    currentUserExtras.background_image?.file,
                );

                if (backgroundUploadError) {
                    dispatch(
                        setNotification({
                            label: "File upload",
                            header: "Failed",
                            message: `Photo could not be uploaded${backgroundUploadError}`,
                            timeout: 5000,
                        }),
                    );
                } else {
                    dataToSend.profileImagePath = imageURL;
                }
            }

            checkRemoveOldUserAvatar(dataToSend.background_image);

            axiosFoodieInstance
                .post(ENDPOINTS_EXPANDE_USER_PROFILE.postProfile, dataToSend)
                .then((response) => {
                    if (response.status === 201) {
                        dispatch(
                            setNotification({
                                label: "Creator account",
                                header: "Success",
                                message: "Creator account was created",
                                timeout: 5000,
                            }),
                        );
                    }
                })
                .catch((err) => {});
        }
        setIsLoading(false);
    };

    return (
        <ModalPortal close={onClose} blurBackground>
            <BoxPad header='Creator form'>
                <S.Container>
                    <S.InfoContainer>
                        <Label width='100%' textAlign='justify' fontSize='12px'>
                            {!user
                                ? "If you are an online creator or have experience in the field of nutrition or fitness, please contact us to assign a creator account. You will get access to edit your publicly available profile and the ability to share your own recipes and posts on the platform. Send an email and we will contact you within three days."
                                : "Complete or edit information made available for viewing by other users on your profile."}
                        </Label>
                    </S.InfoContainer>
                    {user && currentUserExtras && (
                        <CreatorForm
                            userExtras={currentUserExtras}
                            userExtrasValidation={userExtrasValidation}
                            onChange={onChangePrehandler}
                            onBackgroundChange={backgroundOnChangePrehandler}
                        />
                    )}
                    <Button
                        width='150px'
                        disabled={false}
                        isLoading={isLoading}
                        size='small'
                        onClick={() => {
                            !user ? window.open("mailto:help@foodie.app", "_blank") : onSubmit();
                        }}
                    >
                        {!user ? "Send email" : "Send"}
                    </Button>
                </S.Container>
            </BoxPad>
        </ModalPortal>
    );
};

export default CreatorFormModal;
