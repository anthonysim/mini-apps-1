const express = require('express')
const fs = require('fs')
const mod = require('./modules/traverse')
const csv = require('./modules/jsonToCSV')

const app = express()
const port = 3000

// STATIC FILE
// app.use(express.static('client'))
app.set('views', './client/views')
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(__dirname + '/client'));


// GETs
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/upload_json', (req, res) => {


  let { data } = req.body;
  console.log(data)
  // parsedData = JSON.parse(data);

  // let traversedData = mod.traverse(parsedData)
  // console.log(traversedData)

  // res.render('./index', { data: traversedData })
})

// app.post('/download', (req, res) => {

//   res.render('./index')
// })


// SERVER CONNECTION
app.listen(port, () => {
  console.log(`Listening at PORT ${port}`)
})