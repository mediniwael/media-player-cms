const express = require('express')
const path = require('path')

const app = express()

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.use(express.static('./public'))

app.get('/', (req, res) => {
  res.status(200).send('Hello');
});

app.get('/animation/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname,'./animation/index.html'));
});

app.get('/animation/animations/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname,'./animation/animations/index.html'));
});

app.all('*', (req, res) => {
  res.status(404).send('<H1>404 Not Found!</H1>')
})

app.listen(5000, () => {
  console.log("server is running")
})