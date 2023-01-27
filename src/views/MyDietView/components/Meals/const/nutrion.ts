export const NUTRIONS_BOX_PRESET: NutrienBoxes = {
    calories: {
        label: "Calories",
        barColor: "#cab25e",
    },
    protein: {
        label: "Proteins",
        barColor: "#bcfdf7",
    },
    carbs: {
        label: "Carbs",
        barColor: "#e13d56",
    },
    fat: {
        label: "Fat",
        barColor: "#E0DA53",
    },
};

type NutrienBoxes = {
    calories: NutrienBox;
    protein: NutrienBox;
    carbs: NutrienBox;
    fat: NutrienBox;
    [key: string]: NutrienBox;
};

export type NutrienBox = {
    label: string;
    barColor: string;
};
