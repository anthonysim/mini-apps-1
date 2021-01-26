const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

// STATIC FILE
app.use(express.static('client'))

// recognize the incoming Request Object as a JSON Object.
app.use(express.json())
// app.use(bodyParser.json());

// method inbuilt in express to recognize the incoming Request Object as strings or arrays.
app.use(express.urlencoded({ extended: true }))


app.post('/upload_json', (req, res) => {
  let data = req.body
  console.log(data)
  res.redirect('/');
})


// SERVER CONNECTION
app.listen(port, () => {
  console.log(`Listening at PORT ${port}`)
})