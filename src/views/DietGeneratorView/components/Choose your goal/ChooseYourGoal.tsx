import React from "react";
import * as S from "./ChooseYourGoal.style"
import { mainTheme } from "../../../../themes/mainTheme";
import Label from "../../../../components/UI/Label/Label";
import Goal from "./Goals/Goal";

const ChooseYourGoal = () => {
  return (
    <S.Container>
      <Label
        fontSize='1.5rem'
        fontFamily='Lato'
        fontWeight='700'
        lineHeight='2.3rem'
        color={mainTheme.colors.mainBlack}
      >
        Step 1: Choose your goal
      </Label>
      <Goal/>
    </S.Container>
  );
};

export default ChooseYourGoal;