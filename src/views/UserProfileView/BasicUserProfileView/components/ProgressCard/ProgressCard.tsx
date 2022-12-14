import { useState } from "react";

import BoxPad from "../../../../../components/UI/BoxPad/BoxPad";
import Label from "../../../../../components/UI/Label/Label";

import { mainTheme } from "../../../../../themes/mainTheme";
import AddWeightModal from "./components/AddWeightModal";

import * as S from "./ProgressCard.style";

const ProgressCard = () => {
    const [openAddWeightModal, setOpenAddWeightModal] = useState<boolean>(false);

    const handleOpenAddWeightModal = (open: boolean) => {
        setOpenAddWeightModal(open);
    };

    return (
        <>
            <BoxPad header='Progress' gap='0'>
                <S.Container>
                    <S.ButtonContainer>
                        <S.WeightButton onClick={() => handleOpenAddWeightModal(true)}>
                            <Label
                                fontWeight='700'
                                fontSize='16px'
                                fontFamily='Lato'
                                color={mainTheme.colors.inputText}
                                lineHeight='16px'
                            >
                                +
                            </Label>
                        </S.WeightButton>
                        <Label
                            fontFamily='Lato'
                            fontSize='10px'
                            color={mainTheme.colors.inputText}
                            fontWeight='600'
                        >
                            Add weight
                        </Label>
                    </S.ButtonContainer>

                    <S.ContentWrapper>
                        <S.ProgressBarWrapper>
                            <S.ProgressBarBackground progressValue={40}>
                                <S.ProgressBarTop />
                            </S.ProgressBarBackground>
                        </S.ProgressBarWrapper>
                        <S.CurrentResult>
                            <Label
                                fontFamily='Lato'
                                fontSize='22px'
                                color={mainTheme.colors.mainBlack}
                                fontWeight='700'
                            >
                                6.1 kg - lost
                            </Label>
                            <Label
                                fontFamily='Lato'
                                fontSize='12px'
                                color={mainTheme.colors.mainBlack}
                                fontWeight='500'
                            >
                                Currently: 77.3 kg
                            </Label>
                        </S.CurrentResult>
                    </S.ContentWrapper>

                    <S.GoalRange>
                        <Label
                            fontFamily='Lato'
                            fontSize='16px'
                            color={mainTheme.colors.mainBlack}
                            fontWeight='700'
                        >
                            81 kg
                        </Label>
                        <Label
                            fontFamily='Lato'
                            fontSize='16px'
                            color={mainTheme.colors.mainBlack}
                            fontWeight='700'
                        >
                            75 kg
                        </Label>
                    </S.GoalRange>
                </S.Container>
            </BoxPad>
            {openAddWeightModal && <AddWeightModal close={() => handleOpenAddWeightModal(false)} />}
        </>
    );
};

export default ProgressCard;
