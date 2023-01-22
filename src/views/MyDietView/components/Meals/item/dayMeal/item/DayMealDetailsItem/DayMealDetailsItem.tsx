import React, { useState } from "react";
import * as S from "./DayMealDetailsItem.style";
import { mealDayI, propObject } from "../../../../const/mealItemData";
import Label from "../../../../../../../../components/UI/Label/Label";
import { mainTheme } from "../../../../../../../../themes/mainTheme";
import DayMealTable from "./DayMealTable/DayMealTable";
import { ReactComponent as Like } from "../../../../../../../../assets/icons/likeIcon.svg";
import { ReactComponent as Dislike } from "../../../../../../../../assets/icons/dislikeIcon.svg";
import { ReactComponent as Heart } from "../../../../../../../../assets/icons/heart.svg";
import ActionButton from "../../../../../../../../components/UI/ActionButton/ActionButton";
import { IngredientsI, RecipeIngredientsI } from "../../../../const/meal";
import { prepareRecipeInstrucion } from "../../../../../../../../helpers/textParse";

// interface props {
//     close: () => void;
//     name: string;
//     image: string;
//     category: string;
//     calories: string;
//     proteins: string;
//     carbs: string;
//     fat: string;
//     basicIngredients: string[];
//     properties?: propObject[];
// }

type prop = {
    close: () => void
}

type prop2 = {
    id: number;
    title: string;
    servings: number;
    readyInMinutes: number;
    imagePath: string;
    instructions: string;
    vegetarian: boolean;
    vegan: boolean;
    glutenFree: boolean;
    dairyFree: boolean;
    veryHealthy: boolean;
    verified: boolean;
    calories: number;
    carbs: number;
    fat: number;
    protein: number;
    recipesIngredients: IngredientsI[]
    close: () => void

}

type prop3 = prop & prop2
const DayMealDetailsItem = (props: prop2) => {
    return (
        <S.Container>
            <S.Header>
                <S.ImageContainer>
                    <img src={props.imagePath} alt='' />
                </S.ImageContainer>
                <Label
                    fontFamily='Montserrat'
                    fontWeight='600'
                    fontSize='1rem'
                    lineHeight='1rem'
                    textAlign='center'
                    color={mainTheme.colors.mainBlack}
                >
                    {props.title}
                </Label>
            </S.Header>
            <S.Table>
                <S.TableItem>
                            <DayMealTable
                                vegetarian={props.vegetarian}
                                vegan={props.vegan}
                                veryHealthy={props.veryHealthy}
                                glutenFree={props.glutenFree}
                                dairyFre={props.dairyFree}
                            />
                </S.TableItem>
            </S.Table>
            <Label
                fontFamily='Montserrat'
                fontWeight='600'
                fontSize=' 0.8rem'
                lineHeight='1rem'
                color={mainTheme.colors.mainBlack}
            >
                Ready in minutes: {props.readyInMinutes}
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
                    {props.recipesIngredients.map((item,index: number) => {
                        return (
                            <S.Item key={index}>
                                <Label
                                    fontFamily='Montserrat'
                                    fontWeight='600'
                                    fontSize=' 0.8rem'
                                    lineHeight='1rem'
                                    color={mainTheme.colors.mainBlack}
                                >
                                    {item.name}
                                </Label>
                            </S.Item>
                        );
                    })}
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
                        Proteins: {props.protein}
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
                    {prepareRecipeInstrucion(props.instructions)}
                </Label>
            </S.Description>
            <S.ClosingContainer>
                <ActionButton type='remove' onClick={props.close} />
            </S.ClosingContainer>
        </S.Container>
    );
};

export default DayMealDetailsItem;
