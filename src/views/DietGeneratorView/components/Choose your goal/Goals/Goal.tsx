import { useState } from "react";

import { data, GoalI } from "./const/data";
import { mainTheme } from "../../../../../themes/mainTheme";

import Label from "../../../../../components/UI/Label/Label";

import { GeneratorHandleChangeI } from "../../../../../models/Generator/GeneratorI";

import * as S from "./Goal.style";

const Goal = ({ handleChange }: GeneratorHandleChangeI) => {
    const [selectedGoal, setSelectedGoal] = useState<number | null>(null);
    return (
        <S.Container>
            {data.map((item: GoalI, index: number) => {
                return (
                    <S.GoalItem
                        selected={selectedGoal === index ? true : false}
                        onClick={() => {
                            setSelectedGoal(index);
                            handleChange("goal", item.name);
                        }}
                        key={item.name}
                    >
                        {item.image}

                        <Label
                            fontFamily='Lato'
                            fontWeight='600'
                            fontSize='12px'
                            lineHeight='20px'
                            color={mainTheme.colors.secondaryColor}
                            textAlign='center'
                        >
                            {item.name === "MUSCLE" ? item.name + " GAIN" : item.name + " WEIGHT"}
                        </Label>
                    </S.GoalItem>
                );
            })}
        </S.Container>
    );
};

export default Goal;
