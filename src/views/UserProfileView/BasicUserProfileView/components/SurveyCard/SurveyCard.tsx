import { useNavigate } from "react-router-dom";

import { mainTheme } from "../../../../../themes/mainTheme";
import { NAVIGATION } from "../../../../../navigation/paths";

import BoxPad, { ClassNameProp } from "../../../../../components/UI/BoxPad/BoxPad";
import Label from "../../../../../components/UI/Label/Label";
import Button from "../../../../../components/UI/Button/Button";

import * as S from "./SurveyCard.style";

type SurveyCardProps = ClassNameProp & {};

const SurveyCard = ({ className }: SurveyCardProps) => {
    const navigate = useNavigate();

    return (
        <BoxPad header='Preferential survey' className={className}>
            <S.Container>
                <Label color={mainTheme.colors.inputText} fontSize='13px' fontWeight='600'>
                    If you are not satisfied with the proposed meals, fill in the preferential
                    questionnaire again.
                </Label>
                <S.ActionContainer>
                    <Button
                        styleType='primaryFull'
                        size='extraSmall'
                        onClick={() => navigate(NAVIGATION.dashboard)}
                        width='140px'
                        borderRadius='10px'
                        fontSize='12px'
                    >
                        Preferential survey
                    </Button>
                </S.ActionContainer>
            </S.Container>
        </BoxPad>
    );
};

export default SurveyCard;
