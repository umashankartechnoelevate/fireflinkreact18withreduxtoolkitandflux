import React, { useEffect, useState } from "react";
import TodoStore from "../../Stores/postStore";
import { addToDo, deleteTodo } from "../../Actions/postActions";

const TodoList = () => {
  const [todos, setTodos] = useState(TodoStore.getAllTodos());
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addToDo(text);
    setText("");
  };

  useEffect(() => {
    const handleTodoChange = () => {
      setTodos(TodoStore.getAllTodos());
    };

    // TodoStore.register(handleTodoChange);

    // return () => {
    //   TodoStore.unregister(handleTodoChange);
    // };
  }, []);

  const deleteTodoFunction = (id) => {
    console.log("delete to id in delete button action", id);
    deleteTodo(id);
  };

  return (
    <>
      <h1>Flux example with todo</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange} />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.text}{" "}
            <span style={{ marginLeft: "30px" }}>
              <button
                onClick={() => {
                  deleteTodoFunction(index);
                }}
              >
                DELETE_TODO
              </button>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
