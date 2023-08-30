
// import connection
import pool from "../config/config.js";
  
// Get All Products
export const getUsers = (result) => {
    pool.query("SELECT * FROM Users;", (err, results) => {             
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
    pool.query("SELECT * FROM products WHERE id = ?", [id], (err, results) => {             
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
        pool.query("INSERT INTO Users SET ?", [data], (err, results) => {             
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
    pool.query("UPDATE Users SET firstName = ?,  lastName = ? WHERE userID = ?", [data.firstName, data.lastName, id], (err, results) => {             
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
    pool.query("DELETE FROM Users WHERE id = ?", [id], (err, results) => {             
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
