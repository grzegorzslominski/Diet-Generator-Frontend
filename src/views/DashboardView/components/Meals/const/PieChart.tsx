import React from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import * as S from "./PieChart.style"

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Red', 'Yellow','Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 12,12,150],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'white'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
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


const PieChart = () => {
  return  <S.Container>
    <Pie data={data} options={options}/>
  </S.Container>

};

export default PieChart;