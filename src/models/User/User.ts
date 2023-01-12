import axiosFoodieInstance from "../../axios/axiosFoodieInstance";

export type UserData = {
    readonly id?: number;
    firstName: string | null;
    lastName: string | null;
    email: string;
    profileType?: ProfileType;
    profilePicturePath?: string;
    weight?: number;
    height?: number;
    gender: GenderType | null;
    bmi: number;
    age?: number;
    kCal: number;
    [key: string]: number | string | ProfileType | undefined | null;
};

export const GENDERS: GenderType[] = ["female", "male"];

export type GenderType = "male" | "female";

export type User = UserData | null;

export type ProfileType = "standard" | "influencer" | "dietician";

export type UserSignIn = {
    email: string;
    password: string;
};

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

export type UserSignInResponse = {
    user: User;
    authToken: string;
};

export type UserSignUp = {
    email: string;
    password: string;
    confirmPassword: string;
};

export type UserSignUpRequest = {
    email: string;
    password: string;
};

export type UserSignUpResponse = {
    encodedData: string;
};

export type UserComment = {
    comment: string;
};

export type NewPost = {
    title: string;
    description: string;
    image: string;
};

export const getBasicUserProfile = async (userID: number) => {
    return await axiosFoodieInstance
        .get<UserData[]>(`account/profile/${userID}`)
        .then((response) => {
            if (response.status === 200) {
                return response.data;
            }
        });
};
