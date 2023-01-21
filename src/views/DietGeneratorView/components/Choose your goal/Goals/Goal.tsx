import React, { useState } from "react";
import * as S from "./Goal.style";
import { data, GoalI } from "./const/data";
import Label from "../../../../../components/UI/Label/Label";
import { GeneratorHandleChangeI } from "../../../../../models/Generator/GeneratorI";

const Goal = ({ handleChange }: GeneratorHandleChangeI) => {
    const [selectedGoal, setSelectedGoal] = useState<number | null>(null);
    return (
        <S.Wrapper>
            <S.Container>
                {data.map((item: GoalI, index: number) => {
                    return (
                        <S.Content
                            selected={selectedGoal === index ? true : false}
                            onClick={() => {
                                setSelectedGoal(index);
                                handleChange("goal", item.name);
                            }}
                            key={item.name}
                        >
                            {item.image}
                            <S.Border>
                                <Label
                                    fontFamily='Lato'
                                    fontWeight='600'
                                    fontSize='1rem'
                                    lineHeight='1.5rem'
                                    color='white'
                                    textAlign='center'
                                >
                                    {item.name === 'MUSCLE' ? item.name.toLowerCase() + " gain" : item.name.toLowerCase() + " weight"}
                                </Label>
                            </S.Border>
                        </S.Content>
                    );
                })}
            </S.Container>
        </S.Wrapper>
    );
};

export default Goal;
