import avatar from "../../../../assets/profile/avatar.png";

import { UserData } from "../../../../models/User/User";

export const USER: UserData = {
    id: 1,
    firstName: "John",
    lastName: "Test",
    email: "johnTest@gmail.com",
    username: "john12",
    profileType: "standard",
    avatar: avatar,
    details: {
        weight: 78,
        height: 182,
        gender: "Male",
        bmi: 32,
        dailyCalories: 2300,
    },
};

export type CharSetting = {
    header: string;
    setting: Setting[];
};

export type Setting = {
    value: string;
    label: string;
};

export const USER_STATISTICS: CharSetting[] = [
    {
        header: "Type of chart",
        setting: [
            { value: "weight", label: "Weight" },
            { value: "bmi", label: "BMI" },
        ],
    },
    {
        header: "Time period",
        setting: [
            { value: "7", label: "7 day" },
            { value: "30", label: "30 day" },
            { value: "90", label: "90 day" },
            { value: "all", label: "All" },
        ],
    },
];
