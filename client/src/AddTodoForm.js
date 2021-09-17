import React, { useState } from "react";
import axios from 'axios'

export default function AddTodoForm({ getAllTodo }) {
  const [todo, setTodo] = useState("");


  function handleSubmit(e){
    e.preventDefault();

    axios.post(`http://localhost:3001/todo`, {todo})
      .then(() => getAllTodo())
      .catch(error => console.log(error))
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={todo}
        onChange={e => setTodo(e.target.value)}
        placeholder="I need to do..."
        type="text"
        name="todo"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}