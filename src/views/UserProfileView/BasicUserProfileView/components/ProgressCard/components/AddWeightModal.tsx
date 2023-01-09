import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "../../../../../../hooks/useForm";
import { setNotification } from "../../../../../../redux/slices/notification";
import { ENDPOINTS_USER } from "../../../../../../navigation/endpoints";

import axiosFoodieInstance from "../../../../../../axios/axiosFoodieInstance";
import BoxPad from "../../../../../../components/UI/BoxPad/BoxPad";
import ModalPortal from "../../../../../../components/UI/ModalPortal/ModalPortal";
import Input from "../../../../../../components/UI/Input/Input";

import * as S from "./AddWeightModal.style";

type AddWeightModal = {
    close: () => void;
};

type AddWeightType = {
    date: string;
    weight: number;
};

const AddWeightModal = ({ close }: AddWeightModal) => {
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false);

    const {
        handleSubmit,
        handleChange,
        data: addWeightData,
        errors,
    } = useForm<AddWeightType>({
        validations: {
            // email: {
            //     required: {
            //         value: true,
            //         message: "This field is required",
            //     },
            //     pattern: {
            //         value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            //         message: "Incorrect email address",
            //     },
            // },
        },

        onSubmit: () => {
            setIsLoading(true);
            axiosFoodieInstance
                .post(ENDPOINTS_USER.register, addWeightData)
                .then((response) => {
                    if (response.status === 201) {
                        dispatch(
                            setNotification({
                                label: "Register",
                                header: "Success",
                                message: "Account was created",
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
                            label: "Register",
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
        <ModalPortal close={close} blurBackground blurLevel='normal'>
            <BoxPad>
                <S.Content>
                    <Input
                        type='date'
                        label='Date'
                        value={addWeightData.date}
                        onChange={handleChange("date")}
                        error={errors.date}
                    />
                    <Input
                        type='number'
                        onChange={handleChange("weight")}
                        label='Email'
                        value={addWeightData.weight}
                        error={errors.weight}
                    />
                </S.Content>
            </BoxPad>
        </ModalPortal>
    );
};

export default AddWeightModal;
