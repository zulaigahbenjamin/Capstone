import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import pool from "../config/config.js";

const userController = {
  register: async function (req, res) {
    try {
      const hashedPwd = await bcrypt.hash(req.body.password, 10);
      const { firstName, lastName, emailAddress } = req.body;

      const [result] = await pool.execute(
        "INSERT INTO Users (firstName, lastName, emailAddress, pwd) VALUES (?, ? ,? , ?, ?)",
        [firstName, lastName, emailAddress, hashedPwd]
      );

      const token = jwt.sign(
        { userId: result.insertId },
        process.env.JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );

      return res.status(201).json({
        user: {
          id: result.insertId,
          firstName,
          lastName,
          emailAddress,
        },
        token,
      });
    } catch (error) {
      if (error.code === "ER_DUP_ENTRY") {
        return res
          .status(400)
          .json({ message: "This email is already registered." });
      }
      console.error("Error detail:", error); // Log the error details
      return res.status(500).json({ message: "Error registering user." });
    }
  },

  getAllUsers: async function (req, res) {
    try {
      const [users] = await pool.query("SELECT * FROM Users");
      return res.status(200).json(users);
    } catch (error) {
      console.error("Error detail:", error); // Log the error details
      return res.status(500).json({ message: "Error fetching users." });
    }
  },

  login: async function (req, res) {
    try {
      const { email, password } = req.body;

      // Check if user exists
      const [users] = await pool.execute(
        "SELECT * FROM Users WHERE email = ?",
        [email]
      );
      const user = users[0];

      if (!user) {
        return res.status(400).json({ message: "Invalid email or password." });
      }

      // Compare passwords
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ message: "Invalid email or password." });
      }

      // Generate JWT
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      return res.json({
        user: {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        },
        token,
      });
    } catch (error) {
      return res.status(500).json({ message: "Error logging in user." });
    }
  },
};

export default userController;
