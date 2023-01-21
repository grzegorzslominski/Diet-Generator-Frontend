import { AxiosError } from "axios";
import { ENDPOINTS_MEALS } from "./../../navigation/endpoints";
import axiosFoodieInstance from "../../axios/axiosFoodieInstance";
import { ENDPOINTS_PROFILE } from "../../navigation/endpoints";
import { UserExtras } from "../User/ExpandedUser";
import { UserStats } from "../User/UserStatistics";

export type UserBasicProfile = {
    userStats: UserStats;
    userPosts?: Post[];
    userRecipes?: UserRecipe[];
    userExtras?: UserExtras | null;
    excludedProductsList?: ExcludedProducts;
};

export type Post = {
    id: number;
    timestamp: number;
    title: string;
    description: string;
    author: PostAuthor;
    likes: PostLike[];
    postComments: [];
    postImagePath: string | null;
    userImagePath: string | null;
};

export type PostLike = {
    id: number;
    timestamp: number;
    user: PostAuthor;
};

export type PostAuthor = {
    id: number;
    firstName: string | null;
    lastName: string | null;
};

export type UserRecipe = RecipeNutriens & {
    id: number;
    timestamp: number;
    calories: number;
    imagePath: string | null;
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
    [key: string]: number | string | boolean | null | undefined;
};

export type ExcludedProducts = {
    listOfExcludedProducts: Product[];
};

export type Product = {
    id: number;
    name: string;
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

export type RecipeNutriens = {
    fat: number;
    protein: number;
    carbs: number;
    [key: string]: number;
};

export const RECIPE_TYPE_PRESET = {
    vegetarian: "Vegetarian",
    vegan: "Vegan",
    glutenFree: "Gluten free",
    dairyFree: "Dairy free",
    veryHealthy: "Healthy",
};

export const getUserBasicProfile = async () => {
    return await axiosFoodieInstance
        .get<UserBasicProfile>(`${ENDPOINTS_PROFILE.userProfile}`)
        .then((response) => {
            if (response.status === 200) {
                return response.data;
            }
        });
};

export const getProducts = async () => {
    return await axiosFoodieInstance.get<Product[]>(ENDPOINTS_MEALS.products).then((response) => {
        if (response.status === 200) {
            return response.data;
        }
    });
};
