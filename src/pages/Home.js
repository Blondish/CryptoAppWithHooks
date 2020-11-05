import React from "react";
import RenderTable from '../Components/Table';
import SearchBox from './../Components/SearchBox';
import { useGlobalContext } from "../Context"

export const Home = () => {
    const { search, setSearch, changeCurrency, searchedCryptos } = useGlobalContext()

    return (
        <div className="container">
            <h1 className="title">Top Ranked Cryptos</h1>
            <div>
                <select name="currency" id="currency" placeholder="select the currency" onChange={(e) => changeCurrency(e.target.value)}>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="CAD">CAD</option>
                </select>
            </div>
            <SearchBox search={search} setSearch={setSearch}></SearchBox>
            <RenderTable cryptos={searchedCryptos} />
        </div>
    );
}