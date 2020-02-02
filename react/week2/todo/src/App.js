import React, { useState, useEffect } from "react";
import "./App.css";

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
    setTimeout(() => {
      setCount(prev => prev + 1);
    }, 1000);
  });

  return <p>You have used {count} seconds on this website</p>;
}



function List (props) {
  const [state, setDone] = useState([...props.items]);

  const addTodo = () => {
    // button add todo
    const addRandomItem = arr => {
      const newId = state.length ? Math.max(...arr.map(item => item.id)) + 1 : 1;
      arr.push({
        id: newId,
        description: "random text",
        done: false
      });
      setDone([...arr]);
    };
  
    return <button onClick={() => addRandomItem(state)}>Add todo</button>;
  }

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
          onChange={() => handleCheck(item.id)}
        />
        <button onClick={() => deleteItem(item.id)}>Delete</button>
      </li>
    );
  });

  return (
    <>
      {addTodo()}
      {state.length === 0 ? <span>No items</span> : <></>}
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
  // as future items from DB
  const arrListItems = [
    {
      id: 1,
      description: "Get out of bed",
      done: false
    },
    {
      id: 2,
      description: "Brush teeth",
      done: false
    },
    {
      id: 3,
      description: "Eat breakfast",
      done: false
    }
  ];

  // hooks
  const [state, setState] = useState(null);
  if (state === null) setTimeout(() => setState(arrListItems), 3000);

  return (
    // Render a basic static todo list with three items:
    <div className="App">
      <Header />
      <Counter />
      {state ? (
          <ListSection items={state} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
