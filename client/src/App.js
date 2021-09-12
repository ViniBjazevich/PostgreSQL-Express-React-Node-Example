import React, { useState, useEffect } from 'react'
import Axios from 'axios';

function App() {
  const [query, setQuery] = useState([])

  function getAll() {
    Axios.get('http://localhost:3001/')
      .then(response => {
        setQuery(response.data)
      })
      .catch((e) => console.log(e))
  }

  useEffect(() => {
    setQuery(getAll)
  }, [])


  return (
    <div>
      <h1>My app:</h1>
      <div>{query?.[0]?.username}</div>
    </div>
  );
}



export default App;