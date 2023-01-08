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
