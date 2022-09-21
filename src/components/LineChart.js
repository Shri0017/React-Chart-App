
import React from 'react'
import { Line } from 'react-chartjs-2'
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
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const options = {
    responsive: true,
    plugins:{
        legend:{
            position: 'top',
        },
        title:{
            display: true,
            text: '1st Line Chart'
        },
    },
};

const labels =['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({min:0,max:1000})),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
    ],
};

export const LineChart = () => {
  return (
    <div style={{maxWidth:'50vw', maxHeight:'40vh',margin:'auto', marginBottom:'10rem'}}>
        <Line options={options} data={data}/>

    </div>
  )
}
