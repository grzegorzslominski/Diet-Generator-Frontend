import axiosFoodieInstance from "../../../../../axios/axiosFoodieInstance";
import { ForumUserI } from "../../../../ForumView/PostsList/const/Posts";

export interface MealI {
    id: number;
    daysForWeekDiet: DaysForWeekDietI[];
    timestamp: number;
}

export interface DaysForWeekDietI {
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
    todaysCalories: number;
    todaysCarbs: number;
    todaysFat: number;
    todaysProtein: number;
    recipesForToday: RecipeIngredientsI[];
}

export interface RecipeIngredientsI {
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
    recipesIngredients: IngredientsI[];
    recipeLikes: LikesI[] | null;
    loggedUserID: number;
}

export interface LikesI {
    id: number;
    timestamp: number;
    user: ForumUserI;
}
export interface IngredientsI {
    id: number;
    name: string;
    amount: number;
    unit: string;
}

export const getDiet = async () => {
    return await axiosFoodieInstance.get<MealI>(`/diet`).then((response) => {
        if (response.status === 200) return response.data;
    });
};
