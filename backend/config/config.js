import mysql2 from "mysql2";
import dotenv from 'dotenv';
dotenv.config();

// Create the connection pool
const pool = mysql2.createPool({
    host: process.env.host,
    database: process.env.database,
    user: process.env.user,
    password: process.env.password,
    multipleStatements: true,
    connectionLimit: 30,
});

// Test the connection
pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    
    console.log('Connected to MySQL server');

    // Release the connection back to the pool
    connection.release();
});

// Export the connection pool
export default pool;
