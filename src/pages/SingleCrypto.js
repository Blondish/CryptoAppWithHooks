import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function SingleCrypto({ ...props }) {
    const [loading, setLoading] = useState(false)
    const [oneCrypto, setOneCrypto] = useState(null)
    const { id } = useParams()
    const [pageId, setPageId] = useState(id)

    console.log(props)


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
                setPageId(id)
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
            <section className="container">
                <div >
                    <img src={oneCrypto[pageId].logo} alt={oneCrypto[id].name} />
                    <h2>{oneCrypto[pageId].name}</h2>
                    <h2>{props.num_market_pairs}</h2>
                </div>
            </section>
        </>
    }

}