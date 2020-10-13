import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function SingleCrypto() {
    const [loading, setLoading] = useState(false)
    const [oneCrypto, setOneCrypto] = useState(null)

    const { id } = useParams()

    useEffect(() => {
        async function getOneCrypto() {
            try {
                const proxyurl = "https://cors-anywhere.herokuapp.com/";
                const response = await fetch(proxyurl +
                    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?id=" +
                    id,
                    {
                        headers: {
                            "X-CMC_PRO_API_KEY": "e1eb1f30-5c4e-43aa-be04-4b50df00807a"
                        }
                    }
                )
                const data = await response.json()
                const mydata = data.data;
                setOneCrypto(mydata)
                console.log(oneCrypto)

            } catch (error) {
                console.log(error)
            }
        }
        getOneCrypto()
    }, [oneCrypto])



    return <>
        <h1>I am Single Crypto page</h1>
    </>
}