import React from "react";
import * as S from './HowItsWorking.style'
import {mainTheme} from "../../../../../themes/mainTheme";
import Label from "../../../../../components/UI/Label/Label";
import Survey from '../../../../../assets/homepage/HowItsWorking/survey.svg'
import line1 from '../../../../../assets/homepage/HowItsWorking/line 1.svg'
import Settings from '../../../../../assets/homepage/HowItsWorking/settings.svg'
import Diet from '../../../../../assets/homepage/HowItsWorking/diet.svg'
import Community from '../../../../../assets/homepage/HowItsWorking/community.svg'
import line2 from '../../../../../assets/homepage/HowItsWorking/line 2.svg'
import line3 from '../../../../../assets/homepage/HowItsWorking/line 3.svg'

const HowItsWorking = () => {
    return <S.Container>
        <Label
            color={mainTheme.colors.mainBlack}
            fontSize='2rem'
            fontWeight='600'
            width='55rem'
            textAlign='center'
        >
            {"How it's working"}
        </Label>
        <S.PStyled>
        <Label
            color={mainTheme.colors.mainBlack}
            fontSize='1.5rem'
            fontWeight='400'
            width='55rem'
            textAlign='center'
        >
            In order to create a menu tailored to the user, several things have to be done. A survey with user preferences plays an important role,<br/>
            followed by further processes of generating the diet.<br/>
            The degree of matching the proposed meals increases with the time the application is used by the user.
        </Label>
        </S.PStyled>
        <S.GridContainer>
            <S.GridElement>
            <S.ImageContainer>
                <img src={Survey} alt="survey"/>
            </S.ImageContainer>
                <Label
                    color={mainTheme.colors.mainBlack}
                    fontSize='1.5rem'
                    fontWeight='600'
                    textAlign='center'
                    fontFamily={mainTheme.text.Allan}
                >
                    {"Survey"}
                </Label>
                <ul>
                    <li>determining food <br/> preferences</li>
                    <li>provides data for the AI <br/> model</li>
                    <li>filled out only once</li>
                </ul>
            </S.GridElement>
            <S.LineElement>
            <img src={line1} alt={"line1"}/>
            </S.LineElement>
                <S.GridElement>
                    <S.ImageContainer>
                        <img src={Settings} alt={"settings"}/>
                    </S.ImageContainer>
                    <Label
                        color={mainTheme.colors.mainBlack}
                        fontSize='1.5rem'
                        fontWeight='600'
                        textAlign='center'
                        fontFamily={mainTheme.text.Allan}
                    >
                        {"AI learning"}
                    </Label>
                    <ul>
                        <li>use of survey <br/> information</li>
                        <li>reacts to feedback from <br/> the user</li>
                        <li>it fits the user&apos;s tastes <br/> better over time</li>
                    </ul>
                </S.GridElement>
            <S.LineElement>
            <img src={line2} alt={"line2"}/>
            </S.LineElement>
            <S.GridElement>
                <S.ImageContainer>
                    <img src={Diet} alt={"diet"}/>
                </S.ImageContainer>
                <Label
                    color={mainTheme.colors.mainBlack}
                    fontSize='1.5rem'
                    fontWeight='600'
                    textAlign='center'
                    fontFamily={mainTheme.text.Allan}
                >
                    {"Creating a diet"}
                </Label>
                <ul>
                    <li>creating a diet based on <br/>a meal base</li>
                    <li>taking into account the<br/> preferences transferred<br/>by the AI model</li>
                    <li>fully modifiable by the <br/> user</li>
                </ul>
            </S.GridElement>
            <S.LineElement>
            <img src={line3} alt={"line3"}/>
            </S.LineElement>
            <S.GridElement>
                <S.ImageContainer>
                    <img src={Community} alt={"community"}/>
                </S.ImageContainer>
                <Label
                    color={mainTheme.colors.mainBlack}
                    fontSize='1.5rem'
                    fontWeight='600'
                    textAlign='center'
                    fontFamily={mainTheme.text.Allan}
                >
                    {"User feedback"}
                </Label>
                <ul>
                    <li>determines the level<br/>of user satisfaction</li>
                    <li>sent to the AI model</li>

                </ul>
            </S.GridElement>

        </S.GridContainer>


    </S.Container>

};

export default HowItsWorking;