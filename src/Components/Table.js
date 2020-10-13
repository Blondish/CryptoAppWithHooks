import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Crypto from './Crypto';

function RenderTable({ cryptos, loading }) {
    if (loading) {
        return <h2>Loading...</h2>
    } if (cryptos.length < 1) {
        return <h2>
            No matches to your search criteria
        </h2>
    }

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
                    {cryptos.map(crypto => {
                        return <Crypto key={crypto.id} crypto={crypto} cryptos={cryptos} />
                    })}

                </tbody>
            </Table>
        </div>
    );
}

export default RenderTable;