import React, { useContext, useState, useEffect } from "react"

const AllCryptoContext = React.createContext()

export const AllCryptoProvider = ({ children }) => {
    const [cryptos, setCryptos] = useState([])
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("")
    const [currency, setCurrency] = useState("USD")

    useEffect(() => {
        const getAllCryptos = async () => {
            try {
                let start = 1;
                let limit = 10;
                let convert = currency
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
                    // setCurrency(convert)

                } else {
                    setCryptos([])
                }

            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        }
        getAllCryptos()

    }, [currency]);

    let searchedCryptos = cryptos.filter(crypto => {
        return crypto.name.toLowerCase().startsWith(search);
    })


    const changeCurrency = (e) => {
        setCurrency(e)
        setLoading(true)
    }


    return <AllCryptoContext.Provider
        value={{
            cryptos,
            loading,
            search,
            setSearch,
            currency,
            searchedCryptos,
            changeCurrency
        }}>
        {children}
    </AllCryptoContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AllCryptoContext)
}