const express = require('express')
const bodyParser = require('body-parser')
const traverse = require('./modules/traverse')

const app = express()
const port = 3000

// STATIC FILE
app.use(express.static('client'))

// method inbuilt in express to recognize the incoming Request Object as strings or arrays.
app.use(express.urlencoded({ extended: false }))
// recognize the incoming Request Object as a JSON Object.
app.use(express.json())


app.post('/upload_json', (req, res) => {
  // retrieve data from request body
  let { data } = req.body;

  // parse data to JSON format
  data = JSON.parse(data);
  console.log(data)

  // get all headers
  let headers = Object.keys(data).filter(key => key !== 'children');

  let traversedData = traverse(data);
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