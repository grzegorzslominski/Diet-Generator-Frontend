import React from "react";
import * as S from './Login.style'
import Label from "../../components/UI/Label/Label";
import {mainTheme} from "../../themes/mainTheme";
import facebook from "../../assets/icons/facebook.svg"
import twitter from "../../assets/icons/twitter.svg"
import google from "../../assets/icons/google.svg"

const Login = () => {
    return (
        <S.Container>
            <S.H1Styled>
            <Label
                fontFamily='Montserrat'
                fontWeight='600'
                fontSize='2.625rem'
                color={mainTheme.colors.mainBlack}
            >
                Login
            </Label>
            </S.H1Styled>
            <S.LoginContainer>
                <S.LoginElement>
                <Label
                    fontFamily={mainTheme.text.Lato}
                    fontWeight='700'
                    fontSize='1rem'
                    lineHeight='1.2rem'
                    color={mainTheme.colors.mainBlack}
                >
                    Username
                </Label>
                <input type="text" placeholder="Type your username"/>
                </S.LoginElement>
                <S.LoginElement>
                <Label
                    fontFamily={mainTheme.text.Lato}
                    fontWeight='700'
                    fontSize='1rem'
                    lineHeight='1.2rem'
                    color={mainTheme.colors.mainBlack}
                >
                    Password
                </Label>
                </S.LoginElement>
                <input type="text" placeholder="Type your password"/>
                <S.ButtonStyled>
                    Forgot your password?
                </S.ButtonStyled>

            </S.LoginContainer>
            <S.LoginButton>
                <Label
                    fontFamily={mainTheme.text.Lato}
                    fontWeight='600'
                    fontSize='1.5rem'
                    lineHeight='1.5rem'
                    color='white'
                    textAlign='center'
                >
                    Login
                </Label>
            </S.LoginButton>
            <Label
                fontFamily={mainTheme.text.Lato}
                fontWeight='700'
                fontSize='1rem'
                lineHeight='1.3rem'
                textAlign='center'
                color={mainTheme.colors.mainBlack}
            >
                Or Sign In Using
            </Label>
            <S.Icons>
                <S.ImageContainer>
                    <img src={facebook} alt=""/>
                </S.ImageContainer>
                <S.ImageContainer>
                    <img src={twitter} alt=""/>
                </S.ImageContainer>
                <S.ImageContainer>
                    <img src={google} alt=""/>
                </S.ImageContainer>
            </S.Icons>
            <Label
                fontFamily={mainTheme.text.Lato}
                fontWeight='700'
                fontSize='1rem'
                lineHeight='1.3rem'
                textAlign='center'
                color={mainTheme.colors.mainBlack}
            >
                Or Sign Up Using
            </Label>
            <S.H2Styled>
            <Label
                fontFamily={mainTheme.text.Lato}
                fontWeight='700'
                fontSize='1rem'
                lineHeight='1.3rem'
                textAlign='center'
                color={mainTheme.colors.mainBlack}
            >
                SIGN UP
            </Label>
            </S.H2Styled>


        </S.Container>
    );
};

export default Login;