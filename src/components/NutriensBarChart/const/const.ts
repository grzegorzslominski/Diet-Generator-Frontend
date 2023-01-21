type NutrienBarPresetType = {
    fat: NutrienPresetType;
    carbs: NutrienPresetType;
    protein: NutrienPresetType;
    [key: string]: NutrienPresetType;
};

type NutrienPresetType = {
    name: string;
    color: string;
};

export const NUTRIENS_BAR_PRESET: NutrienBarPresetType = {
    fat: { name: "Fat", color: "#FFC50C" },
    protein: { name: "Proteins", color: "#38662F" },
    carbs: { name: "Carbs", color: "#EF5940" },
};
