type NutrienBarPresetType = {
    f: NutrienPresetType;
    c: NutrienPresetType;
    p: NutrienPresetType;
    [key: string]: NutrienPresetType;
};

type NutrienPresetType = {
    name: string;
    color: string;
};

export const NUTRIENS_BAR_PRESET: NutrienBarPresetType = {
    f: { name: "Fat", color: "#FFC50C" },
    p: { name: "Proteins", color: "#38662F" },
    c: { name: "Carbs", color: "#EF5940" },
};
