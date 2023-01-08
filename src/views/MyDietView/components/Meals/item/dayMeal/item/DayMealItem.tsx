import React, { useState } from "react";
import * as S from "./DayMealItem.style";
import { mealDayI } from "../../../const/mealItemData";
import Chicken from "../../../../../../../assets/dashboard/images/chicken.png";
import Label from "../../../../../../../components/UI/Label/Label";
import { mainTheme } from "../../../../../../../themes/mainTheme";
import PieChart from "./chart/PieChart";
import { ReactComponent as Heart } from "../../../../../../../assets/icons/blackHeart.svg";
import { ReactComponent as Info } from "../../../../../../../assets/icons/infoIcon.svg";
import { ReactComponent as Like } from "../../../../../../../assets/icons/likeIcon.svg";
import { ReactComponent as Dislike } from "../../../../../../../assets/icons/dislikeIcon.svg";
import ModalPortal from "../../../../../../../components/UI/ModalPortal/ModalPortal";
import DayMealDetailsItem from "./DayMealDetailsItem/DayMealDetailsItem";

const DayMealItem = (props: mealDayI) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleIsOpen = () => setIsOpen((current) => !current);
    return (
        <S.Container>
            <S.Content>
                <img src={props.image} alt='image' />
                <S.SecondItem>
                    <S.LabelsContainer>
                        <Label
                            fontFamily='Montserrat'
                            fontWeight='600'
                            fontSize='1.25rem'
                            lineHeight='1.5rem'
                            color={mainTheme.colors.mainBlack}
                        >
                            {props.name}
                        </Label>
                        <Label
                            fontFamily='Montserrat'
                            fontWeight='500'
                            fontSize='0.5rem'
                            lineHeight='0.6rem'
                            color='white'
                        >
                            {props.category}
                        </Label>
                    </S.LabelsContainer>
                    <S.SecondItemsContent>
                        <S.SecondSingleItem>
                            <Label
                                fontFamily='Montserrat'
                                fontWeight='600'
                                lineHeight='0.75rem'
                                textAlign='center'
                                fontSize='0.7rem'
                                color={mainTheme.colors.mainBlack}
                            >
                                Calories
                            </Label>
                            <Label
                                fontFamily='Montserrat'
                                fontWeight='600'
                                fontSize='0.6rem'
                                lineHeight='1rem'
                                textAlign='center'
                                color={mainTheme.colors.mainBlack}
                            >
                                {props.calories}
                            </Label>
                            <S.FooterCalories />
                        </S.SecondSingleItem>
                        <S.SecondSingleItem>
                            <Label
                                fontFamily='Montserrat'
                                fontWeight='600'
                                lineHeight='0.75rem'
                                textAlign='center'
                                fontSize='0.7rem'
                                color={mainTheme.colors.mainBlack}
                            >
                                Proteins
                            </Label>
                            <Label
                                fontFamily='Montserrat'
                                fontWeight='600'
                                fontSize='0.6rem'
                                lineHeight='1rem'
                                textAlign='center'
                                color={mainTheme.colors.mainBlack}
                            >
                                {props.proteins}
                            </Label>
                            <S.FooterProteins />
                        </S.SecondSingleItem>
                        <S.SecondSingleItem>
                            <Label
                                fontFamily='Montserrat'
                                fontWeight='600'
                                lineHeight='0.75rem'
                                textAlign='center'
                                fontSize='0.7rem'
                                color={mainTheme.colors.mainBlack}
                            >
                                Carbs
                            </Label>
                            <Label
                                fontFamily='Montserrat'
                                fontWeight='600'
                                fontSize='0.6rem'
                                lineHeight='1rem'
                                textAlign='center'
                                color={mainTheme.colors.mainBlack}
                            >
                                {props.carbs}
                            </Label>
                            <S.FooterCarbs />
                        </S.SecondSingleItem>
                        <S.SecondSingleItem>
                            <Label
                                fontFamily='Montserrat'
                                fontWeight='600'
                                lineHeight='0.75rem'
                                textAlign='center'
                                fontSize='0.7rem'
                                color={mainTheme.colors.mainBlack}
                            >
                                Fat
                            </Label>
                            <Label
                                fontFamily='Montserrat'
                                fontWeight='600'
                                fontSize='0.6rem'
                                lineHeight='1rem'
                                textAlign='center'
                                color={mainTheme.colors.mainBlack}
                            >
                                {props.fat}
                            </Label>
                            <S.FooterFat />
                        </S.SecondSingleItem>
                    </S.SecondItemsContent>
                </S.SecondItem>
                <S.ThirdAndForthContent>
                    <PieChart />
                    <S.ThirdItemContainer>
                        <Label
                            fontFamily='Montserrat'
                            fontWeight='600'
                            fontSize='0.7rem'
                            lineHeight='1rem'
                            color='white'
                        >
                            Basic ingredients:
                        </Label>
                        <S.ThirdItemUl>
                            {props.basicIngredients.map((item) => {
                                return (
                                    <S.ThirdItemLi key={item}>
                                        <Label
                                            fontFamily='Montserrat'
                                            fontWeight='500'
                                            fontSize='0.7rem'
                                            lineHeight='0.9rem'
                                            color='white'
                                        >
                                            {item}
                                        </Label>
                                    </S.ThirdItemLi>
                                );
                            })}
                        </S.ThirdItemUl>
                    </S.ThirdItemContainer>
                </S.ThirdAndForthContent>
                <S.FourthContainer>
                    <S.FourthContainerItem>
                        <Heart />
                        <Info onClick={handleIsOpen} />
                    </S.FourthContainerItem>
                    <S.FourthContainerItem>
                        <Like />
                        <Dislike />
                    </S.FourthContainerItem>
                </S.FourthContainer>
            </S.Content>
            {isOpen ? (
                <ModalPortal close={handleIsOpen}>
                    <DayMealDetailsItem
                        close={() => setIsOpen(false)}
                        key={props.name}
                        image={props.image}
                        name={props.name}
                        category={props.category}
                        calories={props.calories}
                        proteins={props.proteins}
                        carbs={props.proteins}
                        fat={props.fat}
                        basicIngredients={props.basicIngredients}
                        properties={props.properties}
                    />
                </ModalPortal>
            ) : null}
        </S.Container>
    );
};

export default DayMealItem;
