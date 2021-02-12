const mysql = require('mysql');
const dotenv = require('dotenv')
dotenv.config({ path: './config/config.env' })

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.MYSQL_PASSWORD,
});

connection.connect((err) => {
  if (err) {
    throw err;

  }
  console.log('Connected!');
});


module.exports = connection;