import React, { useState } from "react";
import DatePicker from "react-date-picker";

function AddTodo(onAddRandom, nextId) {

    // button add todo
    const [description, setDescription] = useState("");
    const [deadline, setDeadline] = useState("");
    const [value, setValue] = useState(new Date());

    
    const addRandomArr = () => {
        onAddRandom({
            id: nextId,
            description: description,
            deadline: deadline,
            done: false
        });
    };

    return (
        <form>
            <label>
                <span>Todo description:</span>
                <input 
                    type="text" 
                    placeholder="todo description" 
                    name="description" 
                    onChange={(event) => setDescription(event.target.value)}
                />
            </label>
            <br />
            <label>
                <span>Deadline:</span>
                <DatePicker 
                    value={value}
                    onChange={(event) => {
                        setValue(event);
                        setDeadline(event.toLocaleDateString());
                    }
                    }
                />
            </label>
            <br />
            <button
                onClick={(event) => {
                    event.preventDefault();
                    if (description && deadline) addRandomArr();
                    // clear form?
                }}
            >
                Add todo
            </button>
        </form>
    );
  };

export default AddTodo;