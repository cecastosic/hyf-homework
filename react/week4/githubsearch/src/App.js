import React, { useState, useEffect, createContext } from "react";
import { useDebounce } from 'use-debounce';
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
  const [debouncedQuery] = useDebounce(query, 250);

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
    fetchUsers(debouncedQuery);
  }, [debouncedQuery]);

  return (
    <div className="App">
      <SearchContext.Provider value={{ query, setQuery, users }}>
        <Header />
        <SearchUsers />
        {users && (
          <section>
            {error && <div>{error}</div>}
            {loading && !error ? <Loader /> : <UsersList />}
          </section>
        )}
      </SearchContext.Provider>
    </div>
  );
}

export default App;
