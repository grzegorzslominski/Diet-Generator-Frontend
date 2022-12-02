import React from "react";
import * as S from "./AnswerQuestions.style"
import { mainTheme } from "../../../../themes/mainTheme";
import Label from "../../../../components/UI/Label/Label";
import Questions from "./Questions/Questions";

const AnswerQuestions = () => {
  return (
    <S.Container>
      <Label
        fontSize='1.5rem'
        fontFamily='Lato'
        fontWeight='700'
        lineHeight='2.3rem'
        color={mainTheme.colors.mainBlack}
      >
        Step 3: Answer questions
      </Label>
      <Questions/>
    </S.Container>
  );
};

export default AnswerQuestions;