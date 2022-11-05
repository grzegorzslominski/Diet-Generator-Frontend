import React from "react";
import * as S from '../Register/Register.style'
import Label from "../../components/UI/Label/Label";
import {mainTheme} from "../../themes/mainTheme";
import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";
import google from "../../assets/icons/google.svg";


const Register = () => {
    return <S.Container>
        <S.H1Styled>
            <Label
                fontFamily='Montserrat'
                fontWeight='600'
                fontSize='2.625rem'
                color={mainTheme.colors.mainBlack}
            >
                Sign Up
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
                    Email
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
            <S.LoginElement>
                <Label
                    fontFamily={mainTheme.text.Lato}
                    fontWeight='700'
                    fontSize='1rem'
                    lineHeight='1.2rem'
                    color={mainTheme.colors.mainBlack}
                >
                    Repeat password
                </Label>
            </S.LoginElement>
            <input type="text" placeholder="Type your password"/>

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
                Register
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
            Or Sign Up Using
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
        <S.H2Styled>
        <Label
            fontFamily={mainTheme.text.Lato}
            fontWeight='700'
            fontSize='1rem'
            lineHeight='1.3rem'
            textAlign='center'
            color={mainTheme.colors.mainBlack}
        >
            Already a member?
        </Label>
        </S.H2Styled>

        <S.ButtonStyled>
            <Label
                fontFamily={mainTheme.text.Lato}
                fontWeight='700'
                fontSize='1rem'
                lineHeight='1.3rem'
                textAlign='center'
            >
              SIGN IN
            </Label>

        </S.ButtonStyled>



    </S.Container>

};

export default Register;