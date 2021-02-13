const db = require('../db/user.db')

exports.postUser = (req, res) => {
  const userData = req.body;

  db.query('INSERT INTO user SET ?', userData, (err, result) => {
    if (err) {
      throw err
    }
    console.log(result)
  })
  res.end()
}


