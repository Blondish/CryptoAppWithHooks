import React from 'react';
import { ImStatsBars } from "react-icons/im"
import { Table } from 'react-bootstrap';

export default function StatsTab(props, oneCrypto, pageId) {
    console.log(pageId)

    return <>
        <div className="container">
            <h4 className="stats">Statistics  <ImStatsBars /> </h4>

            <Table hover>

                <tbody>
                    <tr>
                        <td>Circulating Supply</td>
                        <td>{props.props.circulating_supply}</td>
                    </tr>
                    <tr>
                        <td>Number of Market Pairs</td>
                        <td>{props.props.num_market_pairs}</td>
                    </tr>
                    <tr>
                        <td>Date Added</td>
                        <td>{props.props.date_added}</td>
                    </tr>
                    <tr>
                        <td>CMC Rank</td>
                        <td>{props.props.cmc_rank}</td>
                    </tr>
                    <tr>
                        <td>Category</td>
                        {/* <td>{oneCrypto[0].category}</td> */}
                    </tr>
                </tbody>
            </Table>
        </div>
    </>


}