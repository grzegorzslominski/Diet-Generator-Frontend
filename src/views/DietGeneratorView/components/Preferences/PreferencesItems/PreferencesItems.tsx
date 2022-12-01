import React from "react";
import * as S from "./PreferencesItems.style"
import {data} from "./const/data"
import Label from "../../../../../components/UI/Label/Label";
import downArrow from "../../../../../assets/MyDiet/icons/downArrow.svg"

const PreferencesItems = () => {
  return (
    <S.Wrapper>
      <S.Container>
        {
          data.map((item) => {
            return <S.Content key={item.id}>
              <S.Border>
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