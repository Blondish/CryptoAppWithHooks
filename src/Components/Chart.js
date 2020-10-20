import React from "react"
import { Line } from "react-chartjs-2"

export default function Chart({ props }) {

    const { percent_change_1h, percent_change_7d, percent_change_24h, price } = props.quote.USD
    const lastPrice = price.toFixed(2)
    const price_1h = (lastPrice - lastPrice * (percent_change_1h / 100)).toFixed(2)
    const price_24h = (lastPrice - lastPrice * (percent_change_24h / 100)).toFixed(2)
    const price_7d = (lastPrice - lastPrice * (percent_change_7d / 100)).toFixed(2)


    const state = {
        labels: ['7day', '24h', '1h', "last price"],
        datasets: [
            {
                label: 'Price',
                fill: true,
                lineTension: 0.5,
                backgroundColor: '#F0FFFF',
                borderColor: '#B0E0E6',
                borderWidth: 2,
                data: [price_7d, price_24h, price_1h, lastPrice]
            }
        ]
    }

    return <div className="container chart-content">
        <Line
            data={state}
            options={{
                title: {
                    display: true,
                    text: 'Price changes',
                    fontSize: 20
                },
                legend: {
                    display: true,
                    position: 'top'
                }
            }}
        />
        <div className="container">
            <h3>Overview</h3>
            <ul className="price-overview-content">
                <li>Last Price: {lastPrice}</li>
                <li>Price 1 hour ago: {price_1h}</li>
                <li>Price 24 hours ago: {price_24h}</li>
                <li>Price 7 days ago: {price_7d}</li>
            </ul>
        </div>
    </div>
}