import React from 'react';

import { CategoryScale, Chart as ChartJS, LineElement, LinearScale, PointElement, plugins } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)

const Dashboard = () => {

  const data ={
    labels:["x-10","x-20","x-30","x-40","x-50","x-60","x-70"],
    datasets:[{
      data:[7.5,5.5,7,5,8.5,6,7],
      backgroundColor:"transparent",
      borderColor:"red",
      pointBorderColor:"transparent",
      pointBorderWidth:"4",
      tension:0.4
    }]
  }

  const options={
    plugins:{
      legend:false
    },
    scales:{
      x:{
        grid:{
          display:false,
        }
      },
      y:{
        // min:2,
        // max:10
        ticks:{
          stepsize:2,
          callback:(value) =>value+"LKR"
        },
        grid:{
          borderDash:[10]
        }
      }
    }
  }
  return (
   <div>
    <Line data={data} options={options}>

    </Line>
   </div>
  )
}

export default Dashboard