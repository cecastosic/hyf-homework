import React, { useState, useEffect, createContext } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchUsers from "./components/SearchUsers";
import Loader from "./components/Loader";
import UsersList from "./components/UsersList";

export const SearchContext = createContext();

function App() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUsers = async query => {
    if (query !== "") {
      const url = `https://api.github.com/search/users?q=${query}`;
      setLoading(true);
      const users = await fetch(url)
        .then(data => data.json())
        .catch(error => setError(error.message));

      setUsers(users.items);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(query);
  }, [query]);

  return (
    <div className="App">
      <SearchContext.Provider value={{ query, setQuery, users }}>
        <Header />
        <SearchUsers />
        {users && (
          <section id="results">
            {error && <div>{error}</div>}
            {loading && !error ? <Loader /> : <UsersList />}
          </section>
        )}
      </SearchContext.Provider>
    </div>
  );
}

export default App;
