export type UserData = {
    readonly id: number;
    firstName?: string;
    lastName?: string;
    email: string;
    username?: string;
    profileType: ProfileType;
};

export type User = UserData | null;

export type ProfileType = "standard" | "influencer" | "dietician";

export type UserSignIn = {
    email: string;
    password: string;
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
