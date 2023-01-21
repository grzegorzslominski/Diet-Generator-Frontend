import axiosFoodieInstance from "../../axios/axiosFoodieInstance";
import { ENDPOINTS_MEALS } from "../../navigation/endpoints";
import { User } from "../User/User";

export type NewMeal = {
    mealName: string;
    servings: number;
    readyInMinutes: number;
    image: string;
    instructions: string;
    vegetarian: boolean;
    vegan: boolean;
    glutenFree: boolean;
    veryHealthy: boolean;
    calories: string;
    fat: string;
    protein: string;
    carbs: string;
    ingredients: NewMealIngredient[];
};

export const UNITS: string[] = ["g", "ml"];

export type NewMealIngredient = {
    name: string;
    amount: number;
    unit: string;
    [key: string]: number | string;
};

export type UserComment = {
    comment: string;
};

export type NewPost = {
    title: string;
    description: string;
    image: string;
};

export type UserNewMeal = {
    title: string;
    servings: number;
    readyInMinutes: number;
    imagePath: string;
    instructions: string;
    vegetarian: boolean;
    vegan: boolean;
    glutenFree: boolean;
    veryHealthy: boolean;
    calories: number;
    fat: number;
    proteins: number;
    carbs: number;
    ingredients: IngredientType[];
    [key: string]: string | number | boolean | IngredientType[];
};

export type UserNewMealValidation = {
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
}

export const USER_MEAL_VALIDATION_DATA: UserNewMealValidation = {
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
}

export type Unit = "ml" | "g";

export const USER_PROFILE_NEW_MEAL: UserNewMeal = {
    title: "",
    servings: 0,
    readyInMinutes: 0,
    imagePath: "",
    instructions: "",
    vegetarian: false,
    vegan: false,
    glutenFree: false,
    veryHealthy: false,
    dairyFree: false,
    calories: 0,
    fat: 0,
    proteins: 0,
    carbs: 0,
    ingredients: [],
};

// export const BASIC_NEW_INGREDIENT: IngredientType = {
//     id: 1,
//     name: "",
//     amount: 0,
//     unit: "ml",
// };

export type IngredientType = {
    name: string;
    amount: number;
    unit: Unit;
    [key: string]: string | number | Unit ;

};

export const getDietProducts = async () => {
    return await axiosFoodieInstance
        .get<IngredientType[]>(ENDPOINTS_MEALS.products)
        .then((response) => {
            if (response.status === 200 || response.status === 201) {
                return response.data;
            }
        });
};