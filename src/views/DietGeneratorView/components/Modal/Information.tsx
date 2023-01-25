import React from "react";

import * as S from "./Information.style"
import { mainTheme } from "../../../../themes/mainTheme";
import Label from "../../../../components/UI/Label/Label";
import Button from "../../../../components/UI/Button/Button";
import ActionButton from "../../../../components/UI/ActionButton/ActionButton";
import { useNavigate } from "react-router-dom";
import { NAVIGATION } from "../../../../navigation/paths";

interface props {
  close: () => void;
  success?: boolean
}
const Information = ({close, success=false}:props) => {
  const navigate = useNavigate();

  const handleNavigate = () => navigate(`${NAVIGATION.myDiet}`)
  return (
    <S.Container>
      <Label
        fontSize='0.8rem'
        textAlign='center'
        fontWeight='400'
        fontFamily='Lato'
        color={mainTheme.colors.secondaryColor}
      >
        {success ? "Diet was succesfully generated" : "Something went wrong, please try again"}
      </Label>
      <S.ButtonContainer>
        <Button
          onClick={close}
          styleType='primaryEmpty'
          width='10rem'
          borderRadius='15px'
          fontSize='1rem'
        >
          Stay on this page
        </Button>
        {
          success ? <Button
            onClick={handleNavigate}
            styleType='primaryEmpty'
            width='10rem'
            borderRadius='15px'
            fontSize='1rem'
          >
            Navigate to your diet
          </Button> : null
        }

      </S.ButtonContainer>
      <S.ClosingContainer>
      <ActionButton type='remove' onClick={close} />
      </S.ClosingContainer>

    </S.Container>
  );
};

export default Information;