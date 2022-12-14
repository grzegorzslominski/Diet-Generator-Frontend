import { ChartSettingType, USER_STATISTICS_CHART_SETTING } from "../../const/userData";
import { mainTheme } from "../../../../../themes/mainTheme";

import BoxPad from "../../../../../components/UI/BoxPad/BoxPad";
import Button from "../../../../../components/UI/Button/Button";
import Label from "../../../../../components/UI/Label/Label";
import ChartData from "../../../../DashboardView/components/LastWeightChanges/chart/ChartData";

import * as S from "./UserStatisticsCard.style";
import { useState } from "react";

const UserStatisticsCard = () => {
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
        <BoxPad header='Statistcs'>
            <S.Content>
                <S.ChartContainer>
                    <ChartData />
                </S.ChartContainer>
                <S.ChartSettingsContainer>
                    {USER_STATISTICS_CHART_SETTING.map((chartSetting) => (
                        <S.ChartSettinges key={chartSetting.header}>
                            <Label
                                fontSize='12px'
                                fontWeight='600'
                                color={mainTheme.colors.mainBlack}
                            >
                                {chartSetting.header}
                            </Label>
                            {chartSetting.setting.map((settingValue) => (
                                <Button
                                    fontSize='12px'
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
                        </S.ChartSettinges>
                    ))}
                </S.ChartSettingsContainer>
            </S.Content>
        </BoxPad>
    );
};

export default UserStatisticsCard;
