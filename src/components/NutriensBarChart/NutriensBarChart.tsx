import { NUTRIENS_BAR_PRESET } from "./const/const";

import NutrienBar from "./components/NutrienBar/NutrienBar";
import Label from "../UI/Label/Label";

import { RecipeNutriens } from "../../models/Meal/Recipe";

import * as S from "./NutriensBarChart.style";

const NutriensBarChart = (nutriens: RecipeNutriens) => {
    return (
        <S.Container>
            {nutriens ? (
                Object.keys(nutriens).map((nutrienKey) => (
                    <NutrienBar
                        key={nutrienKey}
                        nutrienName={NUTRIENS_BAR_PRESET[nutrienKey].name}
                        barColor={NUTRIENS_BAR_PRESET[nutrienKey].color}
                        value={
                            nutriens[nutrienKey]
                                ? nutriens[nutrienKey] > 100
                                    ? 100
                                    : nutriens[nutrienKey]
                                : 0
                        }
                    />
                ))
            ) : (
                <Label>No nutriens</Label>
            )}
        </S.Container>
    );
};

export default NutriensBarChart;
