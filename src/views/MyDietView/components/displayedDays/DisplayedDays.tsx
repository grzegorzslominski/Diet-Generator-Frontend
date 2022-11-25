import React from "react";
import * as S from "./DisplayedDays.style"
import Label from "../../../../components/UI/Label/Label";
import { buttonItems } from "./const/ButtonItems";

const DisplayedDays = () => {
  return (
    <S.Container>
      <Label
        fontFamily='Montserrat'
        fontWeight='600'
        fontSize='1rem'
        lineHeight='1.3rem'
      >
        Displayed days:
      </Label>
      {
        buttonItems.map((item) => {
          return <S.DayButton key={item.name}>
            <Label
              fontFamily='Montserrat'
              fontWeight='600'
              fontSize='0.75rem'
              lineHeight='0.9rem'
            >
              {item.name}
            </Label>
          </S.DayButton>
        })
      }
      <S.Divider/>

    </S.Container>
  );
};

export default DisplayedDays;