
// import connection
import db from "../config/config.js";
  
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
  
// Insert Product to payloadbase
export const insertUser = async (payload) => {
    return new Promise((resolve, reject) => {
        db.query("INSERT INTO Users SET ?", [payload], (err, results) => {             
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve(results);
            }
        });   
    });
}

  
// Update Product in payloadbase by ID
export const updateUserById = (payload, id, result) => {
    db.query("UPDATE Users SET firstName = ?,  lastName = ? WHERE userID = ?", [payload.firstName, payload.lastName, id], (err, results) => {             
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
  
// Delete Product from payloadbase by ID
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
}
