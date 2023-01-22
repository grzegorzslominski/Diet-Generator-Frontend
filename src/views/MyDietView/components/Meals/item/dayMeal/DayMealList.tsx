import React from "react";
import * as S from "./DayMealList.style";
import { mealDayI, mealItemI } from "../../const/mealItemData";
import DayMealItem from "./item/DayMealItem";
import { RecipeIngredientsI } from "../../const/meal";

// interface props {
//     mealDays: mealDayI[];
//     date: string;
//     day: string;
//     meals: string[];
//     kcal: string;
//     fat: string;
//     carbs: string;
//     proteins: string;
// }

interface props {
    recipeIngredients: RecipeIngredientsI[];
}

const DayMealList = (props: props) => {
    return (
        <S.Container>
            {props.recipeIngredients.map((item: RecipeIngredientsI, index: number) => {
                return (
                    <DayMealItem
                        key={index}
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
                     recipesIngredients={item.recipesIngredients}/>
                );
            })}
        </S.Container>
    );
};

export default DayMealList;
