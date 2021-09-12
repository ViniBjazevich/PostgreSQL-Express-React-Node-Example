import React from 'react'
import ListItem from './ListItem'

export default function ListTodos({ todoList }) {
  return (
    <div>
      <h2>To do list:</h2>
      <div>{todoList.map((listEntry) => <ListItem listEntry={listEntry} key={listEntry.id}/>)}</div>
    </div>
  )
}
