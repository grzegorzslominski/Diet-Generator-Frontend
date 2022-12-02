import { useState } from "react";
import { useForm } from "../../../hooks/useForm";
import { useDispatch } from "react-redux";
import { setNotification } from "../../../redux/slices/notification";
import { useAuthViews } from "../../../hooks/useAuthViews";

import { ReactComponent as UserIcon } from "../../../assets/icons/user.svg";
import { ReactComponent as PasswordIcon } from "../../../assets/icons/password.svg";

import Label from "../../../components/UI/Label/Label";
import AuthPad from "../components/AuthPad/AuthPad";
import Input from "../../../components/UI/Input/Input";
import Button from "../../../components/UI/Button/Button";
import ExternalAuthProvidres from "../components/ExternalAuthProvidres/ExternalAuthProvidres";
import GradientLabel from "../../../components/UI/GradientLabel/GradientLabel";
import ModalPortal from "../../../components/UI/ModalPortal/ModalPortal";

import { mainTheme } from "../../../themes/mainTheme";

import axiosFoodieInstance from "../../../axios/axiosFoodieInstance";

import { UserSignIn } from "../../../models/User/User";

import * as S from "../AuthViews.style";

type LoginProsp = {
    authorizeUser: () => void;
};

const Login = ({ authorizeUser }: LoginProsp) => {
    const dispatch = useDispatch();
    const { changeAutView, closeAuthViews } = useAuthViews();

    const [isLoading, setIsLoading] = useState(false);

    const {
        handleSubmit,
        handleChange,
        data: userLoginData,
        errors,
    } = useForm<UserSignIn>({
        validations: {
            email: {
                required: {
                    value: true,
                    message: "This field is required.",
                },
                pattern: {
                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Incorrect email address.",
                },
            },
            password: {
                required: {
                    value: true,
                    message: "This field is required.",
                },
            },
        },

        onSubmit: () => {
            true;
            axiosFoodieInstance
                .post(`/login`, userLoginData)
                .then((response) => {
                    if (response.status === 201) {
                        //
                    }
                })
                .catch((err) => {
                    const errorMessage = err.response.data?.message
                        ? err.response.data.message
                        : "Cannot send the report. Try again later.";

                    dispatch(
                        setNotification({
                            label: "Community project",
                            header: "Ownership application",
                            message: errorMessage,
                            timeout: 5000,
                        }),
                    );
                })
                .finally(() => {
                    setIsLoading(false);
                });

            authorizeUser();
        },
    });

    return (
        <ModalPortal close={closeAuthViews} blurBackground>
            <AuthPad header='Sign In'>
                <S.Contanier>
                    <S.InputsContainer>
                        <Input
                            icon={<UserIcon />}
                            placeholder='Type your email'
                            onChange={handleChange("email")}
                            label='Email'
                            value={userLoginData.email}
                            error={errors.email}
                        />
                        <Input
                            icon={<PasswordIcon />}
                            type='password'
                            placeholder='Type your password'
                            onChange={handleChange("password")}
                            label='Password'
                            value={userLoginData.password}
                            error={errors.password}
                        />
                    </S.InputsContainer>
                    <Button
                        isLoading={isLoading}
                        width='12rem'
                        styleType='primary'
                        onClick={handleSubmit}
                        borderRadius='15px'
                        fontSize='1rem'
                        size='small'
                    >
                        Sign In
                    </Button>

                    <Label
                        fontFamily={"Lato"}
                        fontWeight='700'
                        fontSize='0.8rem'
                        textAlign='center'
                        color={mainTheme.colors.mainBlack}
                    >
                        or sign in using
                    </Label>
                    <ExternalAuthProvidres authType='login' />

                    <S.RedirectContainer>
                        <Label
                            fontFamily={"Lato"}
                            fontWeight='700'
                            fontSize='0.8rem'
                            lineHeight='1.3rem'
                            textAlign='center'
                            color={mainTheme.colors.mainBlack}
                        >
                            Not a member?
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
                                SIGN UP
                            </Label>
                        </GradientLabel>
                    </S.RedirectContainer>
                </S.Contanier>
            </AuthPad>
        </ModalPortal>
    );
};

export default Login;