import { useNavigate } from "react-router-dom";

import { mainTheme } from "../../../../../themes/mainTheme";
import { NAVIGATION } from "../../../../../navigation/paths";

import BoxPad, { ClassNameProp } from "../../../../../components/UI/BoxPad/BoxPad";
import Label from "../../../../../components/UI/Label/Label";
import Button from "../../../../../components/UI/Button/Button";

import * as S from "./PremiumCard.style";

type PremiumCardProps = ClassNameProp & {};

const PremiumCard = ({ className }: PremiumCardProps) => {
    const navigate = useNavigate();

    return (
        <BoxPad
            header='Premium account'
            gradientHeader
            padding='22px 24px 21px 24px'
            className={className}
        >
            <S.Container>
                <Label color={mainTheme.colors.inputText} fontSize='13px' fontWeight='600'>
                    Your account has premium status, you have access to all functionalities of the
                    application.
                </Label>
                <S.RemainingStatusContainer>
                    <Label
                        color={mainTheme.colors.inputText}
                        fontSize='15px'
                        fontWeight='600'
                        lineHeight='29px'
                    >
                        Premium Account Status Remaining :
                    </Label>
                    <Label color={mainTheme.colors.secondaryColor} fontSize='15px' fontWeight='600'>
                        21 day
                    </Label>
                </S.RemainingStatusContainer>
                <S.ActionContainer>
                    <Button
                        styleType='primaryFull'
                        size='extraSmall'
                        onClick={() => navigate(NAVIGATION.premium)}
                        width='140px'
                        borderRadius='10px'
                        fontSize='12px'
                    >
                        Subscription details
                    </Button>
                </S.ActionContainer>
            </S.Container>
        </BoxPad>
    );
};

export default PremiumCard;
