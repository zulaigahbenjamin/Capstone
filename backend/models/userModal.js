import pool from "../config/config.js";

const User = {
  async createUser(firstName, lastName, email, password) {
    try {
      const [result] = await pool.execute(
        "INSERT INTO Users (firstName, lastName, email, pwd) VALUES (?, ?, ?, ?)",
        [firstName, lastName, email, password]
      );
      return result.insertId;
    } catch (error) {
      throw error;
    }
  },

  async getAllUsers() {
    try {
      const [users] = await pool.query("SELECT * FROM Users");
      return users;
    } catch (error) {
      throw error;
    }
  },
  // ... more functions
};

export default User;
