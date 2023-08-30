import mysql2 from "mysql2";
import dotenv from 'dotenv';

dotenv.config();

// create the connection to database
const db = mysql2.createPool({
  host     : process.env.host,
  database : process.env.database,
  user     : process.env.user,
  password : process.env.password,
  multipleStatements: true,
  connectionLimit:30,
});

export default db;


