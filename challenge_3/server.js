const express = require('express')
const app = express()
const dotenv = require('dotenv')
const userRouter = require('./routes/user.route')
// const Model = require('./model/model.js');

// private configs
dotenv.config({ path: './config/config.env' })

app.use(express.static('public'))

// request middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// routes
app.use('/', userRouter)


// connected server!
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Listening on PORT ${PORT} 👍!`))

// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  // .catch(err => console.error('Did not connect!'))

