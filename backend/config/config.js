
// const {createPool} = require("mysql2");
// const dotenv = require('dotenv')
require("dotenv").config()
const {createPool} = require("mysql2")
// dotenv.config();

// create the connection to the database
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

// db.getConnection((err, connection) => {
//   if (err) {
//     console.error('Error connecting to MySQL:', err);
//     return;
//   }
//   console.log('Connected to MySQL database.');
//   connection.release(); 
// });

module.exports = db;

// // Export the devServer configuration as a default export
// export default {
//   devServer: {
//     proxy: {
//       '/api': {
//         target: 'http://localhost:3000/',
//         changeOrigin: true,
//         pathRewrite: {
//           '^/api': '',
//         },
//       },
//     },
//   },
// };







