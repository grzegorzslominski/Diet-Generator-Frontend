import React from "react";
import * as S from "./Preferences.style"
import { mainTheme } from "../../../../themes/mainTheme";
import Label from "../../../../components/UI/Label/Label";
import PreferencesItems from "./PreferencesItems/PreferencesItems";

const Preferences = () => {
  return (
    <S.Container>
      <Label
        fontSize='1.5rem'
        fontFamily='Lato'
        fontWeight='700'
        lineHeight='2.3rem'
        color={mainTheme.colors.mainBlack}
      >
        Step 2: Preferences
      </Label>
      <PreferencesItems/>

    </S.Container>
  );
};

export default Preferences;