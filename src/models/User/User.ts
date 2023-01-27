import axiosFoodieInstance from "../../axios/axiosFoodieInstance";
import { ENDPOINTS_USER } from "../../navigation/endpoints";

export type UserData = {
    readonly id: number;
    firstName: string | null;
    lastName: string | null;
    email: string;
    profileType?: ProfileType;
    profileImagePath?: string;
    weight?: number;
    height?: number;
    gender: GenderTypeValue | null;
    completedSurvey?: boolean;
    completedRatings?: boolean;
    subscribed?: boolean;
    bmi: number;
    age?: number;
    calories?: number;
    timestamp: number;
    authorities?: AuthorityType[];
    [key: string]: number | string | ProfileType | undefined | null | AuthorityType[] | boolean;
};
export type AuthorityType = "ROLE_ADMIN" | "ROLE_USER" | "ROLE_DIETITIAN" | "ROLE_INFLUENCER";

export type UserFormData = UserData & {
    profileImagePath: UploadItem;
};

export type GenderType = {
    value: GenderTypeValue;
    label: string;
};

export type GenderTypeValue = "FEMALE" | "MALE";

export const GENDERS: GenderType[] = [
    { value: "FEMALE", label: "Female" },
    { value: "MALE", label: "Male" },
];

export type ProfileType = "standard" | "influencer" | "dietician";

export type User = UserData | null;

export type UploadItem = {
    type: string;
    url: string;
    file: any;
} | null;

export type UploadResponse = {
    url: string;
};

export const getUserData = async () => {
    return await axiosFoodieInstance.get(ENDPOINTS_USER.userInfo).then((response) => {
        if (response.status === 200) {
            const userData: User = response.data;
            return userData;
        }
    });
};
