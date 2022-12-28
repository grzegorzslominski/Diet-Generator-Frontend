import React from "react";
import * as S from "./MealItemList.style";
import MealItem from "./item/MealItem";
import {mealItemI, mealDayI,MEALItem} from "./const/MEALItem";



const MealItemList = () => {
    return (
        <S.Container>
            {MEALItem.map((item: mealItemI) => {
                return (
                    <MealItem
                        key={item.day}
                        carbs={item.carbs}
                        date={item.date}
                        day={item.day}
                        fat={item.fat}
                        kcal={item.kcal}
                        meals={item.meals}
                        proteins={item.proteins}
                        mealDays={item.mealDays}
                    />
                );
            })}
        </S.Container>
    );
};

export default MealItemList;
