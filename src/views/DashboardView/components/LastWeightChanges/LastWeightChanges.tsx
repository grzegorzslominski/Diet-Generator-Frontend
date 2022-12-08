import React from "react";

import * as S from "./LastWeightChanges.style";
import Label from "../../../../components/UI/Label/Label";
import { mainTheme } from "../../../../themes/mainTheme";
import ChartData from "./chart/ChartData";

const LastWeightChanges = () => {
    return (
        <S.Container>
            <ChartData />
            <S.StatisticContainer>
                <S.Labelh1>
                    <Label
                        fontSize='1.5rem'
                        fontFamily='Lato'
                        fontWeight='700'
                        lineHeight='2.4rem'
                        textAlign='center'
                        color={mainTheme.colors.mainBlack}
                    >
                        Statistics
                    </Label>
                </S.Labelh1>
                <S.StatisticWrapper>
                    <Label
                        fontFamily='Lato'
                        fontWeight='700'
                        fontSize='1rem'
                        lineHeight='1.2rem'
                        textAlign='center'
                        color={mainTheme.colors.mainBlack}
                    >
                        weekly weight changes
                    </Label>
                    <S.LabelStyled>
                        <Label
                            fontFamily='Lato'
                            fontWeight='700'
                            fontSize='2rem'
                            lineHeight='2.4rem'
                        >
                            -1.2kg
                        </Label>
                    </S.LabelStyled>
                    <Label
                        fontFamily='Lato'
                        fontWeight='700'
                        fontSize='1rem'
                        lineHeight='1.2rem'
                        textAlign='center'
                        color={mainTheme.colors.mainBlack}
                    >
                        weekly weight changes
                    </Label>

                    <S.LabelStyled>
                        <Label
                            fontFamily='Lato'
                            fontWeight='700'
                            fontSize='2rem'
                            lineHeight='2.4rem'
                        >
                            -3.5kg
                        </Label>
                    </S.LabelStyled>
                    <Label
                        fontFamily='Lato'
                        fontWeight='700'
                        fontSize='1rem'
                        lineHeight='1.2rem'
                        textAlign='center'
                        color={mainTheme.colors.mainBlack}
                    >
                        weekly weight changes
                    </Label>

                    <S.LabelStyled>
                        <Label
                            fontFamily='Lato'
                            fontWeight='700'
                            fontSize='2rem'
                            lineHeight='2.4rem'
                        >
                            -1.2kg
                        </Label>
                    </S.LabelStyled>
                </S.StatisticWrapper>
            </S.StatisticContainer>
        </S.Container>
    );
};

export default LastWeightChanges;
