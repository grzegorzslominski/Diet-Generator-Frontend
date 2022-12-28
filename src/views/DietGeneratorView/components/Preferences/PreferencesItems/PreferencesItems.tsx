import React, { useState } from "react";
import * as S from "./PreferencesItems.style"
import {data} from "./const/data"
import Label from "../../../../../components/UI/Label/Label";
import downArrow from "../../../../../assets/MyDiet/icons/downArrow.svg"
import { GeneratorHandleChangeI } from "../../../../../models/Generator/GeneratorI";

const PreferencesItems = ({handleChange}: GeneratorHandleChangeI) => {
  const [selectedGoal, setSelectedGoal] = useState<number[]>([]);

  const findElement = (id: number) => {
    const array = selectedGoal
    const index = array.findIndex(idx => idx === id)
    if(index === -1){
      setSelectedGoal(current => [...current,id])
    }else {
      const updatedArray = array.filter(idx => idx !== id)
      setSelectedGoal(updatedArray)
    }
  }

  return (
    <S.Wrapper>
      <S.Container>
        {
          data.map((item,index) => {
            return <S.Content key={item.id} onClick={() => {
              findElement(index)
              handleChange("exclusions",item.searchValue)}}>
              <S.Border>
                {
                  selectedGoal.find(i => i === index) ?
                  <S.Customize selected={!!selectedGoal.find(i => i === index)}>
                      <span/>
                    <span/>
                  </S.Customize> : null
                }
              <Label
                fontFamily='Montserrat'
                fontWeight='600'
                fontSize='0.8rem'
                lineHeight='1.5rem'
                textAlign='center'
                color='white'
              >
                {item.searchValue}
              </Label>
              </S.Border>
            </S.Content>
          })
        }
        <S.ButtonContainer>
          <img src={downArrow} alt="" />
        </S.ButtonContainer>
      </S.Container>
    </S.Wrapper>
  );
};

export default PreferencesItems;