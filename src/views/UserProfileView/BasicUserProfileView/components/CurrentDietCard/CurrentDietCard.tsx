import { useNavigate } from "react-router-dom";

import { CURRENT_DIET_DATA } from "./const/currentDietData";

import BoxPad from "../../../../../components/UI/BoxPad/BoxPad";
import GradientLabel from "../../../../../components/UI/GradientLabel/GradientLabel";
import Label from "../../../../../components/UI/Label/Label";

import * as S from "./CurrentDietCard.style";
import { mainTheme } from "../../../../../themes/mainTheme";
import RedirectButton from "../../../../../components/UI/RedirectButton/RedirectButton";
import { NAVIGATION } from "../../../../../navigation/paths";

const CurrentDietCard = () => {
    const navigate = useNavigate();

    return (
        <BoxPad header='Current diet' padding='24px 24px 45px 24px'>
            <S.Content>
                <GradientLabel>
                    <Label fontFamily='Lato' fontSize='17px' fontWeight='700'>
                        My favorite diet
                    </Label>
                </GradientLabel>
                <S.DetailsContainer>
                    {CURRENT_DIET_DATA.map((dietDetail) => (
                        <S.DietDetail key={dietDetail.header}>
                            <Label
                                fontFamily='Lato'
                                fontSize='15px'
                                color={mainTheme.colors.mainBlack}
                            >
                                {dietDetail.header}
                            </Label>
                            <Label
                                fontFamily='Lato'
                                fontSize='18px'
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
