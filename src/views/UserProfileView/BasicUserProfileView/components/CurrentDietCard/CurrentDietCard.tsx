import { useNavigate } from "react-router-dom";

import { CURRENT_DIET_DATA } from "./const/currentDietData";
import { NAVIGATION } from "../../../../../navigation/paths";
import { mainTheme } from "../../../../../themes/mainTheme";

import BoxPad, { ClassNameProp } from "../../../../../components/UI/BoxPad/BoxPad";
import GradientLabel from "../../../../../components/UI/GradientLabel/GradientLabel";
import Label from "../../../../../components/UI/Label/Label";
import RedirectButton from "../../../../../components/UI/RedirectButton/RedirectButton";

import * as S from "./CurrentDietCard.style";

type CurrentDietCardProps = ClassNameProp & {};

const CurrentDietCard = ({ className }: CurrentDietCardProps) => {
    const navigate = useNavigate();

    return (
        <BoxPad header='Current diet' padding='12px 24px 38px 24px' gap='6px' className={className}>
            <S.Content>
                <GradientLabel>
                    <Label fontFamily='Lato' fontSize='16px' fontWeight='700'>
                        My favorite diet
                    </Label>
                </GradientLabel>
                <S.DetailsContainer>
                    {CURRENT_DIET_DATA.map((dietDetail) => (
                        <S.DietDetail key={dietDetail.header}>
                            <Label
                                fontFamily='Lato'
                                fontSize='14px'
                                color={mainTheme.colors.mainBlack}
                                whiteSpace='nowrap'
                            >
                                {dietDetail.header}
                            </Label>
                            <Label
                                fontFamily='Lato'
                                fontSize='16px'
                                fontWeight='600'
                                color={mainTheme.colors.mainBlack}
                            >
                                {dietDetail.value}
                            </Label>
                        </S.DietDetail>
                    ))}
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
