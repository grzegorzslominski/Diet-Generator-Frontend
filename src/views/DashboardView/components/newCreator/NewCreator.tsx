import React from "react";
import {mainTheme} from "../../../../themes/mainTheme";
import Label from "../../../../components/UI/Label/Label";
import * as S from "./NewCreator.style"
import trainer from '../../../../assets/dashboard/trainer.svg'
import facebook from '../../../../assets/dashboard/icons/facebook-gray.svg'
import instagram from '../../../../assets/dashboard/icons/instagram-grey.svg'
import twitter from '../../../../assets/dashboard/icons/twitter-grey.svg'

const NewCreator = () => {
    return (
        <S.Container>
            <S.ImgWrapper>
            <img src={trainer} alt="creator"/>
            </S.ImgWrapper>
            <S.RightSection>
                <S.TitleWrapper>
                <Label
                    fontFamily="Lato"
                    fontWeight='700'
                    fontSize='1.8rem'
                    lineHeight='2.2rem'
                    color={mainTheme.colors.mainBlack}

                >
                    Lucy Beckham
                </Label>
                <Label
                    fontFamily="Lato"
                    fontWeight='700'
                    fontSize='1rem'
                    lineHeight='1.2rem'
                    color={mainTheme.colors.mainBlack}

                >
                    Personal trainer
                </Label>
                </S.TitleWrapper>
                <S.Description>
                <Label
                    fontFamily="Lato"
                    fontWeight='500'
                    fontSize='0.9rem'
                    lineHeight='1'
                    color={mainTheme.colors.mainBlack}

                >
                    Lucy has been involved in helping others train in the gym for ten years. She helped achieve the goals set by her charges and now she wants to share her knowledge with Foodie users.
                </Label>
                </S.Description>
                <S.IconWrapper>
                <S.IconContainer>
                <S.Icon>
                    <Label
                        fontFamily='Lato'
                        fontSize='0.9rem'
                        fontWeight='500'
                        lineHeight='1.1rem'
                        textAlign='center'
                        color={mainTheme.colors.mainBlack}
                    >
                        Youtube
                    </Label>
                </S.Icon>
                    <S.Icon>
                        <Label
                            fontFamily='Lato'
                            fontSize='0.9rem'
                            fontWeight='500'
                            lineHeight='1.1rem'
                            textAlign='center'
                            color={mainTheme.colors.mainBlack}
                        >Fittnes
                        </Label>
                    </S.Icon>
                    <S.Icon>
                        <Label
                            fontFamily='Lato'
                            fontSize='0.9rem'
                            fontWeight='500'
                            lineHeight='1.1rem'
                            textAlign='center'
                            color={mainTheme.colors.mainBlack}
                        >
                            Coach
                        </Label>
                    </S.Icon>
                </S.IconContainer>
                <S.IconContainer>
                <S.ImageContainer>
                    <img src={instagram} alt=""/>
                </S.ImageContainer>
                <S.ImageContainer>
                <img src={facebook} alt=""/>
                </S.ImageContainer>
                <S.ImageContainer>
                    <img src={twitter} alt=""/>
                </S.ImageContainer>
                    <S.Button>
                        <Label
                            fontFamily='Lato'
                            fontWeight='700'
                            fontSize='1rem'
                            lineHeight='1.2rem'
                            color={mainTheme.colors.mainBlack}
                        >
                            See profile
                        </Label>
                    </S.Button>

                </S.IconContainer>
                </S.IconWrapper>
            </S.RightSection>
        </S.Container>
    );
};

export default NewCreator;