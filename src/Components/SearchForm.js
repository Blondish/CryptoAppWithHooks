import React from "react";

export default function SearchForm({ setSearch }) {

    const searchValue = React.useRef("")
    React.useEffect(() => {
        searchValue.current.focus()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const searchCrypto = () => {
        setSearch(searchValue.current.value)
    }

    return <section>

        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Search for crypto </label>
                <input type="text" name="name" id="name" onChange={searchCrypto} ref={searchValue} />
            </div>
        </form>
    </section>;
}
