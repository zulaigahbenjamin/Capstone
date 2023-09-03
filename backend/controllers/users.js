// Import function from Product Model
// import User from "../models/user.js";
import bcrypt from 'bcrypt';
import tokenCreated from '../middleware/AuthenticateUser.js';


// const user = new User();
import { getUsers, getUsersById, insertUser, updateUserById, deleteUserById, getUserByEmail} from "../models/userModal.js";

  
// Get All Products
export const showUsers = (req, res) => {
    getUsers
    ((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json({
                status: res.statusCode, 
                results
            });
        }
    });
};

export const registerUser = (req, res) => {
  const data = req.body;

  // Hash the user's password
  bcrypt.hash(data.Pwd, 15, (err, hashedPassword) => {
    if (err) {
      res.status(500).json({ error: 'Error hashing password' });
    } else {
      // Payload for token
      const user = {
        emailAddress: data.emailAddress,
        Pwd: hashedPassword, // Use hashedPassword here, not hashedPwd
      };

      // Create a token (assuming you have a function named tokenCreated)
      const token = tokenCreated(user);

      // Assuming you have a function to insert the user into your database
      // Insert the user with hashed password into the database
      insertUser({ ...data, Pwd: hashedPassword }, (dbErr, dbResults) => {
        if (dbErr) {
          res.status(500).json({ error: 'Error registering user' });
        } else {
          res.json({
            status: res.statusCode,
            msg: 'You are now registered.',
            token: token,
          });
        }
      });
    }
  });
}; 

//login 
export const loginUser = (req, res) => {
  const { emailAddress, password } = req.body;

  // Retrieve the user from the database by their email address
  // Replace this with your actual database retrieval code
  getUserByEmail(emailAddress, (dbErr, user) => {
    if (dbErr) {
      res.status(500).json({ error: 'Error retrieving user' });
    } else if (!user) {
      res.status(404).json({ error: 'User not found' });
    } else {
      // Compare the provided password with the hashed password in the database
      bcrypt.compare(password, user.Pwd, (compareErr, isMatch) => {
        if (compareErr) {
          res.status(500).json({ error: 'Error comparing passwords' });
        } else if (!isMatch) {
          res.status(401).json({ error: 'Incorrect password' });
        } else {
          // Passwords match; you can generate a token for the user here if needed
          // Replace this with your actual token generation code
          const token = generateToken(user);

          res.json({
            status: res.statusCode,
            msg: 'Login successful',
            token: token,
          });
        }
      });
    }
  });
};

// Get Single Product 
export const showUserById = (req, res) => {
    getUsersById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Create New Product
export const createUser  = (req, res) => {
    const data = req.body;
    insertUser(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Update Product
export const updateUser = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateUserById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  

export const deleteUser = (req, res) => {
    const id = req.params.id;
    deleteUserById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// db.connect(function(err) {
//     if (err) throw err;
//     var sql = "DELETE FROM products WHERE id = ?";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Number of records deleted: " + result.affectedRows);
//     });
// });

export default getUserByEmail;