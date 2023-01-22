import React from "react";
import * as S from "./MealItemList.style";
import MealItem from "./item/MealItem";
import { mealItemI, mealDayI, MEALItem } from "./const/mealItemData";
import { useQuery } from "@tanstack/react-query";
import { DaysForWeekDietI, getDiet } from "./const/meal";

const MealItemList = () => {
    const {
        data: diet,
        isLoading,
        error
    } = useQuery(["getAllDiet"], () => getDiet())
    return (
        <S.Container>
            {diet && diet.daysForWeekDiet.map((item: DaysForWeekDietI,index: number) => {
                return (
                    <MealItem
                      key={index}
                     daysForWeekDietI={item}
                     timestamp={diet.timestamp}
                      index={index}
                    />
                );
            })}
        </S.Container>
    );
};

export default MealItemList;
