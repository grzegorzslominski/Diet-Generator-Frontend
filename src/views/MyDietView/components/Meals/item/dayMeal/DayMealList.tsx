import React from "react";
import * as S from "./DayMealList.style";
import DayMealItem from "./item/DayMealItem";
import { RecipeIngredientsI } from "../../const/meal";



interface props {
    recipeIngredients: RecipeIngredientsI[];
    index: number
    loggedUserID: number;
}

const DayMealList = (props: props) => {
    return (
        <S.Container>
            {props.recipeIngredients.map((item: RecipeIngredientsI, index2: number) => {
                return (
                    <DayMealItem
                        key={index2}
                        imagePath={item.imagePath}
                        title={item.title}
                        calories={item.calories}
                        protein={item.protein}
                        carbs={item.carbs}
                        fat={item.fat}
                        dairyFree={item.dairyFree}
                        vegan={item.vegan}
                        vegetarian={item.vegetarian}
                        glutenFree={item.glutenFree}
                        veryHealthy={item.veryHealthy}
                        verified={item.verified}
                        id={item.id}
                        instructions={item.instructions}
                        readyInMinutes={item.readyInMinutes}
                        servings={item.servings}
                        recipesIngredients={item.recipesIngredients}
                        recipeLikes={item.recipeLikes}
                        loggedUserID={props.loggedUserID}

                    />
                );
            })}
        </S.Container>
    );
};

export default DayMealList;
