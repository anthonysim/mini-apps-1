const express = require('express')
const app = express()
const port = 3000

// STATIC FILE
app.use(express.static('public'))

// SERVER CONNECTION
app.listen(port, () => {
  console.log(`Listening at PORT ${port}`)
})