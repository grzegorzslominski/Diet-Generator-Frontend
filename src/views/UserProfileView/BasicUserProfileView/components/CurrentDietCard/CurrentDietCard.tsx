import { useNavigate } from "react-router-dom";

import { NAVIGATION } from "../../../../../navigation/paths";
import { mainTheme } from "../../../../../themes/mainTheme";

import BoxPad, { ClassNameProp } from "../../../../../components/UI/BoxPad/BoxPad";
import GradientLabel from "../../../../../components/UI/GradientLabel/GradientLabel";
import Label from "../../../../../components/UI/Label/Label";
import RedirectButton from "../../../../../components/UI/RedirectButton/RedirectButton";

import * as S from "./CurrentDietCard.style";

type CurrentDietCardProps = ClassNameProp & {
    weightAtDietGeneration?: number;
    mealsPerDay?: number;
    dailyCalGoal?: null | number;
};

const CurrentDietCard = ({ className, mealsPerDay, dailyCalGoal }: CurrentDietCardProps) => {
    const navigate = useNavigate();

    return (
        <BoxPad header='Current diet' padding='12px 24px 38px 24px' gap='6px' className={className}>
            <S.Content>
                <GradientLabel>
                    <Label fontFamily='Lato' fontSize='16px' fontWeight='700'>
                        Diet
                    </Label>
                </GradientLabel>
                <S.DetailsContainer>
                    <S.DietDetail>
                        <Label
                            fontFamily='Lato'
                            fontSize='14px'
                            fontWeight='600'
                            color={mainTheme.colors.mainBlack}
                            whiteSpace='nowrap'
                        >
                            Days
                        </Label>
                        <Label
                            fontFamily='Lato'
                            fontSize='16px'
                            fontWeight='600'
                            color={mainTheme.colors.mainBlack}
                        >
                            {mealsPerDay ? 7 : "-"}
                        </Label>
                    </S.DietDetail>
                    <S.DietDetail>
                        <Label
                            fontFamily='Lato'
                            fontSize='14px'
                            fontWeight='600'
                            color={mainTheme.colors.mainBlack}
                            whiteSpace='nowrap'
                        >
                            Meals
                        </Label>
                        <Label
                            fontFamily='Lato'
                            fontSize='16px'
                            fontWeight='600'
                            color={mainTheme.colors.mainBlack}
                        >
                            {mealsPerDay ? 7 * mealsPerDay : "-"}
                        </Label>
                    </S.DietDetail>
                    <S.DietDetail>
                        <Label
                            fontFamily='Lato'
                            fontSize='14px'
                            fontWeight='600'
                            color={mainTheme.colors.mainBlack}
                            whiteSpace='nowrap'
                        >
                            Daily calories
                        </Label>
                        <Label
                            fontFamily='Lato'
                            fontSize='16px'
                            fontWeight='600'
                            color={mainTheme.colors.mainBlack}
                        >
                            {dailyCalGoal ? dailyCalGoal : "-"}
                        </Label>
                    </S.DietDetail>
                    <S.DietDetail>
                        <Label
                            fontFamily='Lato'
                            fontSize='14px'
                            fontWeight='600'
                            color={mainTheme.colors.mainBlack}
                            whiteSpace='nowrap'
                        >
                            Daily meals
                        </Label>
                        <Label
                            fontFamily='Lato'
                            fontSize='16px'
                            fontWeight='600'
                            color={mainTheme.colors.mainBlack}
                        >
                            {mealsPerDay ? mealsPerDay : "-"}
                        </Label>
                    </S.DietDetail>
                </S.DetailsContainer>
                <S.ActionContanier>
                    <RedirectButton
                        label='Manage diet'
                        onClick={() => navigate(NAVIGATION.myDiet)}
                    />
                </S.ActionContanier>
            </S.Content>
        </BoxPad>
    );
};

export default CurrentDietCard;
