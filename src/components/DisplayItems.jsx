import React, { useState } from "react";

const DisplayItems = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function onChange(e) {
    setInputValue(e.target.value);
    console.log(inputValue);
  }
  function onSubmit(e) {
    e.preventDefault();
    setTodos([...todos, inputValue]);
    console.log(todos);
    setInputValue("");
  }
  function onDelete(index) {
      const newTodos = [...todos]
      newTodos.splice(index,1)
      setTodos(newTodos)
  }

  return (
    <div>
      <form>
        <input type="text" value={inputValue} onChange={onChange} />
        <button onClick={onSubmit}>Add </button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={()=>onDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayItems;
