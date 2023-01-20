import { useDispatch } from "react-redux";
import { useState } from "react";

import axiosFoodieInstance from "../../../../../../../axios/axiosFoodieInstance";
import { ENDPOINTS_EXPANDE_USER_PROFILE } from "../../../../../../../navigation/endpoints";
import { setNotification } from "../../../../../../../redux/slices/notification";

import ModalPortal from "../../../../../../../components/UI/ModalPortal/ModalPortal";
import BoxPad from "../../../../../../../components/UI/BoxPad/BoxPad";
import Button from "../../../../../../../components/UI/Button/Button";
import Label from "../../../../../../../components/UI/Label/Label";
import CreatorForm from "./CreatorForm/CreatorForm";

import {
    EXPANDED_USER_FORM_DATA,
    EXPANDED_USER_FORM_VALIDATION_DATA,
    ExpandedUserForm,
    ExpandedUserFormValidation,
} from "../../../../../../../models/User/ExpandedUserForm";
import { UserData } from "../../../../../../../models/User/User";

import * as S from "./CreatorFormModal.style";

type CreatorFormModalProps = {
    user: UserData;
    onClose: () => void;
};

export const CreatorFormModal = ({ user, onClose }: CreatorFormModalProps) => {
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false);
    const [expandedUser, setExpandedUser] = useState<ExpandedUserForm>(
        JSON.parse(JSON.stringify(EXPANDED_USER_FORM_DATA)),
    );

    const [expandedUserValidation, setExpandedUserValidation] =
        useState<ExpandedUserFormValidation>(
            JSON.parse(JSON.stringify(EXPANDED_USER_FORM_VALIDATION_DATA)),
        );

    const onChangePrehandler = (property: string, value: any) => {
        const currentExpandedUser: ExpandedUserForm = JSON.parse(JSON.stringify(expandedUser));
        if (property === "socials") {
            currentExpandedUser.socials[property] = value;
        } else {
            currentExpandedUser[property] = value;
        }
        setExpandedUser(currentExpandedUser);
    };

    const validateForm = (): boolean => {
        let validationPassed = true;

        const currentExpandedUser: ExpandedUserForm = JSON.parse(JSON.stringify(expandedUser));
        const currentExpandedUserValidation: ExpandedUserFormValidation = JSON.parse(
            JSON.stringify(expandedUser),
        );

        Object.keys(currentExpandedUserValidation).forEach((key) => {
            if (currentExpandedUser[key] === "socials") {
                let socialsValidationPassed = false;
                Object.keys(currentExpandedUser["socials"]).forEach((key) => {
                    if (currentExpandedUser["socials"][key]) {
                        socialsValidationPassed = true;
                    }
                });
                if (!socialsValidationPassed) {
                    currentExpandedUserValidation[key] =
                        "At least one social account address must be provided";
                }
            } else if (!currentExpandedUser[key]) {
                currentExpandedUserValidation[key] = "This field is required";
                validationPassed = false;
            }
        });

        return validationPassed;
    };

    const onSubmit = async () => {
        setIsLoading(true);
        const currentExpandedUser = JSON.parse(JSON.stringify(expandedUser));
        const validationPassed = validateForm();
        if (validationPassed) {
            axiosFoodieInstance
                .post(ENDPOINTS_EXPANDE_USER_PROFILE.postProfile, currentExpandedUser)
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptas
                            officiis similique dignissimos aspernatur quae, cupiditate expedita
                            veniam cumque provident, nihil accusantium excepturi ad! Culpa fugit
                            totam rem ex dicta?
                        </Label>
                    </S.InfoContainer>
                    {!user && (
                        <CreatorForm
                            expandedUser={expandedUser}
                            expandedUserValidation={expandedUserValidation}
                            onChange={onChangePrehandler}
                        />
                    )}
                    <Button
                        width='150px'
                        disabled={false}
                        isLoading={isLoading}
                        size='small'
                        onClick={() => {
                            user ? window.open("mailto:help@foodie.app", "_blank") : onSubmit;
                        }}
                    >
                        {user ? "Send email" : "Send"}
                    </Button>
                </S.Container>
            </BoxPad>
        </ModalPortal>
    );
};

export default CreatorFormModal;
