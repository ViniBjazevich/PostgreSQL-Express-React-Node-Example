import React, { useState } from "react";
import axios from 'axios'

function Form({updateTodoList}) {
  const [todo, setTodo] = useState("");


  function handleSubmit(e){
    console.log('SUBMIT PRESSED!')
    e.preventDefault();
    axios
      .post(`http://localhost:3001/todo`, {todo})
      .then((res) => {
        console.log("~ res", res)
        updateTodoList();
      })
      .catch((error) => {
        console.log(error);
      });

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
export default Form;