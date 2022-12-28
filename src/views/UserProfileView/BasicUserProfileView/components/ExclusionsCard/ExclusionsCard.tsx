import { useNavigate } from "react-router-dom";

import { mainTheme } from "../../../../../themes/mainTheme";
import { NAVIGATION } from "../../../../../navigation/paths";

import BoxPad, { ClassNameProp } from "../../../../../components/UI/BoxPad/BoxPad";
import Button from "../../../../../components/UI/Button/Button";
import Label from "../../../../../components/UI/Label/Label";

import * as S from "./ExclusionsCard.style";

type ExclusionsCardProps = ClassNameProp & {};

const ExclusionsCard = ({ className }: ExclusionsCardProps) => {
    const navigate = useNavigate();

    return (
        <BoxPad header='Excluded products' padding='24px 24px 21px 24px' className={className}>
            <S.Container>
                <S.Content>
                    <S.ExclusionDetail>
                        <Label
                            color={mainTheme.colors.inputText}
                            fontSize='13px'
                            fontWeight='600'
                            width='240px'
                        >
                            Last excluded product:
                        </Label>
                        <Label
                            color={mainTheme.colors.secondaryColor}
                            fontSize='15px'
                            fontWeight='600'
                        >
                            rice noodles
                        </Label>
                    </S.ExclusionDetail>

                    <S.ExclusionDetail>
                        <Label
                            color={mainTheme.colors.inputText}
                            fontSize='13px'
                            fontWeight='600'
                            width='240px'
                        >
                            Number of excluded products:
                        </Label>
                        <Label
                            color={mainTheme.colors.secondaryColor}
                            fontSize='15px'
                            fontWeight='600'
                        >
                            14
                        </Label>
                    </S.ExclusionDetail>
                </S.Content>

                <Button
                    styleType='primaryFull'
                    size='extraSmall'
                    onClick={() => navigate(NAVIGATION.exclusions)}
                    width='140px'
                    borderRadius='10px'
                    fontSize='12px'
                >
                    Manage exclusions
                </Button>
            </S.Container>
        </BoxPad>
    );
};

export default ExclusionsCard;
