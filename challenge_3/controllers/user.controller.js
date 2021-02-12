const db = require('../db/user.db')

exports.postUser = (req, res) => {
  console.log(db.query)
  console.log(req.body)
  res.end()
}


