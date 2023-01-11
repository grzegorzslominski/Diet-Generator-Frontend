import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from "chart.js";
import { faker } from "@faker-js/faker";
import { Line } from "react-chartjs-2";

import * as S from "./Chart.style";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "bottom" as const,
            borderRadius: 50,
        },
        title: {
            display: false,
            text: "Chart.js Line Chart",
        },
    },
};

const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

export const data = {
    labels,
    datasets: [
        {
            label: "Them",
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: "#2295F9",
            backgroundColor: "#0780EF",
        },
        {
            label: "Us",
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            backgroundColor: "#00144A",
            borderColor: "#384181",
        },
    ],
};
const Chart = () => {
    return (
        <S.ChartContainer>
            <Line options={options} data={data} />
        </S.ChartContainer>
    );
};

export default Chart;
