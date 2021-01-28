const express = require('express')
const fs = require('fs')
// const bodyParser = require('body-parser')

// MIDDLEWARE FOR UPLOADS
const multer = require('multer')

// IMPORT OF METHODS CREATED TO MANIPULATE INCOMING DATA
const mod = require('./modules/traverse')
const csv = require('./modules/jsonToCSV')

const app = express()
const port = 3000

// VIEW ENGINE
app.set('views', './client/views')
app.set('view engine', 'ejs');

// STATIC FILE
app.use(express.static(__dirname + '/client/views/stylesheets'));
app.use(express.static('client'))

// POST INCOMING DATA
app.use(express.urlencoded({ extended: true }))
// parse application/json
// app.use(express.json())




// GET ROUTE
app.get('/', (req, res) => {
  res.render('index')
})

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + '/uploads')
  },
  filename: function (req, file, cb) {
    const { originalname } = file;
    cb(null, originalname)
  }
})

const upload = multer({ storage: storage })

// POST UPLOAD FILE PICKER / UPLOAD
app.post('/upload_json', upload.single('avatar'), (req, res) => {

  console.log(req)
  res.render('./index')
})









// POST UPLOAD JSON TEXTAREA
// app.post('/upload_json', (req, res) => {
// TEXTAREA
// let { data } = req.body;
// parsedData = JSON.parse(data);

// let traversedData = mod.traverse(parsedData)
// console.log(traversedData)

// res.render('./index', { data: traversedData })
// })

// POST DOWNLOAD DATA
// app.post('/download', (req, res) => {

//   res.render('./index')
// })


// SERVER CONNECTION
app.listen(port, () => {
  console.log(`Listening at PORT ${port}`)
})