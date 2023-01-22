import React from "react";
import * as S from "./DayMealTable.style";
import Label from "../../../../../../../../../components/UI/Label/Label";
import { mainTheme } from "../../../../../../../../../themes/mainTheme";
import CheckMark from "../../../../../../../../../assets/icons/checkMark.svg";
import XIcon from "../../../../../../../../../assets/icons/XIcon.svg";

interface props {
    vegetarian: boolean;
    glutenFree: boolean;
    dairyFre: boolean;
    veryHealthy: boolean;
    vegan: boolean;
}
const DayMealTable = (props: props) => {
    return (
        <S.Container>
            <S.Table>
                <S.TableItem isOpen={props.vegetarian}>
                    <Label
                        fontFamily='Montserrat'
                        fontWeight='600'
                        fontSize='0.8rem'
                        lineHeight='1rem'
                        color={mainTheme.colors.mainBlack}
                    >
                        Vegetarian
                    </Label>
                    {props.vegetarian ? (
                        <img src={CheckMark} alt='checkMark' />
                    ) : (
                        <img src={XIcon} alt='XIcon' />
                    )}
                </S.TableItem>
                <S.TableItem isOpen={props.vegan}>
                    <Label
                        fontFamily='Montserrat'
                        fontWeight='600'
                        fontSize=' 0.8rem'
                        lineHeight='1rem'
                        color={mainTheme.colors.mainBlack}
                    >
                        Vegan
                    </Label>
                    {props.vegan ? (
                        <img src={CheckMark} alt='checkMark' />
                    ) : (
                        <img src={XIcon} alt='XIcon' />
                    )}
                </S.TableItem>
                <S.TableItem isOpen={props.glutenFree}>
                    <Label
                        fontFamily='Montserrat'
                        fontWeight='600'
                        fontSize=' 0.8rem'
                        lineHeight='1rem'
                        color={mainTheme.colors.mainBlack}
                    >
                        Gluten free
                    </Label>
                    {props.glutenFree ? (
                        <img src={CheckMark} alt='checkMark' />
                    ) : (
                        <img src={XIcon} alt='XIcon' />
                    )}
                </S.TableItem>
                <S.TableItem isOpen={props.dairyFre}>
                    <Label
                        fontFamily='Montserrat'
                        fontWeight='600'
                        fontSize=' 0.8rem'
                        lineHeight='1rem'
                        color={mainTheme.colors.mainBlack}
                    >
                        Dairy free
                    </Label>
                    {props.dairyFre ? (
                        <img src={CheckMark} alt='checkMark' />
                    ) : (
                        <img src={XIcon} alt='XIcon' />
                    )}
                </S.TableItem>
                <S.TableItem isOpen={props.veryHealthy}>
                    <Label
                        fontFamily='Montserrat'
                        fontWeight='600'
                        fontSize=' 0.8rem'
                        lineHeight='1rem'
                        color={mainTheme.colors.mainBlack}
                    >
                        Healthy
                    </Label>
                    {props.veryHealthy ? (
                        <img src={CheckMark} alt='checkMark' />
                    ) : (
                        <img src={XIcon} alt='XIcon' />
                    )}
                </S.TableItem>
            </S.Table>
        </S.Container>
    );
};

export default DayMealTable;
