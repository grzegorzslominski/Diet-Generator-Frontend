import { RECIPE_NUTRIONS_PRESET } from "./../models/Meal/Recipe";
import moment from "moment";
import { RecipeNutriens } from "../models/Meal/Recipe";
import { UserData } from "../models/User/User";
import {
    ChartData,
    ChartPeriod,
    UserStats,
    UserWeightRecord,
    NutriensChartData,
} from "../models/User/UserStatistics";
import { parseUnixTime } from "../views/AuthViews/helpers/date";

const parseUserStats = (userStats: UserStats, timePeriod: ChartPeriod): ChartData => {
    const userStatsSortedByDate = userStats.sort((a, b) => a.timestamp - (b.timestamp + 1));

    const chartValues = userStatsSortedByDate.reduce(
        (prev: ChartData, curr: UserData, index) => {
            if (
                (!prev.labels.length ||
                    prev.labels[prev.labels.length - 1] !== parseUnixTime(curr.timestamp)) &&
                curr.timestamp &&
                curr.weight &&
                curr.bmi
            ) {
                prev.labels.push(parseUnixTime(curr.timestamp));
                prev.data[0].push(curr.weight);
                prev.data[1].push(curr.bmi);
            } else if (
                curr.weight &&
                prev.labels[prev.labels.length - 1] === parseUnixTime(curr.timestamp)
            ) {
                prev.data[0][prev.data[0].length - 1] = curr.weight;
                prev.data[1][prev.data[1].length - 1] = curr.bmi;
            }
            return prev;
        },
        {
            labels: [],
            data: [[], []],
        },
    );

    return reduceChartDataToPeriodTime(chartValues, timePeriod);
};

const reduceChartDataToPeriodTime = (
    statsRecords: ChartData,
    timePeriod: ChartPeriod,
): ChartData => {
    if (timePeriod === "all") {
        return statsRecords;
    } else {
        const date = moment().subtract(timePeriod, "d").unix();
        const reducedLabels = statsRecords.labels.filter((label) => {
            if (moment(label, "DD/MM/YYYY").unix() > date) {
                return label;
            }
        });
        return {
            labels: reducedLabels,
            data: [
                statsRecords.data[0].slice(0, reducedLabels.length),
                statsRecords.data[1].slice(0, reducedLabels.length),
            ],
        };
    }
};

const prepareRecipeNutriensToChart = (nutriens: RecipeNutriens) => {
    return Object.keys(nutriens).reduce(
        (prev: NutriensChartData, curr: string) => {
            prev.labels.push(RECIPE_NUTRIONS_PRESET[curr]);
            prev.data.push(nutriens[curr]);
            return prev;
        },
        {
            labels: [],
            data: [],
        },
    );
};

const parseUserWeightStats = (userWeightStats: UserWeightRecord[]): UserWeightRecord[] => {
    return userWeightStats
        .sort((a, b) => b.timestamp - a.timestamp)
        .reduce((prev: UserWeightRecord[], curr: UserWeightRecord) => {
            if (
                curr.weight &&
                (!prev.length ||
                    parseUnixTime(prev[prev.length - 1].timestamp) !==
                        parseUnixTime(curr.timestamp))
            ) {
                prev.push(curr);
            } else if (
                curr.weight &&
                parseUnixTime(prev[prev.length - 1].timestamp) === parseUnixTime(curr.timestamp) &&
                prev[prev.length - 1].timestamp <= curr.timestamp
            ) {
                prev[prev.length - 1].weight = curr.weight;
            }
            return prev;
        }, []);
};

const getAllWeightRecordsIDByDay = (userWeightStats: UserWeightRecord[], date: string) => {
    return userWeightStats.reduce((prev: number[], cuur: UserWeightRecord) => {
        if (parseUnixTime(cuur.timestamp) === date) {
            prev.push(cuur.id);
        }
        return prev;
    }, []);
};

export {
    parseUserStats,
    prepareRecipeNutriensToChart,
    parseUserWeightStats,
    getAllWeightRecordsIDByDay,
};
