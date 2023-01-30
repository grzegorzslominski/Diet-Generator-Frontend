import { Product } from "./Exclusions";
import { ENDPOINTS_MEALS } from "./../../navigation/endpoints";
import axiosFoodieInstance from "../../axios/axiosFoodieInstance";
import { PostAuthor } from "../Forum/Post";

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
    fat: number;
    protein: number;
    carbs: number;
    user: PostAuthor;
    recipesIngredients: Ingredient[];
    recipeComments?: CommentMeal[] | null;
    [key: string]:
        | number
        | string
        | boolean
        | Ingredient[]
        | null
        | undefined
        | PostAuthor
        | CommentMeal[];
};

export type CommentMeal = {
    id: number;
    content: string;
    timestamp: number;
    user: PostAuthor;
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

export const RECIPE_HEADERS = ["Name", "Amount", "Unit"];

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

type RecipeNutriensPreset = {
    [key: string]: string;
};

export const RECIPE_NUTRIONS_PRESET: RecipeNutriensPreset = {
    fat: "Fat",
    carbs: "Carb",
    protein: "Protein",
};

export const RECIPE_TYPE_PRESET: RecipeTypePreset = {
    vegetarian: "Vegetarian",
    vegan: "Vegan",
    glutenFree: "Gluten free",
    dairyFree: "Dairy free",
    veryHealthy: "Healthy",
};

export type Unit = "ml" | "g";

export type LikeMealStatus = {
    likesCount: number;
    isLiked: boolean;
};

export type ReplaceRecipeInfo = {
    dayDietId: number;
    recipeToReplaceId: number;
    [key: string]: number;
};

export const INIT_REPLACE_RECIPE_INFO: ReplaceRecipeInfo = {
    dayDietId: 0,
    recipeToReplaceId: 0,
};

export const replaceRecipe = async (replaceRecipeInfo: ReplaceRecipeInfo) => {
    return axiosFoodieInstance
        .post(ENDPOINTS_MEALS.replaceMeal, replaceRecipeInfo)
        .then((response) => {
            if (response.status === 200) {
                return response.data;
            }
        })
        .catch((err) => {
            console.log(err);
        });
};

export const sendLikeRecipe = async (recipeID: number) => {
    return axiosFoodieInstance
        .get(`${ENDPOINTS_MEALS.likeRecipe}/${recipeID}`)
        .then((response) => response);
};

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
