const express = require('express')
const bodyParser = require('body-parser')
const mod = require('./modules/traverse')
const { jsonToCSV } = require('./modules/jsonToCSV')

const app = express()
const port = 3000

// STATIC FILE
app.use(express.static('client'))

// method inbuilt in express to recognize the incoming Request Object as strings or arrays.
app.use(express.urlencoded({ extended: false }))
// recognize the incoming Request Object as a JSON Object.
app.use(express.json())


app.post('/upload_json', async (req, res) => {
  let { data } = req.body;
  parsedData = JSON.parse(data);

  let traversedData = mod.traverse(parsedData)
  console.log(traversedData)

  res.redirect('/');
})

// app.post('/download', (req, res) => {
//   res.redirect('/');
// })


// SERVER CONNECTION
app.listen(port, () => {
  console.log(`Listening at PORT ${port}`)
})