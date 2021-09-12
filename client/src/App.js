import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Form from './Form'
import ListTodos from './ListTodos';

function App() {
  const [demo, setDemo] = useState([])
  const [todoList, setTodoList] = useState([])

  function getAllDemo() {
    axios.get('http://localhost:3001/demo')
      .then(response => {
        setDemo(response.data)
      })
      .catch((e) => console.log(e))
  }

  function getAllTodo() {
    axios.get('http://localhost:3001/todo')
      .then(response => {
        setTodoList(response.data)
      })
      .catch((e) => console.log(e))
  }

  useEffect(() => {
    getAllDemo()
    getAllTodo()
  }, [])


  return (
    <div>
      <h1>My app:</h1>
      <Form updateTodoList={getAllTodo}/>
      <div>{demo?.[0]?.username}</div>
      <ListTodos todoList={todoList}/>
    </div>
  );
}



export default App;