import { NUTRIENS_BAR_PRESET } from "./const/const";

import { Nutriens } from "../../views/UserProfileView/BasicUserProfileView/const/userData";

import NutrienBar from "./components/NutrienBar/NutrienBar";

import * as S from "./NutriensBarChart.style";

const NutriensBarChart = (nutriens: Nutriens) => {
    return (
        <S.Container>
            {Object.keys(nutriens).map((nutrienKey) => (
                <NutrienBar
                    key={nutrienKey}
                    nutrienName={NUTRIENS_BAR_PRESET[nutrienKey].name}
                    barColor={NUTRIENS_BAR_PRESET[nutrienKey].color}
                    value={nutriens[nutrienKey] > 100 ? 100 : nutriens[nutrienKey]}
                />
            ))}
        </S.Container>
    );
};

export default NutriensBarChart;
