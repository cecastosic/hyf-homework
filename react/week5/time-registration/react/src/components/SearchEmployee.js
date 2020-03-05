import React, { useState } from "react";

function SearchEmployee({ shifts }) {
  const [query, setQuery] = useState("");

  const handleChange = event => {
    setQuery(event.target.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    shifts.setSearchName(query);
  };

  return (
    <section className="search">
      <form onSubmit={handleSubmit} className="search-employee">
        <input
          type="text"
          placeholder="Start typing name"
          onChange={event => handleChange(event)}
        />
        <button onClick={event => handleSubmit(event)}></button>
      </form>
    </section>
  );
}

export default SearchEmployee;
