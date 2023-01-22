import { ENDPOINTS_MEALS, ENDPOINTS_USER } from "./../../navigation/endpoints";
import axiosFoodieInstance from "../../axios/axiosFoodieInstance";

export const UNITS: string[] = ["g", "ml"];

export type UserComment = {
    comment: string;
};

export type Recipe = {
    id?: number;
    timestamp?: number;
    calories: number;
    imagePath?: string | null;
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
    [key: string]: number | string | boolean | Ingredient[] | null | undefined;
};

export type RecipeNutriens = {
    fat: number;
    protein: number;
    carbs: number;
    [key: string]: number;
};

export type Ingredient = {
    id?: number;
    name: string;
    amount: number;
    unit: Unit;
    [key: string]: string | number | Unit | undefined;
};

export type RecipeNutrionsType = "fat" | "protein" | "carbs";
export type RecipeType = "glutenFree" | "dairyFree" | "vegetarian" | "vegan" | "veryHealthy";

export const USER_RECIPE_NUTRIONS: RecipeNutrionsType[] = ["fat", "protein", "carbs"];

export const USER_RECIPE_TYPE: RecipeType[] = [
    "glutenFree",
    "dairyFree",
    "vegetarian",
    "vegan",
    "veryHealthy",
];

type RecipeTypePreset = {
    [key: string]: string;
};

export const RECIPE_TYPE_PRESET: RecipeTypePreset = {
    vegetarian: "Vegetarian",
    vegan: "Vegan",
    glutenFree: "Gluten free",
    dairyFree: "Dairy free",
    veryHealthy: "Healthy",
};

export type Unit = "ml" | "g";

export const getUserRecipes = async (userID: number) => {
    return await axiosFoodieInstance
        .get<Recipe[]>(`${ENDPOINTS_MEALS.userRecipes}/${userID}`)
        .then((response) => {
            if (response.status === 200) {
                return response.data;
            }
        })
        .catch((err) => {
            console.log(err);
        });
};

export const getRecipe = async (recipeID: number) => {
    return await axiosFoodieInstance
        .get<Recipe>(`${ENDPOINTS_MEALS.getRecipe}/${recipeID}`)
        .then((response) => {
            if (response.status === 200) {
                return response.data;
            }
        });
};
