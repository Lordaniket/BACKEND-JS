require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/piyush', (req, res) => {
    res.send("Hello User");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/hello', (req, res) => {
    res.send("Hello there, lets play a game")
})

