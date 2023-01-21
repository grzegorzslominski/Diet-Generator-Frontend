import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

import { setNotification } from "../../../redux/slices/notification";
import { useAuthViews } from "../../../hooks/useAuthViews";
import { useForm } from "../../../hooks/useForm";

import { ReactComponent as PasswordIcon } from "../../../assets/icons/password.svg";
import { ReactComponent as UserIcon } from "../../../assets/icons/user.svg";
import axiosFoodieInstance from "../../../axios/axiosFoodieInstance";
import { ENDPOINTS_USER } from "../../../navigation/endpoints";
import { NAVIGATION } from "../../../navigation/paths";

import ExternalAuthProvidres from "../components/ExternalAuthProvidres/ExternalAuthProvidres";
import GradientLabel from "../../../components/UI/GradientLabel/GradientLabel";
import ModalPortal from "../../../components/UI/ModalPortal/ModalPortal";
import Button from "../../../components/UI/Button/Button";
import Label from "../../../components/UI/Label/Label";
import Input from "../../../components/UI/Input/Input";
import AuthPad from "../components/AuthPad/AuthPad";

import { mainTheme } from "../../../themes/mainTheme";
import { UserSignIn } from "../../../models/User/AuthUser";

import * as S from "../AuthViews.style";

type LoginProps = {
    authorizeUser: () => Promise<null> | undefined;
};

const Login = ({ authorizeUser }: LoginProps) => {
    const dispatch = useDispatch();
    const { changeAutView, closeAuthViews } = useAuthViews();

    const navigate = useNavigate();
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
            setIsLoading(true);
            axiosFoodieInstance
                .post(ENDPOINTS_USER.login, userLoginData)
                .then(async (response) => {
                    if (response.status === 200) {
                        const authToken = response.data;

                        if (authToken) {
                            localStorage.setItem("authToken", authToken.token);
                            closeAuthViews();
                            const user = await authorizeUser();
                            user && navigate(NAVIGATION.dashboard);
                        }
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
                        styleType='gradientFull'
                        onClick={handleSubmit}
                        borderRadius='15px'
                        fontSize='1rem'
                        size='small'
                        tabIndex={3}
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
