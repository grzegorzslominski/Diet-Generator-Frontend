import { USER_STATISTICS } from "../../const/userData";
import { mainTheme } from "../../../../../themes/mainTheme";

import BoxPad from "../../../../../components/UI/BoxPad/BoxPad";
import Button from "../../../../../components/UI/Button/Button";
import Label from "../../../../../components/UI/Label/Label";
import ChartData from "../../../../DashboardView/components/LastWeightChanges/chart/ChartData";

import * as S from "./UserStatisticsCard.style";

const UserStatisticsCard = () => {
    return (
        <BoxPad header='Statistcs' padding='36px 24px 26px 24px'>
            <S.Content>
                <S.ChartContainer>
                    <ChartData />
                </S.ChartContainer>
                <S.ChartSettingsContainer>
                    {USER_STATISTICS.map((chartSetting) => (
                        <S.ChartSettinges key={chartSetting.header}>
                            <Label
                                fontSize='14px'
                                fontWeight='600'
                                color={mainTheme.colors.mainBlack}
                            >
                                {chartSetting.header}
                            </Label>
                            {chartSetting.setting.map((settingValue) => (
                                <Button
                                    background={mainTheme.colors.secondaryColor}
                                    fontSize='12px'
                                    styleType='primary'
                                    size='extraSmall'
                                    width='60px'
                                    borderRadius='15px'
                                    onClick={() => {}}
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
