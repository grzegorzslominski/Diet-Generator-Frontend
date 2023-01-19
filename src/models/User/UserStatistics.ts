import axiosFoodieInstance from "../../axios/axiosFoodieInstance";
import { ENDPOINTS_PROFILE } from "../../navigation/endpoints";
import { UserData } from "./User";

export type UserStats = UserData[];

export type ChartData = {
    labels: string[];
    data: StatsData[];
};

export type StatsData = number[];

export type ChartPeriod = 7 | 30 | 90 | "all";

export const CHART_PERIOD_DATA: ChartPeriod[] = [7, 30, 90, "all"];

export type UserWeightRecord = {
    id: number;
    weight: number;
    timestamp: number;
};

export const USER_STATS_DATASETS_PRESET = [
    {
        label: "Weight",
        borderColor: "#f27063",
        backgroundColor: "#f27063",
    },
    {
        label: "BMI",
        borderColor: "#61578f",
        backgroundColor: "#61578f",
    },
];

export type NewWeightRecord = {
    date: string;
    weight: number | null;
};

export const NEW_WEIGHT_DATA: NewWeightRecord = {
    date: "",
    weight: null,
};

export type NewWeightRecordValidation = {
    date: string;
    weight: string;
};

export const NEW_WEIGHT_VALIDATION_DATA: NewWeightRecordValidation = {
    date: "",
    weight: "",
};

export const getUserWeightStats = async () => {
    return await axiosFoodieInstance
        .get<UserWeightRecord[]>(`${ENDPOINTS_PROFILE.weightStats}`)
        .then((response) => {
            if (response.status === 200) {
                return response.data;
            }
        });
};

export const removeUserWeightRecord = async (weightRecordsID: number[]) => {
    return await axiosFoodieInstance
        .delete<UserWeightRecord[]>(ENDPOINTS_PROFILE.weightStats)
        .then((response) => {
            if (response.status === 200) {
                return response.data;
            }
        });
};
