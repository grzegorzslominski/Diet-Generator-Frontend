import { UploadItem } from "./../User/User";
import { Ingredient } from "./Recipe";

export type RecipeForm = {
    id?: number;
    timestamp?: number;
    calories: number;
    title: string;
    verifed: boolean;
    readyInMinutes: number;
    servings: number;
    instructions?: string;
    glutenFree: boolean;
    dairyFree: boolean;
    vegetarian: boolean;
    vegan: boolean;
    veryHealthy: boolean;
    verified: boolean;
    kcal: number;
    fat: number;
    protein: number;
    carbs: number;
    created_at: number;
    ingredients: Ingredient[];
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

type RecipeInputs = {
    [key: string]: string;
};

export const RECIPE_INPUT_PRESET: RecipeInputs = {
    servings: "Servings",
    readyInMinutes: "Time",
    calories: "Calories",
    fat: "Fat",
    proteins: "proteins",
    carbs: "carbs",
};
