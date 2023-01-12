import { UNITS } from "./User";

export type BasicUserProfileValidation = {
    firstName: string;
    lastName: string;
    email: string;
    avatar: string;
    details: UserDetailsValidation;
    [key: string]: string | UserDetailsValidation;
};

type UserDetailsValidation = {
    gender: string;
    weight: string;
    height: string;
    age: string;
    [key: string]: string;
};

export const BASIC_USER_PROFILE_VALIDATION_DATA: BasicUserProfileValidation = {
    firstName: "",
    lastName: "",
    email: "",
    avatar: "",
    details: {
        gender: "",
        weight: "",
        height: "",
        age: "",
    },
};

export type UserNewMeal = {
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
    proteins: string;
    carbs: string;
    ingredients: Ingredient[]
    [key: string]: string | number | boolean | Ingredient[];


}
export type Unit = 'ml' | 'g'

export type Ingredient = {
    name: string;
    amount: number;
    unit: Unit;
    [key: string]: string | number | Unit;

}
export const USER_PROFILE_NEW_MEAL: UserNewMeal = {
    mealName: "",
    servings: 0,
    readyInMinutes: 0,
    image: "",
    instructions: "",
    vegetarian: false,
    vegan: false,
    glutenFree: false,
    veryHealthy: false,
    calories: "",
    fat: "",
    proteins: "",
    carbs: "",
    ingredients: [],


}

export const BASIC_NEW_INGREDIENT: Ingredient = {
    name: "",
    amount: 0,
    unit: 'ml',
}
