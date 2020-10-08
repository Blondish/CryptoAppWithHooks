import React from "react";
import { useState, useEffect } from "react"
import RenderTable from '../Components/Table';
import SearchForm from "../Components/SearchForm";

export const Home = () => {
    const [cryptos, setCryptos] = useState([])
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("")

    useEffect(() => {
        setLoading(true)
        const getAllCryptos = async () => {
            try {
                const proxyurl = "https://cors-anywhere.herokuapp.com/";
                const response = await fetch(proxyurl +
                    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
                    {
                        headers: {
                            "X-CMC_PRO_API_KEY": "e1eb1f30-5c4e-43aa-be04-4b50df00807a"
                        }
                    });
                const { data: cryptos } = await response.json();

                if (cryptos) {
                    setCryptos(cryptos);

                } else {
                    setCryptos([])
                }

            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        }
        getAllCryptos()

    }, [search]);


    return (
        <div className="container">
            <h1 className="title">Top Ranked Cryptos</h1>
            <SearchForm setSearch={setSearch} />
            <RenderTable loading={loading} cryptos={cryptos} />
        </div>
    );
}