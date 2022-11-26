import React from "react";
import * as S from "./DayMealList.style";
import { mealDayI } from "../../const/MEALItem";
import DayMealItem from "./item/DayMealItem";

interface props {
    mealDays: mealDayI[];
}

const DayMealList = (props: props) => {
    return (
        <S.Container>
            {props.mealDays.map((item: mealDayI) => {
                return (
                    <DayMealItem
                        key={item.name}
                        name={item.name}
                        category={item.category}
                        calories={item.calories}
                        proteins={item.proteins}
                        carbs={item.proteins}
                        fat={item.fat}
                        basicIngredients={item.basicIngredients}
                    />
                );
            })}
        </S.Container>
    );
};

export default DayMealList;
