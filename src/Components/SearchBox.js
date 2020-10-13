import React from "react";

const SearchBox = ({ search, setSearch }) => {
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