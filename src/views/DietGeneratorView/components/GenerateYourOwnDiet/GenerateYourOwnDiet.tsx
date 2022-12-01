import React from "react";
import * as S from "./GenerateYourOwnDiet.style"
import { mainTheme } from "../../../../themes/mainTheme";
import Label from "../../../../components/UI/Label/Label";

const GenerateYourOwnDiet = () => {
  return (
    <S.Container>
      <Label
        fontSize='1.5rem'
        fontFamily='Lato'
        fontWeight='700'
        lineHeight='2.3rem'
        color={mainTheme.colors.mainBlack}
      >
        Generate your own diet
      </Label>
      <Label
        fontSize='1rem'
        fontWeight='400'
        lineHeight='1.5rem'
        color='#737380'
      >
        Welcome to diet generator page. You can here personalize your diet and also pick your preferences and goals. All you have to do is: <br/>
        - pick your goal <br/>
        - pick items that will be excluded from your diet<br/>
        - answer couple of questions<br/>
        After that just go to my meals page and check the diet that we have prepared for you !
      </Label>
    </S.Container>
  );
};

export default GenerateYourOwnDiet;