import React, { useState, useEffect } from "react";
import "./App.css";
//import FetchData from "./components/FetchData";
import Header from "./components/Header";
import Counter from "./components/Counter";
import ListSection from "./components/ListSection";

function App() {
  // data
  const [data, setData] = useState([]);
  //const [hasError, setErrors] = useState(false);

  useEffect(() => {
    fetch("https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw")
              .then(res => res.json())
              .then(data => setData(data))
              .catch(err => console.log(err));
    }, []);

  return (
    // Render a basic static todo list with three items:
    <div className="App">
      <Header />
      <Counter />
      {data.length === 0 ? <p>Loading</p> : <ListSection  items={data} />}
    </div>
  );
}

export default App;
