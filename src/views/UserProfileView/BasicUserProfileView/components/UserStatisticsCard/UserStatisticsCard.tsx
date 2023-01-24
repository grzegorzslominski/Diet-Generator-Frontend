import { useState, useMemo } from "react";

import { mainTheme } from "../../../../../themes/mainTheme";
import { parseUserStats } from "../../../../../helpers/statistics";

import BoxPad, { ClassNameProp } from "../../../../../components/UI/BoxPad/BoxPad";
import Spinner from "../../../../../components/UI/Spinner/Spinner";
import Button from "../../../../../components/UI/Button/Button";
import Label from "../../../../../components/UI/Label/Label";
import Chart from "../../../../../components/Charts/LineChart/LineChart";

import {
    ChartPeriod,
    CHART_PERIOD_DATA,
    UserStats,
} from "../../../../../models/User/UserStatistics";

import * as S from "./UserStatisticsCard.style";

type UserStatisticsCardProps = ClassNameProp & {
    userStats: UserStats;
};

const UserStatisticsCard = ({ className, userStats }: UserStatisticsCardProps) => {
    const [chartPeriod, setChartPeriod] = useState<ChartPeriod>("all");

    const preparedUserStats = useMemo(
        () => parseUserStats(userStats, chartPeriod),
        [userStats, chartPeriod],
    );

    return (
        <BoxPad header='Statistcs' className={className}>
            <S.Content>
                <S.ChartSettingsContainer>
                    <S.CharSetting>
                        <Label fontSize='12px' fontWeight='600' color={mainTheme.colors.mainBlack}>
                            Time
                        </Label>
                        <S.ChartSettingButtonsContainer>
                            {CHART_PERIOD_DATA.map((timePeriod: ChartPeriod) => (
                                <Button
                                    fontSize='10px'
                                    styleType={
                                        chartPeriod === timePeriod ? "primaryFull" : "primaryEmpty"
                                    }
                                    size='extraSmall'
                                    width='60px'
                                    borderRadius='15px'
                                    onClick={() => setChartPeriod(timePeriod)}
                                    key={timePeriod}
                                >
                                    {timePeriod !== "all" ? `${timePeriod} days` : timePeriod}
                                </Button>
                            ))}
                        </S.ChartSettingButtonsContainer>
                    </S.CharSetting>
                </S.ChartSettingsContainer>
                <S.ChartContainer>
                    {!preparedUserStats ? (
                        <Spinner color='secondary' />
                    ) : (
                        <Chart chartData={preparedUserStats} />
                    )}
                </S.ChartContainer>
            </S.Content>
        </BoxPad>
    );
};

export default UserStatisticsCard;
