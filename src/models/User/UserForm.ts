import { UNITS } from "./User";
import axiosFoodieInstance from "../../axios/axiosFoodieInstance";
import { recipeVerifiedBasicI } from "../../views/ForumView/PostsList/const/Posts";

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
    products: productType[];
    [key: string]: string | number | boolean | productType[];
}

export type Unit = 'ml' | 'g'

export type productType = { id: string; name: string }

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
    products: [],
}

export const getDietProducts = async () => {
    return await axiosFoodieInstance.get<productType[]>(`/diet/products`).then((response) => {
        if(response.status === 200){
            return response.data
        }
    })
}



