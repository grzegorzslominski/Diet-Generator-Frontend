import axiosFoodieInstance from "../../../../../axios/axiosFoodieInstance";

export interface MealI {
  id: number;
  daysForWeekDiet: DaysForWeekDietI[]
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
  recipesForToday: RecipeIngredientsI[]
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
  recipesIngredients: IngredientsI[]
}

export interface IngredientsI {
  id: number;
  name: string;
  amount: number;
  unit: string;
}

export const getDiet = async () => {
  return await axiosFoodieInstance
    .get<MealI>(`/diet`)
    .then((response) => {
      if(response.status === 200)
        return response.data
    })
}