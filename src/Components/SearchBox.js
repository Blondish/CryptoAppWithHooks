import React from "react";
import { useGlobalContext } from "../Context"

const SearchBox = () => {
    const { search, setSearch } = useGlobalContext()
    return (
        <input
            type="text"
            name="search"
            className="form-control my-3"
            placeholder="Search..."
            value={search}
            onChange={e => setSearch(e.target.value)}
        />
    );
};

export default SearchBox;