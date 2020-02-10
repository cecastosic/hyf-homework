import React, { useState } from "react";
import "./App.css";
import data from "./data/data.json";
import Header from "./components/Header";
import Counter from "./components/Counter";
import ListSection from "./components/ListSection";

function App() {
  // hooks
  const [state, setState] = useState(null);
  if (state === null) setTimeout(() => setState(data), 3000);

  return (
    // Render a basic static todo list with three items:
    <div className="App">
      <Header />
      <Counter />
      {state ? <ListSection items={state} /> : <p>Loading...</p>}
    </div>
  );
}

export default App;
