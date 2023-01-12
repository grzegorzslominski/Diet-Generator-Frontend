export interface GeneratorI {
    goal: goalType;
    exercise: exerciseType;
    exclusions: exclusionType[];
    questions: questionType[]
}


export type questionType = {id: number, value: number}
export type exclusionType = {id: number, value: string}
export type goalType = "loose weight" | "maintain weight" | "gain weight" | "gain muscle" | "";
export type exerciseType = "no exercise" | "average exercise" | "a lot of exercise" | "";

export const BASIC_GENERATOR_DATA:GeneratorI = {
    goal: "",
    exercise: "",
    exclusions: [],
    questions: []
}

export interface GeneratorHandleChangeI{
    handleChange: (property: string, value: any) => void;
    data?: GeneratorI
}
