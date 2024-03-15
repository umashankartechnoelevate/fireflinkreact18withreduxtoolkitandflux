import React, { useState } from "react";
import { addTodo } from "../actions/TodoActions";

const AddTodoForm = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleChange} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodoForm;
