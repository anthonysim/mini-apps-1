const express = require('express')
const fs = require('fs')

// MIDDLEWARE FOR UPLOADS
const multer = require('multer')

// IMPORT METHODS CREATED TO MANIPULATE INCOMING DATA
const { traverse } = require('./modules/traverse')
const { convertCSV } = require('./modules/jsonToCSV')

const app = express()
const port = 3000

// VIEW ENGINE
app.set('views', './client/views')
app.set('view engine', 'ejs');

// STATIC FILE
app.use(express.static(__dirname + '/client'));


// POST INCOMING DATA
// app.use(express.urlencoded({ extended: true }))
// parse application/json
app.use(express.json())


// GET ROUTE
app.get('/', (req, res) => {
  res.render('./index')
})

// POST DOWNLOAD DATA
app.get('/download', (req, res) => {
  try {
    res.download(__dirname + '/uploads/csv_report.csv');

  } catch (err) {
    console.error(err)
  }
})


// POST UPLOAD TEXTAREA VERSION
// app.post('/upload_json', (req, res) => {
// TEXTAREA
// let { data } = req.body;
// parsedData = JSON.parse(data);

// let traversedData = traverse(parsedData)
// console.log(traversedData)

// res.render('./index', { data: traversedData })
// })

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + '/uploads')
  },
  filename: function (req, file, cb) {
    const { originalname } = file;
    console.log(originalname)
    cb(null, originalname)
  }
})

const upload = multer({ storage: storage })

// POST UPLOAD FILE PICKER / UPLOAD VERSION THROUGH THE FORM VERSION
// app.post('/upload', upload.single('avatar'), (req, res) => {
//   console.log(req.body)
//   try {
//     let data = fs.readFileSync(__dirname + '/uploads/sales_report.json')
//     let parsedData = JSON.parse(data.toString());
//     let traversedData = traverse(parsedData)
//     let csvData = convertCSV(traversedData)

//     fs.writeFileSync(__dirname + '/uploads/csv_report.csv', csvData)

//     res.render('./index', { data: traversedData })

//   } catch (err) {
//     console.error(err)
//   }
//   res.render('./index')
// })

// POST UPLOAD FILE PICKER / UPLOAD WITH JQUERY AJAX REQUEST VERSION
app.post('/upload', upload.single('avatar'), (req, res) => {

  try {
    let data = req.body;
    let jsonFile = fs.writeFileSync(__dirname + '/uploads/sales_report.json', JSON.stringify(data))

    let traversedData = traverse(data);
    let csvData = convertCSV(traversedData);
    console.log(traversedData)

    fs.writeFileSync(__dirname + '/uploads/csv_report.csv', csvData)
    console.log(traversedData)
    // res.render('./index', { data: traversedData })
    res.send({ data: traversedData })


  } catch (err) {
    console.error(err);
  }
})



// SERVER CONNECTION
app.listen(port, () => {
  console.log(`Listening on PORT ${port} ???? !`)
})