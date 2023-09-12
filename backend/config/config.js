

require("dotenv").config()

const {createPool} = require("mysql2")

const db = createPool({
  host: process.env.host,
  database: process.env.database, 
  user: process.env.user,
  port: process.env.port,
  password: process.env.password,
  port: 3306,
  multipleStatements: true,
  connectionLimit: 5000000000,
});


module.exports = db;