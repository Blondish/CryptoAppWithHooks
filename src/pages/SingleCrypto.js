import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function SingleCrypto() {
    const [loading, setLoading] = useState(false)
    const [oneCrypto, setOneCrypto] = useState({})

    const { id } = useParams()

    useEffect(() => {
        setLoading(true)
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
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        getOneCrypto()
    }, [id])


    if (loading) {
        return <h2>Loading...</h2>
    } if (oneCrypto === null) {
        return <h2>No Crypto Exists</h2>
    } else {

        return <>

            {console.log(oneCrypto)}
            <section>
                <div>
                    <img src={oneCrypto.logo} alt={oneCrypto.name} />
                    <h2>{oneCrypto.name}</h2>
                </div>
            </section>
        </>
    }

}