import React from "react";
import { useState, useEffect } from "react"
import RenderTable from '../Components/Table';
import SearchBox from './../Components/SearchBox';
import { useGlobalContext } from "../Context"

export const Home = (e) => {
    // const [cryptos, setCryptos] = useState([])
    // const [loading, setLoading] = useState(false);
    // const [search, setSearch] = useState("")
    // const [currency, setCurrency] = useState("USD")

    const { cryptos, search, setCurrency, setLoading, setSearch, loading, currency, changeCurrency, searchedCryptos } = useGlobalContext()
    console.log(currency)
    // useEffect(() => {
    //     const getAllCryptos = async () => {
    //         try {
    //             let start = 1;
    //             let limit = 10;
    //             let convert = currency
    //             const proxyurl = "https://cors-anywhere.herokuapp.com/";
    //             const response = await fetch(proxyurl +
    //                 "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=" + start + "&limit=" + limit + "&convert=" + convert,
    //                 // "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=10&convert=EUR",
    //                 {
    //                     headers: {
    //                         "X-CMC_PRO_API_KEY": "e1eb1f30-5c4e-43aa-be04-4b50df00807a"
    //                     }
    //                 });
    //             const { data: cryptos } = await response.json();

    //             if (cryptos) {
    //                 setCryptos(cryptos);
    //                 // setCurrency(convert)

    //             } else {
    //                 setCryptos([])
    //             }

    //         } catch (error) {
    //             console.log(error)
    //         }
    //         setLoading(false)
    //     }
    //     getAllCryptos()

    // }, [currency]);


    // let searchedCryptos = cryptos.filter(crypto => {
    //     return crypto.name.toLowerCase().startsWith(search);
    // })


    // const changeCurrency = (e) => {
    //     setCurrency(e)
    //     setLoading(true)
    // }

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