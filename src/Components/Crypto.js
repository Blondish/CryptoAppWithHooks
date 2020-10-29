import React from 'react';
import { Link } from "react-router-dom"
import { useGlobalContext } from "../Context"

const Crypto = ({ crypto }) => {
    const { currency } = useGlobalContext()
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
                {crypto.quote[currency].price.toFixed(2)}

            </td>
            <td>{crypto.quote[currency].percent_change_24h.toFixed(2)}</td>
            <td>
                {crypto.quote[currency].market_cap.toString().slice(0, 3) + "B"}
            </td>
        </tr>

    </>
}

export default Crypto;