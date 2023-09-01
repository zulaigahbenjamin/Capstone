// models/user.js

// const pool = require("../config/config.js")
import pool from '../config/config.js'

const User = {
  createUser(firstName, lastName, emailAddress, pwd) {
    return pool.execute(
      "INSERT INTO Users (firstName, lastName, emailAddress, pwd) VALUES (?, ?, ?, ?)",
      [firstName, lastName, emailAddress, pwd]
    )
    .then(([result]) => result.insertId);
  },

  getAllUsers() {
    return pool.query("SELECT * FROM Users")
      .then(([users]) => users);
  },
  // ... more functions
};
export default User;
