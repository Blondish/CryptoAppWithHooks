import React from "react";
import { useState, useEffect } from "react"
import RenderTable from '../Components/Table';
import SearchBox from './../Components/SearchBox';

export const Home = () => {
    const [cryptos, setCryptos] = useState([])
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("")
    const [currency, setCurrency] = useState("")

    useEffect(() => {
        setLoading(true)
        const getAllCryptos = async () => {
            try {
                let start = 1;
                let limit = 10;
                let convert = "USD"
                const proxyurl = "https://cors-anywhere.herokuapp.com/";
                const response = await fetch(proxyurl +
                    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=" + start + "&limit=" + limit + "&convert=" + convert,
                    // "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=10&convert=EUR",
                    {
                        headers: {
                            "X-CMC_PRO_API_KEY": "e1eb1f30-5c4e-43aa-be04-4b50df00807a"
                        }
                    });
                const { data: cryptos } = await response.json();

                if (cryptos) {
                    setCryptos(cryptos);
                    setCurrency(convert)

                } else {
                    setCryptos([])
                }

            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        }
        getAllCryptos()

    }, []);


    let searchedCryptos = cryptos.filter(crypto => {
        return crypto.name.toLowerCase().startsWith(search);
    })

    return (


        <div className="container">
            <h1 className="title">Top Ranked Cryptos</h1>
            <SearchBox search={search} setSearch={setSearch}></SearchBox>
            {/* <SearchForm setSearch={setSearch} /> */}
            <RenderTable loading={loading} cryptos={searchedCryptos} currency={currency} />
        </div>
    );
}