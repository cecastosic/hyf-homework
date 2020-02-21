import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Loader from "./components/Loader";
import UsersList from "./components/UsersList";

function App() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    if (query !== "") {
      const url = `https://api.github.com/search/users?q=${query}`;
      setLoading(true);
      const users = await fetch(url, {
        headers: {
          Authorization:
            "Basic " +
            btoa(
              `${process.env.REACT_APP_GITHUB_NAME}:${process.env.REACT_APP_GITHUB_PW}`
            )
        }
      })
        .then(data => data.json())
        .catch(error => console.log(error));
      console.log(users.items);
      setUsers(users.items);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [query]);

  return (
    <div className="App">
      <Header />
      <section className="search">
        <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
          placeholder="Start typing name"
        />
      </section>
      <section id="results">
        {loading ? <Loader /> : <UsersList users={users} />}
      </section>
    </div>
  );
}

export default App;
