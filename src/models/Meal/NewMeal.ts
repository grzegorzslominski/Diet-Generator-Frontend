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
    ingredients: Ingredient[];
    [key: string]: string | number | boolean | Ingredient[];
};

export type Unit = "ml" | "g";

export type Ingredient = {
    name: string;
    amount: number;
    unit: Unit;
    [key: string]: string | number | Unit;
};

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
};

export const BASIC_NEW_INGREDIENT: Ingredient = {
    name: "",
    amount: 0,
    unit: "ml",
};
