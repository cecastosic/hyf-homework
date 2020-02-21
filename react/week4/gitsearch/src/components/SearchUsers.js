import React from "react";

function SearchUsers({ query, setQuery }) {
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
