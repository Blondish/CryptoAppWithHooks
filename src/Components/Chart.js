import React from "react"
import { Line } from "react-chartjs-2"

export default function Chart({ props }) {

    const { percent_change_1h, percent_change_7d, percent_change_24h, price } = props.quote.USD
    const lastPrice = price.toFixed(2)
    const price_1h = (lastPrice - lastPrice * (percent_change_1h / 100)).toFixed(2)
    const price_24h = (lastPrice - lastPrice * (percent_change_24h / 100)).toFixed(2)
    const price_7d = (lastPrice - lastPrice * (percent_change_7d / 100)).toFixed(2)


    console.log(price_7d)



    const state = {
        labels: ['7day', '24h', '1h', "last price"],
        datasets: [
            {
                label: 'Price',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [price_7d, price_24h, price_1h, lastPrice]
            }
        ]
    }

    return <div>
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
                    position: 'right'
                }
            }}
        />
    </div>
}