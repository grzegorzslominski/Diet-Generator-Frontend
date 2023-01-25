export interface mealItemI {
    date: string;
    day: string;
    meals: string[];
    calories: string;
    fat: string;
    carbs: string;
    protein: string;
    mealDays?: mealDayI[];
}

export interface mealDayI {
    name: string;
    image: string;
    category: string;
    calories: string;
    protein: string;
    carbs: string;
    fat: string;
    basicIngredients: string[];
    properties?: propObject[];
}

export type propObject = {
    vegetarian: string;
    vegan: string;
    glutenFree: string;
    dairyFree: string;
    veryHealthy: string;
};
