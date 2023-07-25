import React from 'react';
import {Chart, CategoryScale, LinearScale, PointElement, LineElement, Legend} from 'chart.js'
import {Line} from 'react-chartjs-2'

interface Props {
    chartData: Array<object>
}

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Legend);
export default function LineChart({chartData}: Props) {
    const data = {
        labels: ['', '', '', ''],
        datasets: [{
            label: 'MACD',
            data: chartData?.map((item: any) => item.macd),
            borderColor: 'rgb(0,89,161)',
            backgroundColor: 'rgba(0,89,161)',

        },
            {
                label: 'Signal',
                data: chartData?.map((item: any) => item.signal),
                borderColor: 'rgb(255,180,0)',
                backgroundColor: 'rgb(255,183,0)',
            }
        ]
    }
    const options: any = {
        plugins: {
            legend: {
                position: 'bottom' as const,
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                }
            }
        },
        scales: {
            y: {
                position: 'right' as const,

            },
        }
    }
    return (
        <Line data={data} options={options}/>
    );
}

