import React, { useState } from "react";
import axios from 'axios'

export default function UpdateTodoForm({ selectedItem, setSelectedItem, getAllTodo }) {
  const [todo, setTodo] = useState("");

  function handleSubmit(e){
    e.preventDefault();

    axios.put(`http://localhost:3001/todo/${selectedItem.id}`, {todo})
      .then(() => {
        setSelectedItem({})
        getAllTodo()
      })
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
  )
}
