// models/user.js

import pool from "../config/config.js"

export const createUser = (firstName, lastName, emailAddress, pwd, result) => {
  pool.execute(
    "INSERT INTO Users (firstName, lastName, emailAddress, pwd) VALUES (?, ?, ?, ?)",
    [firstName, lastName, emailAddress, pwd],
    (error, dbResult) => {
      if (error) {
        console.error("Error creating user:", error);
        result(error, null);
      } else {
        result(null, { insertId: dbResult.insertId });
      }
    }
  );
};



export const getAllUsers = (result) => {
  pool.query("SELECT * FROM Users", (error, users) => {
    if (error) {
      console.error("Error getting all users:", error);
      result(error, null);
    } else {
      result(null, users);
    }
  });
};
  // ... more functions


export default User;
