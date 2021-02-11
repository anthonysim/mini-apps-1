const express = require('express')
const app = express()


app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.post('/user', (req, res) => {
  console.log(req.body)
  res.json({ messsage: 'it works!' })
})


const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Listening on PORT ${PORT} 👍!`))