import React, { useState } from "react";
import AddTodo from "./AddTodo";
import ListItem from "./ListItem";

function List(props) {
  const data = props.items.map(item => {
    return { ...item, done: false };
  });

  const [state, setState] = useState(data);

  const nextId = state.length ? Math.max(state.map(item => item.id)) + 1 : 1;
  const onAddRandom = randomItem => {
    const newState = [...state, randomItem];
    setState(newState);
  };

  const handleCheck = id => {
    const newState = state.map(item => {
      if (item.id === id) {
        return { ...item, done: !item.done };
      }
      return item;
    });
    setState(newState);
  };

  const deleteItem = id => {
    setState(state.filter(item => item.id !== id));
  };

  const updateItem = (id, value) => {
    const newState = state.map(item => {
      if (item.id === id) {
        return { ...item, description: value };
      }
      return item;
    });
    setState(newState);
  };

  const items = state.map(item => (
    <ListItem
      key={item.id}
      item={item}
      onCheck={handleCheck}
      onDelete={deleteItem}
      onUpdate={updateItem}
    />
  ));

  return (
    <>
      {AddTodo(onAddRandom, nextId)}
      {state.length === 0 && <span>No items</span>}
      <ul>{items}</ul>
    </>
  );
}

export default List;
