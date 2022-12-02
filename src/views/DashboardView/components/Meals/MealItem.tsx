import React from "react";
import * as S from "./MealItem.style";
import Label from "../../../../components/UI/Label/Label";
import { ReactComponent as Heart } from "../../../../assets/icons/heart.svg";
import { mainTheme } from "../../../../themes/mainTheme";
import PieChart from "./const/PieChart";
import arrow from "../../../../assets/icons/arrow.svg";
import MealAuthor from "./MealAuthor";

interface props {
    name: string;
    image: string;
    basicIngredients: string[];
    rating: number;
    kcal: number;
    c: string;
    p: string;
    f: string;
    display?: boolean;
}
const MealItem = (props: props) => {
    return (
        <S.Container>
            <S.TopSection>
                <Heart />
                <img src={props.image} alt='' />
                {!props.display ? (
                    <S.Border>
                        <Label
                            textAlign='center'
                            fontFamily='Montserrat'
                            fontWeight='500'
                            fontSize='1rem'
                            lineHeight='1rem'
                            color='white'
                        >
                            {props.rating}
                        </Label>
                    </S.Border>
                ) : (
                    <S.NewBorder>
                        <Label
                            fontFamily='Montserrat'
                            fontWeight='700'
                            fontSize='1.1rem'
                            lineHeight='1.3rem'
                            textAlign='center'
                            color='white'
                        >
                            NEW
                        </Label>
                    </S.NewBorder>
                )}
            </S.TopSection>
            <S.TitleContainer>
                <Label
                    fontFamily='Montserrat'
                    fontWeight='600'
                    fontSize='1.4rem'
                    textAlign='center'
                    color={mainTheme.colors.mainBlack}
                >
                    {props.name}
                </Label>
            </S.TitleContainer>

            {!props.display ? (
                <S.MiddleSection>
                    <Label fontFamily='Monserrat' fontWeight='600' lineHeight='1rem' color='white'>
                        Basic ingredients
                    </Label>
                    <S.Content>
                        {props.basicIngredients.map((item) => {
                            return (
                                <S.ContentItem key={item}>
                                    <Label
                                        fontFamily='Monserrat'
                                        fontWeight='500'
                                        fontSize='0.75rem'
                                        lineHeight='0.9rem'
                                        color='white'
                                    >
                                        {item}
                                    </Label>
                                </S.ContentItem>
                            );
                        })}
                    </S.Content>
                </S.MiddleSection>
            ) : (
                <S.TextContent>
                    <Label
                        fontFamily='Montserrat'
                        fontWeight='400'
                        fontSize='0.6rem'
                        textAlign='center'
                        color='white'
                        lineHeight='1px'
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius
                        lorem eget nisi bibendum, non consequat est ullamcorper. Ut in volutpat sem,
                        ut ultricies augue.
                    </Label>
                </S.TextContent>
            )}
            <S.BottomSection>
                <S.BottomItemContainer>
                    <S.BottomSingleItem>
                        <Label
                            fontFamily='Montserrat'
                            fontWeight='500'
                            fontSize='1.1rem'
                            lineHeight='1.4rem'
                            color='#363635'
                        >
                            {"Kcal: "}
                        </Label>
                        <Label
                            fontFamily='Montserrat'
                            fontWeight='500'
                            fontSize='1.1rem'
                            lineHeight='1.4rem'
                            color='#E6CB6E'
                        >
                            {props.kcal}
                        </Label>
                    </S.BottomSingleItem>
                    <S.BottomSingleItem>
                        <Label
                            fontFamily='Montserrat'
                            fontWeight='500'
                            fontSize='0.8rem'
                            lineHeight='1.4rem'
                            color='#363635'
                        >
                            {"C: "}
                        </Label>
                        <Label
                            fontFamily='Montserrat'
                            fontWeight='500'
                            fontSize='0.8rem'
                            lineHeight='1.4rem'
                            color='#E6CB6E'
                        >
                            {props.c}
                        </Label>
                    </S.BottomSingleItem>
                    <S.BottomSingleItem>
                        <Label
                            fontFamily='Montserrat'
                            fontWeight='500'
                            fontSize='0.8rem'
                            lineHeight='1.4rem'
                            color='#363635'
                        >
                            {"P:"}
                        </Label>
                        <Label
                            fontFamily='Montserrat'
                            fontWeight='500'
                            fontSize='0.8rem'
                            lineHeight='1.4rem'
                            color='#E6CB6E;'
                        >
                            {props.p}
                        </Label>
                    </S.BottomSingleItem>
                    <S.BottomSingleItem>
                        <Label
                            fontFamily='Montserrat'
                            fontWeight='500'
                            fontSize='0.8rem'
                            lineHeight='1.4rem'
                            color='#363635'
                        >
                            {"F: "}
                        </Label>
                        <Label
                            fontFamily='Montserrat'
                            fontWeight='500'
                            fontSize='0.8rem'
                            lineHeight='1.4rem'
                            color='#E6CB6E;'
                        >
                            {props.f}
                        </Label>
                    </S.BottomSingleItem>
                </S.BottomItemContainer>
                <PieChart />
                {!props.display ? (
                    <S.Footer>
                        <Label
                            fontFamily='Montserrat'
                            fontWeight='600'
                            fontSize='0.8rem'
                            textAlign='center'
                            color={mainTheme.colors.mainBlack}
                        >
                            Details
                        </Label>
                        <img src={arrow} alt='' />
                    </S.Footer>
                ) : null}
            </S.BottomSection>
            {props.display ? <MealAuthor /> : null}
        </S.Container>
    );
};

export default MealItem;
