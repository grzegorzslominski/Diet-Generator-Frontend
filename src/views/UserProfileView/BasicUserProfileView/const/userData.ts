export type CharSetting = {
    header: string;
    setting: Setting[];
    settingType: ChartSettingType;
};

export type ChartSettingType = "type" | "length";

export type Setting = {
    value: string;
    label: string;
};

export const USER_STATISTICS_CHART_SETTING: CharSetting[] = [
    {
        header: "Time:",
        setting: [
            { value: "7", label: "7 day" },
            { value: "30", label: "30 day" },
            { value: "90", label: "90 day" },
            { value: "all", label: "All" },
        ],
        settingType: "length",
    },
    {
        header: "Type:",
        setting: [
            { value: "weight", label: "Weight" },
            { value: "bmi", label: "BMI" },
        ],
        settingType: "type",
    },
];

export type Meal = {
    readonly id: number;
    name: string;
    recipe: string;
    kcal: number;
    nutrients: Nutriens;
};

export type Nutriens = {
    f: number;
    p: number;
    c: number;
    [key: string]: number;
};

export const OWN_MEALS: Meal[] = [
    {
        id: 1,
        name: "Chicken masala",
        recipe: "Lorem ipsum test test test",
        kcal: 521,
        nutrients: {
            f: 15,
            p: 22,
            c: 44,
        },
    },
    {
        id: 2,
        name: "Chicken masala",
        recipe: "Lorem ipsum test test test",
        kcal: 521,
        nutrients: {
            f: 3,
            p: 5,
            c: 22,
        },
    },
    {
        id: 3,
        name: "Chicken masala",
        recipe: "Lorem ipsum test test test",
        kcal: 521,
        nutrients: {
            f: 32,
            p: 15,
            c: 77,
        },
    },
    {
        id: 4,
        name: "Chicken masala",
        recipe: "Lorem ipsum test test test",
        kcal: 521,
        nutrients: {
            f: 51,
            p: 22,
            c: 23,
        },
    },
];
