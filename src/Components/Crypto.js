import React from 'react';
import { Link } from "react-router-dom"

const Crypto = ({ crypto, cryptos }) => {

    return <>
        <tr>
            <td>{crypto.cmc_rank}</td>
            <td>
                <Link to={{
                    pathname: `/crypto/${crypto.id}`,
                    state: crypto
                }}>
                    {crypto.name}
                </Link>
            </td>
            <td>{crypto.symbol}</td>
            <td>
                {crypto.quote.USD.price.toFixed(2)}-
    {Object.keys(cryptos[0].quote)[0]}
            </td>
            <td>{crypto.quote.USD.percent_change_24h}</td>
            <td>
                {crypto.quote.USD.market_cap.toString().slice(0, 3) + "B"}
            </td>
        </tr>

    </>
}

export default Crypto;