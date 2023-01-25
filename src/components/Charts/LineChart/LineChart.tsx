import { useMemo } from "react";
import { Line } from "react-chartjs-2";

import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Tooltip,
} from "chart.js";

import { ChartData, USER_STATS_DATASETS_PRESET } from "../../../models/User/UserStatistics";

import * as S from "./LineChart.style";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "bottom" as const,
            borderRadius: 50,
        },
    },
};

export const prepareData = (chartData: ChartData) => {
    return {
        labels: chartData.labels,
        datasets: chartData.data.map((dataset, index) => {
            return {
                label: USER_STATS_DATASETS_PRESET[index].label,
                data: dataset,
                borderColor: USER_STATS_DATASETS_PRESET[index].borderColor,
                backgroundColor: USER_STATS_DATASETS_PRESET[index].backgroundColor,
            };
        }),
    };
};

type ChartProps = {
    chartData: ChartData;
};

const LineChart = ({ chartData }: ChartProps) => {
    const data = useMemo(() => prepareData(chartData), [chartData]);

    return (
        <S.ChartContainer>
            <Line options={options} data={data} />
        </S.ChartContainer>
    );
};

export default LineChart;
