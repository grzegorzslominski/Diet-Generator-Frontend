import React from "react";
import Label from "../../../../components/UI/Label/Label";
import { mainTheme } from "../../../../themes/mainTheme";

import { GeneratorHandleChangeI } from "../../../../models/Generator/GeneratorI";
import Excercise from "./Excercise/Excercise";

import * as S from "./ChooseExcercise.style";

const ChooseExcercise = ({handleChange}: GeneratorHandleChangeI) => {
  return (
    <S.Container>
      <Label
        fontSize='1.5rem'
        fontFamily='Lato'
        fontWeight='700'
        lineHeight='2.3rem'
        color={mainTheme.colors.mainBlack}
      >
        Step 2: How much you exercise?
      </Label>
      <Excercise handleChange={handleChange}/>
    </S.Container>
  );
};

export default ChooseExcercise;