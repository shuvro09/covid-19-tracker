import React from 'react'
import { Line } from 'react-chartjs-2';
function Chart({ data, searchInput }) {
    console.log(data)
    if (searchInput === "Global" || data === null)
        return null
    if (data === undefined)
        return ("Loading..")
    const labelConfirmed = data.map((d) => d.Date.substring(0, 10))
    const dataConfirmed = data.map((d) => d.Confirmed)
    const dataDeaths = data.map((d) => d.Deaths)
    const dataRecovered = data.map((d) => d.Recovered)
    const chartData = {
        labels: labelConfirmed,
        datasets: [
            {

                label: 'Confirmed Cases',
                data: dataConfirmed,
                borderColor: 'rgba(255,255,0,0.4)',
                backgroundColor: 'rgba(255,255,0,0.4)',

                fill: false

            },
            {
                label: 'Deaths',
                data: dataDeaths,
                borderColor: 'rgba(255,0,0,0.5)',
                backgroundColor: 'rgba(255,0,0,0.5)',
                fill: false
            },
            {
                label: 'Recovered',
                data: dataRecovered,
                borderColor: 'rgba(0,255,0,0.5)',
                backgroundColor: 'rgba(0,255,0,0.5)',
                fill: false

            }
        ]
    }
    const options = {
        legend: { display: true },
        responsive: true,
    }

    return (<div className={'charts'}>< Line data={chartData} options={options} /></div>)
}
export default Chart;