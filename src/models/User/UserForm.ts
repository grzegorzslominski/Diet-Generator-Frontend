import axiosFoodieInstance from "../../axios/axiosFoodieInstance";

export type BasicUserProfileValidation = {
    firstName: string;
    lastName: string;
    email: string;
    profilePicturePath: string;
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
    profilePicturePath: "",
    gender: "",
    weight: "",
    height: "",
    age: "",
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
    dairyFree: boolean;
    veryHealthy: boolean;
    calories: string;
    fat: string;
    proteins: string;
    carbs: string;
    ingredients: ingredientType[];
    [key: string]: string | number | boolean | ingredientType[];
}

export type Unit = 'ml' | 'g'

export const UNITS: Unit[] = ["g", "ml"];

export type ingredientType = {
    id: string;
    name: string;
    amount: string;
    unit: Unit;
    [key: string]: string | number;
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
    dairyFree: false,
    calories: "",
    fat: "",
    proteins: "",
    carbs: "",
    ingredients: [],
}

export const getDietProducts = async () => {
    return await axiosFoodieInstance.get<ingredientType[]>(`/diet/products`).then((response) => {
        if(response.status === 200){
            return response.data
        }
    })
}



