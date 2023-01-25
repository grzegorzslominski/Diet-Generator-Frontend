import React from "react";
import * as S from "./MealItemList.style";
import MealItem from "./item/MealItem";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { DaysForWeekDietI, getDiet } from "./const/meal";


type MyDietViewProps = {
    loggedUserID: number;
};
const MealItemList = ({ loggedUserID }: MyDietViewProps) => {
    const {
        data: diet,
        isLoading,
        error
    } = useQuery(["getAllDiet"], () => getDiet());

    return (
        <S.Container>
            {diet &&
                diet.daysForWeekDiet.map((item: DaysForWeekDietI, index: number) => {
                    return (
                        <MealItem
                            key={index}
                            daysForWeekDietI={item}
                            timestamp={diet.timestamp}
                            index={index}
                            loggedUserID={loggedUserID}
                        />
                    );
                })}
        </S.Container>
    );
};

export default MealItemList;
