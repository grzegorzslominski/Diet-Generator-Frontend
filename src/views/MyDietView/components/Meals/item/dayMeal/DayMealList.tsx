import React from "react";
import * as S from "./DayMealList.style";
import { mealDayI, mealItemI } from "../../const/mealItemData";
import DayMealItem from "./item/DayMealItem";

interface props {
    mealDays: mealDayI[];
    date: string;
    day: string;
    meals: string[];
    kcal: string;
    fat: string;
    carbs: string;
    proteins: string;
}

const DayMealList = (props: props) => {
    return (
        <S.Container>
            {props.mealDays.map((item: mealDayI) => {
                return (
                    <DayMealItem
                        key={item.name}
                        image={item.image}
                        name={item.name}
                        category={item.category}
                        calories={item.calories}
                        proteins={item.proteins}
                        carbs={item.proteins}
                        fat={item.fat}
                        basicIngredients={item.basicIngredients}
                        properties={item.properties}
                    />
                );
            })}
        </S.Container>
    );
};

export default DayMealList;
