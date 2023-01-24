import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useMemo } from "react";
import { Pie } from "react-chartjs-2";
import { NutriensChartData } from "../../../models/User/UserStatistics";

import * as S from "./PieChart.style";

ChartJS.register(ArcElement, Tooltip, Legend);

export const prepareData = (chartData: NutriensChartData) => {
    return {
        labels: chartData.labels,
        datasets: [
            {
                data: chartData.data,
                backgroundColor: ["#bcfdf7", "#e13d56", "#E0DA53"],
            },
        ],
    };
};

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "bottom" as const,
            borderRadius: 35,
            display: false,
        },
    },
};

type ChartProps = {
    nutriensChartData: NutriensChartData;
};

const PieChart = ({ nutriensChartData }: ChartProps) => {
    const data = useMemo(() => prepareData(nutriensChartData), [nutriensChartData]);

    return (
        <S.Container>
            <Pie data={data} options={options} />
        </S.Container>
    );
};

export default PieChart;
