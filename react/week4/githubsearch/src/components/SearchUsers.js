import React, { useContext } from "react";
import { SearchContext } from "./../App";

function SearchUsers() {
  const { query, setQuery } = useContext(SearchContext);

  return (
    <section className="search">
      <input
        type="text"
        value={query}
        onChange={event => setQuery(event.target.value)}
        placeholder="Start typing name"
      />
    </section>
  );
}

export default SearchUsers;
