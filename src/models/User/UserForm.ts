export type BasicUserProfileValidation = {
    firstName: string;
    lastName: string;
    email: string;
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
    gender: "",
    weight: "",
    height: "",
    age: "",
};
