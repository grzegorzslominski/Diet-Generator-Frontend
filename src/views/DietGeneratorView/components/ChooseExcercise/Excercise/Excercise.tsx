import React, { useState } from "react";
import Label from "../../../../../components/UI/Label/Label";

import { ExccerciseData, GoalI } from "../../Choose your goal/Goals/const/data";
import { GeneratorHandleChangeI } from "../../../../../models/Generator/GeneratorI";

import * as S from "../../Choose your goal/Goals/Goal.style";


const Excercise = ({ handleChange }: GeneratorHandleChangeI) => {
  const [selectedExcercise, setSelectedExcercise] = useState<number | null>(null);
  return (
    <S.Wrapper>
      <S.Container>
        {ExccerciseData.map((item: GoalI, index: number) => {
          return (
            <S.Content
              selected={selectedExcercise === index ? true : false}
              onClick={() => {
                setSelectedExcercise(index);
                handleChange("exercise", item.name);
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
                  {item.name.toLowerCase() + " excercise"}
                </Label>
              </S.Border>
            </S.Content>
          );
        })}
      </S.Container>
    </S.Wrapper>
  );
};

export default Excercise;