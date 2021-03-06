import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ControlledTabs from './../Components/Tabs';
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import { Spinner } from "react-bootstrap"
import { FiSkipBack } from "react-icons/fi"
import { GrFavorite } from "react-icons/gr"
import { useGlobalContext } from "../Context"

export default function SingleCrypto({ ...props }) {
    const [loading, setLoading] = useState(false)
    const [oneCrypto, setOneCrypto] = useState(null)
    const { id } = useParams()
    const [pageId, setPageId] = useState(id)

    const { currency } = useGlobalContext()

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
        return <div className="spinner">
            <Spinner animation="border" variant="secondary" />
        </div>
    } if (oneCrypto === null) {
        return <h2>No Crypto Exists</h2>
    } else {

        return <>
            <div className="btn-container">
                <Button variant="outline-dark"><Link to="/"><FiSkipBack /></Link></Button>
                <Button variant="outline-dark"><Link to="/fave"><GrFavorite /></Link></Button>
            </div>

            <section>
                <div >
                    <img src={oneCrypto[pageId].logo} alt={oneCrypto[pageId].name} className="logo" />
                </div>
                <div>
                    <h2>{oneCrypto[pageId].name} - {oneCrypto[pageId].symbol}</h2>
                </div>
                <div>

                    <h2>{currency}: {props.quote[currency].price.toFixed(2)}</h2>
                    <h2>% {props.quote[currency].percent_change_24h.toFixed(2)}</h2>
                </div>
            </section>
            <ControlledTabs oneCrypto={oneCrypto} props={props} pageId={pageId} />

        </>
    }

}