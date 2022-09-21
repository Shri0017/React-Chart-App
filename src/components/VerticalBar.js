
import React, { useRef } from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { faker } from '@faker-js/faker';

ChartJs.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
    responsive: true,
    plugins:{
        legend:{
            position: 'top',
        },
        title:{
            display: true,
            text: '1st Bar Chart'
        },
    },
};

const labels =['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({min:0,max:1000})),
            backgroundColor: 'rgba(255, 99, 132, 5)',
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(53, 162, 235, 5)',
          },
    ],
};

export const VerticalBar = () => {

//     const chartRef = useRef(null);
// React.useEffect(() =>{
//     if (chartRef.current) {
//         console.log("----in chart Ref ")
//         console.log("-----",chartRef);
//         if (chartRef.current) {
//           chartRef.current.Chart.destroy();
//         }
//       }
// } ,[chartRef]);
    
  return (
    <div style={{maxWidth:'50vw', maxHeight:'40vh',margin:'auto', marginBottom:'10rem'}}>
        <Bar /*ref={chartRef}*/ options={options} data={data} />
        
    </div>
  )
  
}
