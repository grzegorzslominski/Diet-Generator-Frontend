import { ProductType } from "../../views/DietGeneratorView/components/Choose your goal/Goals/const/data";

export interface GeneratorI {
    goal: goalType;
    exercise: exerciseType;
    exclusions: ProductType[];
    mealsPerDay: number;
    vegan: boolean;
    vegetarian: boolean;
    glutenFree: boolean;
    veryHealthy: boolean;
    dairyFree: boolean;
    personalized: boolean;
    makroCheck: boolean;

    [key: string]: goalType | exerciseType | ProductType[] | boolean | number;
}

export type questionType = { id: number; value: number };
export type exclusionType = { id: number; value: string };
export type goalType = "LOSE" | "MAINTAIN" | "GAIN" | "MUSCLE" | "";
export type exerciseType = "LOW" | "AVERAGE" | "HEAVY" | "";

export const BASIC_GENERATOR_DATA: GeneratorI = {
    goal: "",
    exercise: "",
    exclusions: [],
    mealsPerDay: 3,
    vegan: false,
    vegetarian: false,
    glutenFree: false,
    veryHealthy: false,
    dairyFree: false,
    personalized: false,
    makroCheck: true,
};

export interface GeneratorHandleChangeI {
    handleChange: (property: string, value: any) => void;
    data?: GeneratorI;
}
