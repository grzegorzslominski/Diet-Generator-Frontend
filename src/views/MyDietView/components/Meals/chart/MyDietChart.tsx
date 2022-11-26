import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {faker} from '@faker-js/faker';
import * as S from "./MyDietChart.style"
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
      display: false,
    },
    title: {
      display: false,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['Fat','Carbs','Proteins'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: ['rgba(255, 99, 132, 0.5)','rgba(53, 162, 235, 0.5)']
    },
  ]
};


const MyDietChart = () => {
  return (
    <S.Container>
      <Bar options={options} data={data} />
    </S.Container>
  );
};

export default MyDietChart;