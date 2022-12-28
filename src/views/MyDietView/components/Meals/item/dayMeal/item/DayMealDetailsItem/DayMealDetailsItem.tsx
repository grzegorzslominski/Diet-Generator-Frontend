import React, { useState } from "react";
import * as S from "./DayMealDetailsItem.style"
import { mealDayI, propObject } from "../../../../const/MEALItem";
import Label from "../../../../../../../../components/UI/Label/Label";
import { mainTheme } from "../../../../../../../../themes/mainTheme";
import DayMealTable from "./DayMealTable/DayMealTable";
import {ReactComponent as Like} from "../../../../../../../../assets/icons/likeIcon.svg";
import {ReactComponent as Dislike} from "../../../../../../../../assets/icons/dislikeIcon.svg"
import {ReactComponent as Heart} from "../../../../../../../../assets/icons/heart.svg";
import ActionButton from "../../../../../../../../components/UI/ActionButton/ActionButton";

interface props {
  close: () => void;
  name: string;
  image: string;
  category: string;
  calories: string;
  proteins: string;
  carbs: string;
  fat: string;
  basicIngredients: string[];
  properties?: propObject[];
}
const DayMealDetailsItem = (props: props) => {

  return (
    <S.Container>
      <S.Header>
      <S.ImageContainer>
        <img src={props.image} alt="" />
      </S.ImageContainer>
      <Label
        fontFamily='Montserrat'
        fontWeight='600'
        fontSize='1rem'
        lineHeight='1rem'
        textAlign='center'
        color={mainTheme.colors.mainBlack}
      >
        {props.name}
      </Label>
      <Label
        fontFamily='Montserrat'
        fontWeight='600'
        fontSize='0.5rem'
        lineHeight='1rem'
        color={mainTheme.colors.mainBlack}
      >
        {props.category}
      </Label>
      </S.Header>
      <S.Table>
        <S.TableItem>
          {
            props.properties?.map((item) => {
              return <DayMealTable key={item.dairyFree}
                                   vegetarian={item.vegetarian}
                                   vegan={item.vegan}
                                   veryHealthy={item.veryHealthy}
                                   glutenFree={item.glutenFree}
                                   dairyFre={item.dairyFree}
              />
            })
          }
        </S.TableItem>
      </S.Table>
      <Label
        fontFamily='Montserrat'
        fontWeight='600'
        fontSize=' 0.8rem'
        lineHeight='1rem'
        color={mainTheme.colors.mainBlack}
      >
        Ready in minutes: 30
      </Label>
      <S.Row>
      <Label
        fontFamily='Montserrat'
        fontWeight='600'
        fontSize=' 0.8rem'
        lineHeight='1rem'
        color={mainTheme.colors.mainBlack}
      >
        Ingredients:
      </Label>
        <Label
          fontFamily='Montserrat'
          fontWeight='600'
          fontSize=' 0.8rem'
          lineHeight='1rem'
          color={mainTheme.colors.mainBlack}
        >
          Meal details:
        </Label>
      </S.Row>
      <S.Content>
        <S.Items>
          {
            props.basicIngredients.map((item) => {
              return <S.Item key={item}
              ><Label
                fontFamily='Montserrat'
                fontWeight='600'
                fontSize=' 0.8rem'
                lineHeight='1rem'
                color={mainTheme.colors.mainBlack}
              >{item}</Label></S.Item>
            })
          }
        </S.Items>
        <S.ContentItem>
          <Label
            fontFamily='Montserrat'
            fontWeight='600'
            fontSize=' 0.8rem'
            lineHeight='1rem'
            color={mainTheme.colors.mainBlack}
          >
            calories: {props.calories}
          </Label>
          <Label
            fontFamily='Montserrat'
            fontWeight='600'
            fontSize=' 0.8rem'
            lineHeight='1rem'
            color={mainTheme.colors.mainBlack}
          >
            Fat: {props.fat}
          </Label>
          <Label
            fontFamily='Montserrat'
            fontWeight='600'
            fontSize=' 0.8rem'
            lineHeight='1rem'
            color={mainTheme.colors.mainBlack}
          >
            Carbs: {props.carbs}
          </Label>
          <Label
            fontFamily='Montserrat'
            fontWeight='600'
            fontSize=' 0.8rem'
            lineHeight='1rem'
            color={mainTheme.colors.mainBlack}
          >
            Proteins: {props.proteins}
          </Label>
        </S.ContentItem>
      </S.Content>
      <S.Description>
        <Label
          fontFamily='Montserrat'
          fontWeight='600'
          fontSize=' 0.8rem'
          lineHeight='1rem'
          color={mainTheme.colors.mainBlack}
        >
          Description:
        </Label>
      <Label
        fontFamily='Montserrat'
        fontWeight='600'
        fontSize=' 0.8rem'
        lineHeight='1rem'
        color={mainTheme.colors.mainBlack}
      >
        In a large pan with lid heat olive oil over medium high heat. Add onions and cook for 1 minute. Add garlic and cook until onions are translucent and garlic is fragrant.Add quinoa to pan, stir to combine. Slowly add in broth and bring to a boil.Cover and reduce heat to low, cook for 15 minutes.In the last 2-3 minutes of cooking add in broccolini on top of the quinoa (do not stir) and cover.Uncover and toss broccolini and quinoa together.Season to taste with salt and pepper.Add walnuts and serve hot.
      </Label>
      </S.Description>
      <S.IconTable>
        <Like/>
        <Dislike/>
        <Heart/>

      </S.IconTable>
      <S.ClosingContainer>
      <ActionButton type='remove' onClick={props.close} />
      </S.ClosingContainer>

    </S.Container>
  );
};

export default DayMealDetailsItem;