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

export const data = (a: number,b:number,c:number) => {
  return {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [a,b,c],
        backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(53, 162, 235, 0.5)']
      },
    ]
  }
};

interface props {
  proteins: number;
  fat: number,
  carbs: number
}
const MyDietChart = ({proteins,fat,carbs}:props) => {
  return (
    <S.Container>
      <Bar options={options} data={data(fat,carbs,proteins)} />
    </S.Container>
  );
};

export default MyDietChart;