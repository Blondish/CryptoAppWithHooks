import React from 'react';
import { ImStatsBars } from "react-icons/im"
import { Table } from 'react-bootstrap';

export default function StatsTab({ props, oneCrypto, pageId }) {

    return <>
        <div className="container">
            <h4 className="stats">Statistics  <ImStatsBars /> </h4>

            <Table hover className="stats_table">

                <tbody>
                    <tr>
                        <td>Circulating Supply</td>
                        <td>{props.circulating_supply}</td>
                    </tr>
                    <tr>
                        <td>Number of Market Pairs</td>
                        <td>{props.num_market_pairs}</td>
                    </tr>
                    <tr>
                        <td>Date Added</td>
                        <td>{props.date_added}</td>
                    </tr>
                    <tr>
                        <td>CMC Rank</td>
                        <td>{props.cmc_rank}</td>
                    </tr>
                    <tr>
                        <td>Category</td>
                        <td>{oneCrypto[pageId].category}</td>
                    </tr>
                    <tr>
                        <td>Maximum Supply</td>
                        <td>{props.max_supply}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    </>


}