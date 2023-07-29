import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as chartJS } from 'chart.js/auto';
import { convertNumber } from '../../../functions/convertNumbers';


const LineChart = ({chartData, PriceType, multiAxis}) => {

    const options = {
        Plugins: {
            legend: {
                display: multiAxis ? true : false,
            },
        },
        responsive: true,
        interaction: {
            mode: "index",
            intersect: false,
        },
        scales: {
            crypto1: {
                type: "linear",
                display: true,
                position: "left",
                ticks: {
                    callback: function (value, index, ticks) {
                        if(PriceType) {
                            return "$" + value.toLocaleString();
                        }
                        else {
                            return "$" + convertNumber(value)
                        }
                    },
                },
            },
            crypto2: {
                type: "linear",
                display: true,
                position: "right",
                ticks: {
                    callback: function (value, index, ticks) {
                        if(PriceType) {
                            return "$" + value.toLocaleString();
                        }
                        else {
                            return "$" + convertNumber(value)
                        }
                    },
                },
            },
        },
    };

  return (
    <div>
        <Line data={chartData} options={options} />
    </div>
    
  )
}

export default LineChart;