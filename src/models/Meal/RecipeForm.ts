import { Recipe } from "./Recipe";

export const NEW_RECIPE_DATA: Recipe = {
    calories: 0,
    imagePath: null,
    title: "",
    verifed: false,
    readyInMinutes: 0,
    servings: 0,
    instructions: "",
    glutenFree: false,
    dairyFree: false,
    vegetarian: false,
    vegan: false,
    veryHealthy: false,
    verified: false,
    created_at: 0,
    ingredients: [],
    fat: 0,
    protein: 0,
    carbs: 0,
    kcal: 0,
};

export type RecipeValidation = {
    title: string;
    servings: string;
    readyInMinutes: string;
    imagePath: string;
    instructions: string;
    calories: string;
    fat: string;
    proteins: string;
    carbs: string;
    ingredients: string[];
    isIngredient: string;
    [key: string]: string | string[];
};

export const RECIPE_VALIDATION_DATA: RecipeValidation = {
    title: "",
    servings: "",
    readyInMinutes: "",
    imagePath: "",
    instructions: "",
    calories: "",
    fat: "",
    proteins: "",
    carbs: "",
    isIngredient: "",
    ingredients: [],
};
