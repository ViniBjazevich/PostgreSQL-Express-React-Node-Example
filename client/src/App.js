import React, { useState, useEffect } from 'react'
import axios from 'axios'

import AddTodoForm from './AddTodoForm'
import ListTodos from './ListTodos';
import SelectedItem from './SelectedItem';

function App() {
  const [todoList, setTodoList] = useState([])
  const [selectedItem, setSelectedItem] = useState({})

  function getAllTodo() {
    axios.get('http://localhost:3001/todo')
      .then(response => setTodoList(response.data))
      .catch((e) => console.log(e))
  }


  useEffect(() => {
    getAllTodo()
  }, [])


  return (
    <div>
      <h1>Add a todo:</h1>
      <AddTodoForm getAllTodo={getAllTodo}/>
      {selectedItem.id ? <SelectedItem selectedItem={selectedItem} getAllTodo={getAllTodo} setSelectedItem={setSelectedItem}/> : null}
      <ListTodos todoList={todoList} setSelectedItem={setSelectedItem}/>
    </div>
  );
}



export default App;