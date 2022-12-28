import { mainTheme } from "../../../../themes/mainTheme";

type ButtonStyleProps = {
    backgroundColor: string;
    color: string;
};

type ButtonStylePresetProps = {
    gradientFull: ButtonStyleProps;
    gradientEmpty: ButtonStyleProps;
    primaryFull: ButtonStyleProps;
    primaryEmpty: ButtonStyleProps;
    [key: string]: ButtonStyleProps;
};

export const BUTTON_STYLE_PRESET: ButtonStylePresetProps = {
    gradientFull: { backgroundColor: "", color: "white" },
    gradientEmpty: { backgroundColor: "", color: "121212" },
    primaryFull: { backgroundColor: `${mainTheme.colors.secondaryColor}`, color: "white" },
    primaryEmpty: { backgroundColor: "transparent", color: `${mainTheme.colors.secondaryColor}` },
};
