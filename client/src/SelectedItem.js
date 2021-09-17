import React, { useState } from 'react'
import axios from 'axios'

import UpdateTodoForm from './UpdateTodoForm'

export default function SelectedItem({ selectedItem, getAllTodo, setSelectedItem }) {
  const [toggleUpdate, setToggleUpdate] = useState(false)

  function deleteTodo() {
    axios.delete(`http://localhost:3001/todo/${selectedItem.id}`)
      .then(() => {
        setSelectedItem({});
        getAllTodo();
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <div>
      <h2>Selected Item:</h2>
      <div style={{display: 'flex'}}>
        <h3 style={{margin: '0 1rem 0 0'}}>{selectedItem.id}</h3>
        <h3 style={{margin: '0 0 0 1rem'}}>{selectedItem.todo}</h3>
        <button onClick={deleteTodo}>Delete</button>
        <button onClick={() => setToggleUpdate((prev) => !prev)}>{toggleUpdate ? 'Cancel Update': 'Update'}</button>
      </div>
      {(toggleUpdate) ? <UpdateTodoForm selectedItem={selectedItem}
      getAllTodo={getAllTodo} setSelectedItem={setSelectedItem}/> : null}
    </div>
  )
}
