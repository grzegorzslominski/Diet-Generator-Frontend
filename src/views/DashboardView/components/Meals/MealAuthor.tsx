import React from "react";
import * as S from "./MealAuthor.style";
import Label from "../../../../components/UI/Label/Label";
import { mainTheme } from "../../../../themes/mainTheme";
import trainerAvatar from "../../../../assets/dashboard/images/trainerAvatar.png";
const MealAuthor = () => {
    return (
        <S.Container>
            <S.Author>
                <S.LabelContainer>
                    <Label
                        fontFamily='Montserrat'
                        fontWeight='500'
                        fontSize='0.75rem'
                        lineHeight='0.9rem'
                        textAlign='center'
                    >
                        Author
                    </Label>
                </S.LabelContainer>
                <Label
                    fontFamily='Montserrat'
                    fontWeight='500'
                    fontSize='0.75rem'
                    lineHeight='0.9rem'
                    textAlign='center'
                    color={mainTheme.colors.mainBlack}
                >
                    Lucy Beckham
                </Label>
            </S.Author>
            <S.ImageContainer>
                <img src={trainerAvatar} alt='' />
            </S.ImageContainer>
        </S.Container>
    );
};

export default MealAuthor;
