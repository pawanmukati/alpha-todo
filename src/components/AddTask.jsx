import React, { useState } from "react";

const AddTask = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function onChange(e) {
    setInputValue(e.target.value);
    console.log(inputValue);
  }
  function submitHandler(e) {
    e.preventDefault();
    setTodos([...todos, inputValue]);
    setInputValue("");
  }

  function deleteHandler(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    console.log(newTodos);
    console.log(index);
  }

  return (
    <div>
      <form>
        <input type="text" value={inputValue} onChange={onChange} />
        <button onClick={submitHandler}>Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteHandler(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddTask;
