import React from "react";
import * as S from "./MyDietView.style"
import NavbarVertical from "../../components/NavbarVertical/NavbarVertical";
import DisplayedDays from "./components/displayedDays/DisplayedDays";
import MealItemList from "./components/Meals/MealItemList";

const MyDietView = () => {
  return (
    <S.Container>
      <NavbarVertical/>
      <DisplayedDays/>
      <MealItemList/>
    </S.Container>
  );
};

export default MyDietView;