import React from "react";
import MealItem from "./item/MealItem";
import * as S from "./MealList.style";
import { data } from "./const/data";
import Label from "../../../../components/UI/Label/Label";
import { mainTheme } from "../../../../themes/mainTheme";

interface props {
    title: string;
    display?: boolean;
}
const MealsList = ({ title, display = false }: props) => {
    return (
        <S.Container>
            <S.LabelContainer>
                <Label
                    fontSize='1.5rem'
                    fontFamily='Lato'
                    fontWeight='700'
                    lineHeight='2.4rem'
                    textAlign='center'
                    color={mainTheme.colors.mainBlack}
                >
                    {title}
                </Label>
            </S.LabelContainer>
            <S.ItemWrapper>
                {data.map((v) => (
                    <S.ItemContainer key={v.name}>
                        <MealItem
                            name={v.name}
                            image={v.image}
                            basicIngredients={v.basicIngredients}
                            kcal={v.kcal}
                            rating={v.rating}
                            c={v.c}
                            p={v.p}
                            f={v.f}
                            display={display}
                        />
                    </S.ItemContainer>
                ))}
            </S.ItemWrapper>
        </S.Container>
    );
};

export default MealsList;
