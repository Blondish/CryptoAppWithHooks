import React from "react";
import { Table } from "react-bootstrap";
import Crypto from './Crypto';
import { Spinner } from "react-bootstrap"
import { useGlobalContext } from "../Context"


//React.memo is a hook that prevents rendering if the state/prop did not change
const RenderTable = React.memo(({ cryptos }) => {
    const { loading } = useGlobalContext()
    if (loading) {
        return <div className="spinner"><Spinner animation="border" variant="secondary" /></div>
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
                        return <Crypto key={crypto.id} crypto={crypto} />
                    })}

                </tbody>
            </Table>
        </div>
    );
})

export default RenderTable;