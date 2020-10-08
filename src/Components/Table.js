import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import SingleCrypto from './../pages/SingleCrypto';

function RenderTable({ cryptos, loading }) {


    return (
        <div>
            <Table responsive striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Symbol</th>
                        <th>Price</th>
                        <th>% Change</th>
                        <th>Market Cap</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {cryptos.map(crypto => {
                        return <SingleCrypto crypto={crypto} cryptos={cryptos} />
                    })} */}
                    {cryptos.map(crypto => (
                        <tr key={crypto.id}>
                            <td>{crypto.cmc_rank}</td>
                            <td>
                                <Link to={`/crypto/${crypto.id}`}>{crypto.name}</Link>
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
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default RenderTable;