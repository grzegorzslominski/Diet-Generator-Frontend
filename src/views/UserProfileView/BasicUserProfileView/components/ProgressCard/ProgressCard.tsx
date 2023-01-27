import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { getUserWeightStats } from "../../../../../models/User/UserStatistics";
import { mainTheme } from "../../../../../themes/mainTheme";

import BoxPad, { ClassNameProp } from "../../../../../components/UI/BoxPad/BoxPad";
import Label from "../../../../../components/UI/Label/Label";
import AddWeightModal from "./components/AddWeightModal";

import * as S from "./ProgressCard.style";

type ProgressCardProps = ClassNameProp & {
    weightAtDietGeneration?: number;
    currentWeight?: number;
};

const ProgressCard = ({ className, weightAtDietGeneration, currentWeight }: ProgressCardProps) => {
    const [openAddWeightModal, setOpenAddWeightModal] = useState<boolean>(false);

    const { data: userWeightStats, isLoading: dataIsLoading } = useQuery(
        ["weightStats"],
        getUserWeightStats,
    );

    const handleOpenAddWeightModal = (open: boolean) => {
        setOpenAddWeightModal(open);
    };

    return (
        <>
            <BoxPad header='Progress' gap='10px' padding='12px 24px' className={className}>
                <S.Container>
                    <S.ButtonContainer>
                        <S.WeightButton onClick={() => handleOpenAddWeightModal(true)}>
                            <Label
                                fontWeight='800'
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
                            <S.ProgressBarBackground
                                progressValue={
                                    weightAtDietGeneration && currentWeight
                                        ? (weightAtDietGeneration - currentWeight) * 10
                                        : 0
                                }
                            >
                                <S.ProgressBarTop />
                            </S.ProgressBarBackground>
                        </S.ProgressBarWrapper>
                        <S.CurrentResult>
                            <Label
                                fontFamily='Lato'
                                fontSize='20px'
                                color={mainTheme.colors.mainBlack}
                                fontWeight='700'
                            >
                                {`${
                                    weightAtDietGeneration && currentWeight
                                        ? currentWeight > weightAtDietGeneration
                                            ? `+${currentWeight - weightAtDietGeneration}`
                                            : `-${weightAtDietGeneration - currentWeight}`
                                        : 0
                                } kg`}
                            </Label>

                            <Label
                                fontFamily='Lato'
                                fontSize='12px'
                                color={mainTheme.colors.mainBlack}
                                fontWeight='500'
                            >
                                {`Currently ${currentWeight ? currentWeight : "-"} kg`}
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
                            {weightAtDietGeneration}
                        </Label>
                        <Label
                            fontFamily='Lato'
                            fontSize='16px'
                            color={mainTheme.colors.mainBlack}
                            fontWeight='700'
                        >
                            {currentWeight ? currentWeight - 5 : "-"}
                        </Label>
                    </S.GoalRange>
                </S.Container>
            </BoxPad>
            {openAddWeightModal && (
                <AddWeightModal
                    weightStats={userWeightStats}
                    weightStatsIsLoading={dataIsLoading}
                    close={() => handleOpenAddWeightModal(false)}
                />
            )}
        </>
    );
};

export default ProgressCard;
