const mysql = require("mysql")
require('dotenv').config()

// MYSQL
var db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE
})

module.exports = db