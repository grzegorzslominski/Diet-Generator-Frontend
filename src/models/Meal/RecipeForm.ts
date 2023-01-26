import { UploadItem } from "./../User/User";
import { Ingredient } from "./Recipe";

export type RecipeForm = {
    id?: number;
    calories: number;
    title: string;
    readyInMinutes: number;
    servings: number;
    instructions?: string;
    glutenFree: boolean;
    dairyFree: boolean;
    vegetarian: boolean;
    vegan: boolean;
    veryHealthy: boolean;
    verified: boolean;
    fat: number;
    protein: number;
    carbs: number;
    recipesIngredients: Ingredient[];
    imagePath: UploadItem;
    [key: string]: number | string | boolean | Ingredient[] | UploadItem | null | undefined;
};

export const NEW_RECIPE_DATA: RecipeForm = {
    calories: 0,
    imagePath: { type: "image/png", url: "", file: null },
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
    recipesIngredients: [],
    fat: 0,
    protein: 0,
    carbs: 0,
};

export type RecipeValidation = {
    title: string;
    servings: string;
    readyInMinutes: string;
    instructions: string;
    calories: string;
    fat: string;
    protein: string;
    carbs: string;
    recipesIngredients: string[];
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
    protein: "",
    carbs: "",
    isIngredient: "",
    recipesIngredients: [],
};

type RecipeInputs = {
    [key: string]: string;
};

export const RECIPE_INPUT_PRESET: RecipeInputs = {
    servings: "Servings",
    readyInMinutes: "Time",
    calories: "Calories",
    fat: "Fat",
    protein: "protein",
    carbs: "carbs",
};
