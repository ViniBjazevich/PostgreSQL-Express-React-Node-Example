const express = require('express')
const db = require('../database/index')
const app = express()
const cors = require('cors')
const port = 3001

app.use(cors())
app.use(express.json())

app.get('/demo', (req, res) => {
  db
    .query("SELECT * FROM demo")
    .then(response => res.send(response.rows))
    .catch(e => console.error(e.stack))
})

app.get('/todo', (req, res) => {
  db
    .query("SELECT * FROM todo")
    .then(response => res.send(response.rows))
    .catch(e => console.error(e.stack))
})

app.get('/', (req, res) => {
  res.send('Hello there!')
})

app.post('/todo', (req, res) => {
  let { todo } = req.body;

  db
    .query(`INSERT INTO todo (todo) VALUES ('${todo}')`)
    .then(() => res.status(200).send('Item added'))
    .catch(e => console.log(e))
})

app.put('/todo/:id', (req, res) => {
  let { todo } = req.body;
  let { id } = req.params;

  db
    .query(`UPDATE todo SET todo = '${todo}' WHERE id = ${id}`)
    .then(response => res.status(200).send(`Updated item to ${todo}`))
    .catch(e => console.log(e))
})

app.delete('/todo/:id', (req, res) => {
  let { id } = req.params;

  db
    .query(`DELETE FROM todo WHERE id = ${id}`)
    .then(response => res.status(200).send(`Deleted item with ID: ${id}`))
    .catch(e => console.log(e))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})