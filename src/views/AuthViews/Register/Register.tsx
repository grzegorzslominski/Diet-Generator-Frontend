import { useDispatch } from "react-redux";
import { useState } from "react";
import { useAuthViews } from "../../../hooks/useAuthViews";
import { useForm } from "../../../hooks/useForm";
import { setNotification } from "../../../redux/slices/notification";

import { ReactComponent as UserIcon } from "../../../assets/icons/user.svg";
import { ReactComponent as PasswordIcon } from "../../../assets/icons/password.svg";
import { mainTheme } from "../../../themes/mainTheme";
import { ENDPOINTS_USER } from "../../../navigation/endpoints";
import { emailRegex } from "../../../helpers/validation";
import axiosFoodieInstance from "../../../axios/axiosFoodieInstance";

import Label from "../../../components/UI/Label/Label";
import AuthPad from "../components/AuthPad/AuthPad";
import ExternalAuthProvidres from "../components/ExternalAuthProvidres/ExternalAuthProvidres";
import GradientLabel from "../../../components/UI/GradientLabel/GradientLabel";
import Input from "../../../components/UI/Input/Input";
import Button from "../../../components/UI/Button/Button";
import ModalPortal from "../../../components/UI/ModalPortal/ModalPortal";

import { UserSignUp } from "../../../models/User/AuthUser";

import * as S from "../AuthViews.style";

const Register = () => {
    const dispatch = useDispatch();
    const { changeAutView, closeAuthViews } = useAuthViews();

    const [isLoading, setIsLoading] = useState(false);

    const {
        handleSubmit,
        handleChange,
        data: userRegisterData,
        errors,
    } = useForm<UserSignUp>({
        validations: {
            email: {
                required: {
                    value: true,
                    message: "This field is required",
                },
                pattern: {
                    value: emailRegex,
                    message: "Incorrect email address",
                },
            },
            password: {
                required: {
                    value: true,
                    message: "This field is required",
                },
                pattern: {
                    value: /^[A-Za-z0-9]\w{6,}$/,
                    message: "The password must consist of at least 6 characters",
                },
            },
            confirmPassword: {
                required: {
                    value: true,
                    message: "This field is required",
                },
                custom: {
                    isValid: (confirmPassword: string) => {
                        return confirmPassword === userRegisterData.password;
                    },
                    message: "Passwords do not match",
                },
            },
        },

        onSubmit: () => {
            setIsLoading(true);
            const userData = {
                email: userRegisterData.email,
                password: userRegisterData.password,
            };
            axiosFoodieInstance
                .post(ENDPOINTS_USER.register, userData)
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
                        changeAutView();
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
        <ModalPortal blurBackground close={closeAuthViews}>
            <AuthPad header='Sign Up'>
                <S.Contanier>
                    <S.InputsContainer>
                        <Input
                            icon={<UserIcon />}
                            placeholder='Type your email'
                            onChange={handleChange("email")}
                            label='Email'
                            value={userRegisterData.email}
                            error={errors.email}
                        />
                        <Input
                            icon={<PasswordIcon />}
                            type='password'
                            placeholder='Type your password'
                            onChange={handleChange("password")}
                            label='Password'
                            maxLength={24}
                            value={userRegisterData.password}
                            error={errors.password}
                        />
                        <Input
                            icon={<PasswordIcon />}
                            type='password'
                            placeholder='Confirm your password'
                            onChange={handleChange("confirmPassword")}
                            label='Confirm password'
                            maxLength={24}
                            value={userRegisterData.confirmPassword}
                            error={errors.confirmPassword}
                        />
                    </S.InputsContainer>
                    <Button
                        isLoading={isLoading}
                        width='12rem'
                        styleType='gradientFull'
                        onClick={handleSubmit}
                        borderRadius='15px'
                        fontSize='1rem'
                        size='small'
                    >
                        Sign Up
                    </Button>

                    <Label
                        fontFamily={"Lato"}
                        fontWeight='700'
                        fontSize='0.8rem'
                        textAlign='center'
                        color={mainTheme.colors.mainBlack}
                    >
                        or sign up using
                    </Label>
                    {/* <ExternalAuthProvidres authType='register' /> */}

                    <S.RedirectContainer>
                        <Label
                            fontFamily={"Lato"}
                            fontWeight='700'
                            fontSize='0.8rem'
                            lineHeight='1.3rem'
                            textAlign='center'
                            color={mainTheme.colors.mainBlack}
                        >
                            Already a member?
                        </Label>
                        <GradientLabel gradient={mainTheme.gradients.buttonGradient}>
                            <Label
                                fontFamily={"Lato"}
                                fontWeight='700'
                                fontSize='0.8rem'
                                lineHeight='1.3rem'
                                textAlign='center'
                                color={mainTheme.colors.mainBlack}
                                onClick={changeAutView}
                            >
                                SIGN IN
                            </Label>
                        </GradientLabel>
                    </S.RedirectContainer>
                </S.Contanier>
            </AuthPad>
        </ModalPortal>
    );
};

export default Register;
