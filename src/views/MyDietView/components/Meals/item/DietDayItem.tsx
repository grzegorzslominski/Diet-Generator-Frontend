import { useState } from "react";

import { mainTheme } from "../../../../../themes/mainTheme";
import downArrow from "../../../../../assets/MyDiet/icons/downArrow.svg";

import { parseUnixTime2, parseUnitTimeToDay } from "../../../../AuthViews/helpers/date";

import MyDietChart from "../chart/MyDietChart";
import DayMealList from "./dayMeal/DietDayRecipes";
import Label from "../../../../../components/UI/Label/Label";
import BoxPad from "../../../../../components/UI/BoxPad/BoxPad";

import { PublishedRecipe } from "../../../../../models/User/ExpandedUser";
import { DietDay } from "../const/meal";

import * as S from "./DietDayItem.style";

interface DietDayItemProps {
    dietDay: DietDay;
    timestamp: number;
    index: number;
    userID: number;
}
const DietDayItem = ({ dietDay, timestamp, index, userID }: DietDayItemProps) => {
    const [open, setIsOpen] = useState(false);
    const handleIsOpen = () => setIsOpen((prev) => !prev);

    return (
        <BoxPad padding='0'>
            <S.Container>
                <S.LeftSection>
                    <Label
                        fontFamily='Lato'
                        fontWeight='700'
                        fontSize='20px'
                        lineHeight='1.9rem'
                        textAlign='center'
                        color={mainTheme.colors.mainBlack}
                    >
                        {parseUnixTime2(timestamp, index)}
                    </Label>
                    <Label
                        fontFamily='Montserrat'
                        fontWeight='500'
                        fontSize='1rem'
                        lineHeight='1.25rem'
                        textAlign='center'
                    >
                        {parseUnitTimeToDay(timestamp, index)}
                    </Label>
                </S.LeftSection>
                <S.MiddleSection>
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
                    <S.MealList>
                        {dietDay &&
                            dietDay.recipesForToday.slice(0, 5).map((recipe: PublishedRecipe) => {
                                return (
                                    <li key={recipe.id}>
                                        <Label
                                            fontFamily='Montserrat'
                                            fontWeight='600'
                                            fontSize='12px'
                                            color={mainTheme.colors.mainBlack}
                                            width='80px'
                                        >
                                            {recipe.title}
                                        </Label>
                                    </li>
                                );
                            })}
                    </S.MealList>
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
                            {dietDay.todaysCalories}
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
                                calories
                            </Label>
                        </S.KcalContainer>
                    </S.LabelContainer>
                    <MyDietChart
                        fat={dietDay.todaysFat}
                        carbs={dietDay.todaysCarbs}
                        protein={dietDay.todaysProtein}
                    />
                </S.RightSection>
            </S.Container>
            {open && dietDay.recipesForToday && (
                <DayMealList recipes={dietDay.recipesForToday} userID={userID} />
            )}
            <S.ActionContainer isOpen={open}>
                <img onClick={handleIsOpen} src={downArrow} alt='downArrow' />
            </S.ActionContainer>
        </BoxPad>
    );
};

export default DietDayItem;
