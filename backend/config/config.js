import {createPool} from "mysql2";
import dotenv from 'dotenv';
// const {createPool} = require("mysql2");
// const dotenv = require('dotenv')

dotenv.config();

// create the connection to the database
const db = createPool({
  host: process.env.host,
  database: process.env.database, 
  user: process.env.user,
  port: process.env.port,
  password: process.env.password,
  port: 3306,
  multipleStatements: true,
  connectionLimit: 50,
});

db.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database.');
  connection.release(); 
});


export default db;
