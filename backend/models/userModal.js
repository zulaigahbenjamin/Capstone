
// import connection
import db from "../config/config.js";
// import  bcrypt  from 'bcrypt';
  
// Get All Products
export const getUsers = (result) => {
    db.query("SELECT * FROM Users;", (err, results) => {             
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Get Single Product by ID
export const getUsersById = (id, result) => {
    db.query("SELECT * FROM products WHERE id = ?", [id], (err, results) => {             
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            if (results.length === 0) {
                result({ message: "User not found" }, null);
            } else {
                result(null, results[0]);
            }
        }
    });   
}
  
// Insert Product to Database
export const insertUser = async (data) => {
    return new Promise((resolve, reject) => {
        db.query("INSERT INTO Users SET ?", [data], (err, results) => {             
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve(results);
            }
        });   
    });
}

  
// Update Product in Database by ID
export const updateUserById = (data, id, result) => {
    db.query("UPDATE Users SET firstName = ?,  lastName = ? WHERE userID = ?", [data.firstName, data.lastName, id], (err, results) => {             
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            if (results.affectedRows === 0) {
                result({ message: "user not found" }, null);
            } else {
                result(null, results);
            }
        }
    });   
}
  
// Delete Product from Database by ID
export const deleteUserById = (id, result) => {
    db.query("DELETE FROM Users WHERE id = ?", [id], (err, results) => {             
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            if (results.affectedRows === 0) {
                result({ message: "User not found" }, null);
            } else {
                result(null, results);
            }
        }
    });   
};

export const getUserByEmail = (emailAddress, callback) => {
    db.query('SELECT * FROM users WHERE emailAddress = ?', [emailAddress], (err, user) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, user[0]); // Assuming a single user is found
      }
    });
  };


