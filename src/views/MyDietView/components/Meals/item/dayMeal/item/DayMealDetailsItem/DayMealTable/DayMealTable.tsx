import React from "react";
import { mealDayI } from "../../../../../const/MEALItem";
import * as S from "./DayMealTable.style"
import Label from "../../../../../../../../../components/UI/Label/Label";
import { mainTheme } from "../../../../../../../../../themes/mainTheme";
import CheckMark from "../../../../../../../../../assets/icons/checkMark.svg"
import XIcon from "../../../../../../../../../assets/icons/XIcon.svg"

interface props {
  vegetarian: string;
  glutenFree: string;
  dairyFre: string;
  veryHealthy: string;
  vegan: string;
}
const DayMealTable = (props: props) => {
  return (
    <S.Container>
      <S.Table>
        <S.TableItem isOpen={props.vegetarian === 'true' ? true  : false}>
        <Label
          fontFamily='Montserrat'
          fontWeight='600'
          fontSize='0.8rem'
          lineHeight='1rem'
          color={mainTheme.colors.mainBlack}
        >
          Vegetarian
        </Label>
          {
            props.vegetarian ? <img src={CheckMark} alt="checkMark" /> : <img src={XIcon} alt="XIcon" />
          }
        </S.TableItem>
        <S.TableItem isOpen={props.vegan === 'true' ? true  : false}>
        <Label
          fontFamily='Montserrat'
          fontWeight='600'
          fontSize=' 0.8rem'
          lineHeight='1rem'
          color={mainTheme.colors.mainBlack}
        >
          Vegan
        </Label>
        {
          props.vegan === 'true' ? <img src={CheckMark} alt="checkMark" /> : <img src={XIcon} alt="XIcon" />
        }
        </S.TableItem>
        <S.TableItem isOpen={props.glutenFree === 'true' ? true  : false}>
        <Label
          fontFamily='Montserrat'
          fontWeight='600'
          fontSize=' 0.8rem'
          lineHeight='1rem'
          color={mainTheme.colors.mainBlack}
        >
          Gluten free
        </Label>
        {
          props.glutenFree === 'true' ? <img src={CheckMark} alt="checkMark" /> : <img src={XIcon} alt="XIcon" />
        }
        </S.TableItem>
        <S.TableItem isOpen={props.dairyFre === 'true' ? true  : false}>
        <Label
          fontFamily='Montserrat'
          fontWeight='600'
          fontSize=' 0.8rem'
          lineHeight='1rem'
          color={mainTheme.colors.mainBlack}
        >
          Dairy free
        </Label>
          {
            props.dairyFre === 'true' ? <img src={CheckMark} alt="checkMark" /> : <img src={XIcon} alt="XIcon" />
          }
        </S.TableItem>
        <S.TableItem isOpen={props.veryHealthy === 'true' ? true : false}>
        <Label
          fontFamily='Montserrat'
          fontWeight='600'
          fontSize=' 0.8rem'
          lineHeight='1rem'
          color={mainTheme.colors.mainBlack}
        >
          Healthy
        </Label>
          {
            props.veryHealthy === 'true' ? <img src={CheckMark} alt="checkMark" /> : <img src={XIcon} alt="XIcon" />
          }
        </S.TableItem>
      </S.Table>

    </S.Container>
  );
};

export default DayMealTable;