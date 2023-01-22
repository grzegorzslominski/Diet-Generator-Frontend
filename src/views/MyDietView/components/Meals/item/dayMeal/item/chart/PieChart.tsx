import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import * as S from "./PieChart.style"

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = (a:number,b:number,c:number) =>  {
  return {
    labels: ['proteins', 'carbs', 'fat',],
    datasets: [
      {
        label: '# of Votes',
        data: [a,b,c],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
      borderRadius: 30,
      display: false,

    },

  },
};

interface props {
  proteins: number;
  carbs: number;
  fat: number;
}

const PieChart = ({proteins,carbs,fat}: props) => {
  return (
    <S.Container>
      <Pie data={data(proteins,carbs,fat)} options={options}/>
    </S.Container>
  );
};

export default PieChart;