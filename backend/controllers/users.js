// Import function from Product Model
// import User from "../models/user.js";


// const user = new User();
import { getUsers, getUsersById, insertUser, updateUserById, deleteUserById } from "../models/userModal.js";

  
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
}
  
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
    const payload = req.body;
    insertUser(payload, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Update Product
export const updateUser = (req, res) => {
    const payload  = req.body;
    const id    = req.params.id;
    updateUserById(payload, id, (err, results) => {
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


