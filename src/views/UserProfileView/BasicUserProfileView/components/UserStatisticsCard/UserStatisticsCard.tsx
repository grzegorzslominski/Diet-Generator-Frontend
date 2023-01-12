import { useState } from "react";

import { ChartSettingType, USER_STATISTICS_CHART_SETTING } from "../../const/userData";
import { mainTheme } from "../../../../../themes/mainTheme";

import BoxPad, { ClassNameProp } from "../../../../../components/UI/BoxPad/BoxPad";
import Button from "../../../../../components/UI/Button/Button";
import Label from "../../../../../components/UI/Label/Label";
import Chart from "../../../../../components/Chart/Chart";

import * as S from "./UserStatisticsCard.style";

type UserStatisticsCardProps = ClassNameProp & {};

const UserStatisticsCard = ({ className }: UserStatisticsCardProps) => {
    const [chartType, setChartType] = useState("weight");
    const [chartLength, setChartLength] = useState("7");

    const handleChangeChartSetting = (settingType: ChartSettingType, value: string) => {
        if (settingType === "type") {
            setChartType(value);
        } else {
            setChartLength(value);
        }
    };

    return (
        <BoxPad header='Statistcs' className={className}>
            <S.Content>
                <S.ChartSettingsContainer>
                    {USER_STATISTICS_CHART_SETTING.map((chartSetting) => (
                        <S.CharSetting key={chartSetting.header}>
                            <Label
                                fontSize='12px'
                                fontWeight='600'
                                color={mainTheme.colors.mainBlack}
                            >
                                {chartSetting.header}
                            </Label>
                            <S.ChartSettingButtonsContainer>
                                {chartSetting.setting.map((settingValue) => (
                                    <Button
                                        fontSize='10px'
                                        styleType={
                                            chartType === settingValue.value ||
                                            chartLength === settingValue.value
                                                ? "primaryFull"
                                                : "primaryEmpty"
                                        }
                                        size='extraSmall'
                                        width='60px'
                                        borderRadius='15px'
                                        onClick={() =>
                                            handleChangeChartSetting(
                                                chartSetting.settingType,
                                                settingValue.value,
                                            )
                                        }
                                        key={settingValue.value}
                                    >
                                        {settingValue.label}
                                    </Button>
                                ))}
                            </S.ChartSettingButtonsContainer>
                        </S.CharSetting>
                    ))}
                </S.ChartSettingsContainer>
                <S.ChartContainer>
                    <Chart />
                </S.ChartContainer>
            </S.Content>
        </BoxPad>
    );
};

export default UserStatisticsCard;
