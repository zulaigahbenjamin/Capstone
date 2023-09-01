const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const pool = require("../config/config.js")

const userController = {
  async register(req, res) {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      const { firstName, lastName, email } = req.body

      const [result] = await pool.execute(
        "INSERT INTO Users (firstName, lastName, emailAddress, Pwd) VALUES (?, ?, ?, ?)",
        [firstName, lastName, email, hashedPassword]
      )

      const token = jwt.sign(
        { userId: result.insertId },
        process.env.JWT_SECRET,
        {
          expiresIn: "1h",
        }
      )

      return res.status(201).json({
        user: {
          id: result.insertId,
          firstName,
          lastName,
          email,
        },
        token,
      })
    } catch (error) {
      if (error.code === "ER_DUP_ENTRY") {
        return res
          .status(400)
          .json({ message: "This email is already registered." })
      }
      console.error("Error detail:", error) // Log the error details
      return res.status(500).json({ message: "Error registering user." })
    }
  },

  async getAllUsers(req, res) {
    try {
      const [users] = await pool.query("SELECT * FROM Users")
      return res.status(200).json(users)
    } catch (error) {
      console.error("Error detail:", error) // Log the error details
      return res.status(500).json({ message: "Error fetching users." })
    }
  },

  async login(req, res) {
    try {
      const { emailAddress, password } = req.body

      // Check if user exists
      const [users] = await pool.execute(
        "SELECT * FROM Users WHERE emailAddress = ?",
        [email]
      )
      const user = users[0]

      if (!user) {
        return res.status(400).json({ message: "Invalid email or password." })
      }

      // Compare passwords
      const isMatch = await bcrypt.compare(pwd, user.password)

      if (!isMatch) {
        return res.status(400).json({ message: "Invalid email or password." })
      }

      // Generate JWT
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      })

      return res.json({
        user: {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        },
        token,
      })
    } catch (error) {
      return res.status(500).json({ message: "Error logging in user." })
    }
  },
}

module.exports = userController
