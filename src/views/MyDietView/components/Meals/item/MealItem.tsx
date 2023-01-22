import { useState } from "react";

import { mainTheme } from "../../../../../themes/mainTheme";
import pen from "../../../../../assets/MyDiet/icons/pen.svg";
import downArrow from "../../../../../assets/MyDiet/icons/downArrow.svg";

import MyDietChart from "../chart/MyDietChart";
import DayMealList from "./dayMeal/DayMealList";
import Label from "../../../../../components/UI/Label/Label";

import * as S from "./MealItem.style";
import { DaysForWeekDietI } from "../const/meal";
import { parseUnixTime2,parseUnitTimeToDay } from "../../../../AuthViews/helpers/date";

interface props {
    daysForWeekDietI: DaysForWeekDietI;
    timestamp: number
    index: number;
}
const MealItem = (props: props) => {
    const [open, setIsOpen] = useState(false);
    const handleIsOpen = () => setIsOpen((prev) => !prev);

    return (
        <S.Wrapper>
            <S.Container>
                <S.LeftSection>
                    <Label
                        fontFamily='Lato'
                        fontWeight='700'
                        fontSize='1.5rem'
                        lineHeight='1.9rem'
                        textAlign='center'
                        color={mainTheme.colors.mainBlack}
                    >
                        {parseUnixTime2(props.timestamp,props.index)}
                    </Label>
                    <Label
                        fontFamily='Montserrat'
                        fontWeight='500'
                        fontSize='1rem'
                        lineHeight='1.25rem'
                        textAlign='center'
                    >
                        {parseUnitTimeToDay(props.timestamp,props.index)}
                    </Label>

                    <S.Border>
                        <Label
                            fontFamily='Montserrat'
                            fontWeight='600'
                            fontSize='1rem'
                            lineHeight='1.25rem'
                            color='#4E4C75'
                        >
                            Edit day
                        </Label>
                        <img src={pen} alt='pen' />
                    </S.Border>
                </S.LeftSection>
                <S.MiddleSection isOpen={open}>
                    <Label
                        fontFamily='Montserrat'
                        fontWeight='600'
                        fontSize='1rem'
                        lineHeight='1.25rem'
                        textAlign='center'
                        color={mainTheme.colors.mainBlack}
                    >
                        Meals
                    </Label>
                    <S.UlStyled>
                        {props.daysForWeekDietI.recipesForToday && props.daysForWeekDietI.recipesForToday.slice(0,5).map((item) => {
                            return (
                                <S.LiStyled key={item.id}>
                                    <Label
                                        fontFamily='Montserrat'
                                        fontWeight='600'
                                        fontSize='0.5rem'
                                        lineHeight='0.9rem'
                                        textAlign='center'
                                        color={mainTheme.colors.mainBlack}
                                    >
                                        {item.title}
                                    </Label>
                                </S.LiStyled>
                            );
                        })}
                    </S.UlStyled>
                    <img onClick={handleIsOpen} src={downArrow} alt='downArrow' />
                </S.MiddleSection>
                <S.RightSection>
                    <S.LabelContainer>
                        <Label
                            fontFamily='Lato'
                            fontSize='1.25rem'
                            lineHeight='1.5rem'
                            fontWeight='700'
                            color='#4E4C75'
                            textAlign='center'
                        >
                            {props.daysForWeekDietI.todaysCalories}
                        </Label>
                        <S.KcalContainer>
                            <Label
                                fontFamily='Lato'
                                fontSize='1rem'
                                lineHeight='1.2rem'
                                fontWeight='700'
                                color='#232323'
                                textAlign='end'
                            >
                                kcal
                            </Label>
                        </S.KcalContainer>
                    </S.LabelContainer>
                    <MyDietChart
                      fat={props.daysForWeekDietI.todaysFat}
                      carbs={props.daysForWeekDietI.todaysCarbs}
                      proteins={props.daysForWeekDietI.todaysProtein}
                    />
                </S.RightSection>
                {open ? <S.Line /> : null}
            </S.Container>
            {open && props.daysForWeekDietI.recipesForToday ? (
                <DayMealList
                  recipeIngredients={props.daysForWeekDietI.recipesForToday}
                />
            ) : null}
        </S.Wrapper>
    );
};

export default MealItem;
