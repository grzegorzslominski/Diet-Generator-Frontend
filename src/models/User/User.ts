export type UserData = {
    readonly id: number;
    firstName: string;
    lastName: string;
    email: string;
    profileType: ProfileType;
    avatar: string;
    details: UserDetails;
};

export type UserDetails = {
    weight: number;
    height: number;
    gender: GenderType;
    bmi: number;
    age: number;
    dailyCalories: number;
};

export type GenderType = "Male" | "Female";

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
}

export const NewMealType = ["g","ml"]

export type NewMealIngredient = {
    name: string;
    amount: number;
    unit: string;
}

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
}

export type NewPost = {
    title: string;
    description: string;

}