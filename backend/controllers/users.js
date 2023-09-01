import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../config/config.js';
import {createToken} from '../middleware/AuthenticateUser.js'

const userController = {
  async register(req, res) {
    try {
      const data = req.body;
      const { firstName, lastName, emailAddress, Pwd } = data; // Use 'Pwd' to match your table structure
  
      if (!Pwd) {
        return res.status(400).json({ message: 'Password is required' });
      }
  
      const hashedPwd = await bcrypt.hash(Pwd, 10); // Use 'Pwd' for hashing
  
      const query = db.execute(
        "INSERT INTO Users (firstName, lastName, emailAddress, Pwd) VALUES (?, ?, ?, ?)",
        [firstName, lastName, emailAddress, hashedPwd]
      );
  
      console.log(query);
      const token = createToken(data); // Pass 'data' to createToken
  
      return res.status(201).json({
        user: {
         
          firstName: firstName,
          lastName: lastName,
          emailAddress: emailAddress,
        },
        token,
      });
    } catch (error) {
      if (error.code === "ER_DUP_ENTRY") {
        return res
          .status(400)
          .json({ message: "This email Address is already registered." });
      }
      console.error("Error detail:", error); // Log the error details
      return res.status(500).json({ message: "Error registering user." });
    }
  },
  





  async getAllUsers(req, res) {
    try {
      const [users] = pool.query("SELECT * FROM Users");
      return res.status(200).json(users);
    } catch (error) {
      console.error("Error detail:", error); // Log the error details
      return res.status(500).json({ message: "Error fetching users." });
    }
  },

  async login(req, res) {
    try {
      const { emailAddress, Pwd } = req.body;

      // Check if user exists
      const [users] = pool.execute(
        "SELECT * FROM Users WHERE emailAddress = ?",
        [emailAddress]
      );
      const user = users[0];

      if (!user) {
        return res.status(400).json({ message: "Invalid email or password." });
      }

      // Compare passwords
      const isMatch = await bcrypt.compare(Pwd, user.Pwd);

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
          email: user.emailAddress,
        },
        token,
      });
    } catch (error) {
      return res.status(500).json({ message: "Error logging in user." });
    }
  },
};

export default userController;
