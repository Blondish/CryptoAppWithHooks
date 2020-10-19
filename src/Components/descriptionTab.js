import React from "react"

export default function Description({ oneCrypto, pageId }) {
    console.log(oneCrypto)

    return <>
        <section className="container">
            <p>{oneCrypto[pageId].description}</p>
        </section>
        <section className="container">
            <h5 >follow the below links for additional information about {oneCrypto[pageId].name}</h5>
            <ul>

                <li><a href={oneCrypto[pageId].urls.website[0]}>{oneCrypto[pageId].urls.website[0]}</a></li>
                <li><a href={oneCrypto[pageId].urls.twitter[0]}>{oneCrypto[pageId].urls.twitter[0]}</a></li>
                <li><a href={oneCrypto[pageId].urls.explorer[0]}>{oneCrypto[pageId].urls.explorer[0]}</a></li>
            </ul>
        </section>
    </>
}