import React from "react"

export default function Description({ oneCrypto, pageId }) {


    return <>
        <section className="container">
            <p className="desc-text">{oneCrypto[pageId].description}</p>
        </section>
        <section className="container">
            <div className="desc-content">
                <h5>Follow the below links for additional information about {oneCrypto[pageId].name}</h5>
                <ul>
                    <li><a href={oneCrypto[pageId].urls.website[0]}>{oneCrypto[pageId].urls.website[0]}</a></li>
                    <li><a href={oneCrypto[pageId].urls.twitter[0]}>{oneCrypto[pageId].urls.twitter[0]}</a></li>
                    <li><a href={oneCrypto[pageId].urls.explorer[0]}>{oneCrypto[pageId].urls.explorer[0]}</a></li>
                    <li><a href={oneCrypto[pageId].urls.reddit[0]}>{oneCrypto[pageId].urls.reddit[0]}</a></li>
                    <li><a href={oneCrypto[pageId].urls.source_code[0]}>{oneCrypto[pageId].urls.source_code[0]}</a></li>
                    <li><a href={oneCrypto[pageId].urls.message_board[0]}>{oneCrypto[pageId].urls.message_board[0]}</a></li>
                    <li><a href={oneCrypto[pageId].urls.chat[0]}>{oneCrypto[pageId].urls.chat[0]}</a></li>
                    <li><a href={oneCrypto[pageId].urls.technical_doc[0]}>{oneCrypto[pageId].urls.technical_doc[0]}</a></li>
                </ul>
            </div>
        </section>
    </>
}