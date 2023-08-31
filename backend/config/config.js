import mysql2 from "mysql2";
import dotenv from 'dotenv';

dotenv.config();

// create the connection to the database
const db = mysql2.createPool({
  host: process.env.host,
  database: process.env.database, 
  user: process.env.user,
  password: process.env.password,
  multipleStatements: true,
  connectionLimit: 30,
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
