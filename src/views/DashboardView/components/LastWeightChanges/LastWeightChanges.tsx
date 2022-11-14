import React from "react";


import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import * as S from './LastWeightChanges.style'
import {faker} from '@faker-js/faker';
import Label from "../../../../components/UI/Label/Label";
import { mainTheme } from "../../../../themes/mainTheme";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom' as const,
            borderRadius: 50,

        },
        title: {
            display: false,
            text: 'Chart.js Line Chart',
        },

    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Them',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: '#2295F9',
            backgroundColor: '#0780EF',

        },
        {
            label: 'Us',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            backgroundColor: '#00144A',
            borderColor: '#384181',

        },
    ],
};


const LastWeightChanges = () => {
    return <S.Container>
        <S.ChartContainer>
        <Line options={options} data={data}/>
        </S.ChartContainer>
        <S.StatisticContainer>
            <S.Labelh1>
        <Label
          fontSize='1.5rem'
          fontFamily='Lato'
          fontWeight='700'
          lineHeight='2.4rem'
          textAlign='center'
          color={mainTheme.colors.mainBlack}

        >
            Statistics
        </Label>
            </S.Labelh1>
            <Label
                fontFamily='Lato'
                fontWeight='700'
                fontSize='1rem'
                lineHeight='1.2rem'
                textAlign='center'
                color={mainTheme.colors.mainBlack}
            >
             weekly weight changes
            </Label>

            <S.LabelStyled>
                <Label
                fontFamily='Lato'
                fontWeight='700'
                fontSize='2rem'
                lineHeight='2.4rem'
                >
                -1.2kg
                </Label>
            </S.LabelStyled>
            <Label
              fontFamily='Lato'
              fontWeight='700'
              fontSize='1rem'
              lineHeight='1.2rem'
              textAlign='center'
              color={mainTheme.colors.mainBlack}
            >
                weekly weight changes
            </Label>

            <S.LabelStyled>
                <Label
                  fontFamily='Lato'
                  fontWeight='700'
                  fontSize='2rem'
                  lineHeight='2.4rem'
                >
                    -3.5kg
                </Label>
            </S.LabelStyled>
            <Label
              fontFamily='Lato'
              fontWeight='700'
              fontSize='1rem'
              lineHeight='1.2rem'
              textAlign='center'
              color={mainTheme.colors.mainBlack}
            >
                weekly weight changes
            </Label>

            <S.LabelStyled>
                <Label
                  fontFamily='Lato'
                  fontWeight='700'
                  fontSize='2rem'
                  lineHeight='2.4rem'
                >
                    -1.2kg
                </Label>
            </S.LabelStyled>
        </S.StatisticContainer>

    </S.Container>
};

export default LastWeightChanges;