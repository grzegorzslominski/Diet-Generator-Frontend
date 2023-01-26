import { useState } from "react";

import { mainTheme } from "../../../../../themes/mainTheme";

import Label from "../../../../../components/UI/Label/Label";

import { ExccerciseData, GoalI } from "../../Choose your goal/Goals/const/data";
import { GeneratorHandleChangeI } from "../../../../../models/Generator/GeneratorI";

import * as S from "../../Choose your goal/Goals/Goal.style";

const Excercise = ({ handleChange }: GeneratorHandleChangeI) => {
    const [selectedExcercise, setSelectedExcercise] = useState<number | null>(null);
    return (
        <S.Container>
            {ExccerciseData.map((item: GoalI, index: number) => {
                return (
                    <S.GoalItem
                        selected={selectedExcercise === index || false}
                        onClick={() => {
                            setSelectedExcercise(index);
                            handleChange("exercise", item.name);
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
                            {String(item.name + " excercise").toLocaleUpperCase()}
                        </Label>
                    </S.GoalItem>
                );
            })}
        </S.Container>
    );
};

export default Excercise;
