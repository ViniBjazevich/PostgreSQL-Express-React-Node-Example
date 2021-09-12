const express = require('express')
const db = require('../database/index')
const app = express()
const cors = require('cors')
const port = 3001

app.use(cors())


app.get('/', (req, res) => {
  db
    .query("SELECT * FROM demo")
    .then(response => res.send(response.rows))
    .catch(e => console.error(e.stack))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})