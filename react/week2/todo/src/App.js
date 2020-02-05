import React, { useState, useEffect } from "react";
import "./App.css";
import data from "./data/data.json";

function Header() {
  return (
    <header className="App-header">
      <h1>Todo List</h1>
    </header>
  );
}

function Counter() {
  // timer that counts how long time a users has spent on the website
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount(prev => prev + 1);
    }, 1000);
    return (() => clearTimeout(timer)); 
  });

  return <p>You have used {count} seconds on this website</p>;
}

function List(props) {
  const [state, setDone] = useState([...props.items]);

  const addTodo = () => {
    // button add todo
    const addRandomItem = arr => {
      const newId = arr.length ? Math.max(...arr.map(item => item.id)) + 1 : 1;
      arr.push({
        id: newId,
        description: "random text",
        done: false
      });
      setDone([...arr]);
    };

    return <button onClick={() => addRandomItem(state)}>Add todo</button>;
  };

  const handleCheck = id => {
    state.filter(item => item.id === id).map(item => (item.done = !item.done));
    setDone([...state]);
  };

  const deleteItem = id => {
    setDone([...state.filter(item => item.id !== id)]);
  };

  const items = state.map(item => {
    return (
      <li key={item.id}>
        <span className={item.done ? "line-through" : "no-decoration"}>
          {item.description}
        </span>
        <input
          type="checkbox"
          name={item.description}
          checked={item.done && "checked"}
          onChange={() => handleCheck(item.id)}
        />
        <button onClick={() => deleteItem(item.id)}>Delete</button>
      </li>
    );
  });

  return (
    <>
      {addTodo()}
      {state.length === 0 && <span>No items</span>}
      <ul>{items}</ul>
    </>
  );
}

function ListSection(props) {
  return (
    <section className="List">
      <List items={props.items} />
    </section>
  );
}

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
