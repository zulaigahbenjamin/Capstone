import mysql2 from "mysql2";
import dotenv from 'dotenv';
dotenv.config();

// create the connection to database

const db = mysql2.createConnection({
        host     : process.env.host,
        database : process.env.database,
        user     : process.env.user,
        password : process.env.password,
  multipleStatements: true,
  connectionLimit:30,
});

db.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL server');
  });

export default db;
