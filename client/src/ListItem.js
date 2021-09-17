import React from 'react'

export default function ListItem({ listEntry, setSelectedItem }) {
  return (
    <div onClick={() => setSelectedItem(listEntry)} style={{border: '1px solid black', padding: '10px', borderRadius: '5px', margin: '10px'}}>
      {listEntry.todo}
    </div>
  )
}
