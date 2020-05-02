import React from 'react'
import { Bar } from 'react-chartjs-2';
function Chart({ data, searchInput }) {
    if (searchInput === "Global")
        return null
    if (!data.confirmed)
        return ("Loading...")
    if (data.confirmed.value === 0)
        return ("Error. Data Unavailable currently")
    const chartData = {
        labels: ['Confirmed Cases', 'Deaths', 'Recoveries'],
        datasets: [
            {

                label: 'People',
                backgroundColor: ['rgba(0,155,255,0.5)', 'rgba(0,0,255,0.5)', 'rgba(105,0,255,0.5)'],
                data: [data.confirmed.value, data.deaths.value, data.recovered.value],
            }
        ]
    }
    const options = {
        legend: { display: false },
        responsive: true
    }

    return (<div className={'charts'}>< Bar data={chartData} options={options} /></div>)
}
export default Chart;