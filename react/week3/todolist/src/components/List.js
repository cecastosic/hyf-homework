import React, { useState } from "react";
import AddTodo from "./AddTodo";

function List(props) {
 
  const data = props.items.map(item => {
    return {...item, done: false}
  });
  console.log(data);
  const [state, setState] = useState(data);
  
  const nextId = state.length ? Math.max(...state.map(item => item.id)) + 1 : 1;
  const onAddRandom = randomItem => {
    const newState = [...state].concat(randomItem);
    setState(newState);
  };

  const handleCheck = id => {
    const newState = state.map(item => {
      if (item.id === id) {
        return { ...item, done: true };
      }
      return item;
    });
    setState(newState);
  };

  const deleteItem = id => {
    setState(state.filter(item => item.id !== id));
  };

  //const [updateDescription, setUpdateDescription] = useState("");
  const [edit, setEdit] = useState(false);

  const handleChange = (id, value) => {
    const newDescription = state
                            .filter(item => item.id === id)
                            .map(item => {
                              return {...item, description: value }
                            });
    setState(newDescription);
  }

  const editItem = id => {
    setEdit(true);
    if (edit) {      
      setEdit(false);
    }
  };

  const items = state.map(item => {
    return (
      <li key={item.id}>
        <span className={item.done ? "line-through" : "no-decoration"}>
          {
            (edit) 
            ? 
            <input type="text" value={item.description} onChange={(event) => handleChange(item.id, event.target.value)} />
            : 
            <>{item.description} | {item.deadline}</>
          }
        </span>
        <input
          type="checkbox"
          name={item.description}
          checked={item.done && "checked"}
          onChange={() => handleCheck(item.id)}
        />
        <button onClick={() => deleteItem(item.id)}>Delete</button>
        <button onClick={() => editItem(item.id)}>{(!edit) ? "Edit" : "Update"}</button>
      </li>
    );
  });

  return (
    <>
      {AddTodo(onAddRandom, nextId)}
      {state.length === 0 && <span>No items</span>}
      <ul>{items}</ul>
    </>
  );
}

export default List;
