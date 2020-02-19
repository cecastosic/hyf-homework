import React, { useState } from "react";

function ListItem({ item, onCheck, onDelete, onUpdate }) {
console.log("item " + item.id);
  const [edit, setEdit] = useState(false);
  const [description, setDescription] = useState(item.description);

  const editItem = id => {
    if (edit) onUpdate(id, description);
    setEdit(!edit);
  };

  return (
    <li key={item.id}>
      <span className={item.done ? "line-through" : "no-decoration"}>
        {edit ? (
          <input
            type="text"
            value={description}
            onChange={event => setDescription(event.target.value)}
          />
        ) : (
          <>
            {description} | {item.deadline}
          </>
        )}
      </span>
      <input
        type="checkbox"
        name={item.description}
        checked={item.done && "checked"}
        onChange={() => onCheck(item.id)}
      />
      <button onClick={() => onDelete(item.id)}>Delete</button>
      <button onClick={() => editItem(item.id)}>
        {!edit ? "Edit" : "Update"}
      </button>
    </li>
  );
}

function areEqual(prevProps, nextProps) {
  return (
    prevProps.description === nextProps.description &&
    prevProps.deadline === nextProps.deadline
  );
}

export default React.memo(ListItem, areEqual);