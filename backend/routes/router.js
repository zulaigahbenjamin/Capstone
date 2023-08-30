// import express
import express from "express";
import { showUsers, showUserById, createUser, updateUser,deleteUser } from "../controllers/users.js";


  
// import function from controller
import { showProducts, showProductById, createProduct, updateProduct, deleteProduct} from "../controllers/product.js";
 
// init express router
const router = express.Router();
  
// Get All Product
router.get('/products', showProducts);
router.get('/users', showUsers);
// 
  
// Get Single Product
router.get('/products/:id', showProductById);
router.get('/users/:id', showUserById);
  
// Create New Product
router.post('/products', createProduct);
router.post('/users', createUser);
// Update Product
router.put('/products/:id', updateProduct);
router.put('/users/:id', updateUser);

//patch
router.patch('/products/:id',updateProduct);
router.patch('/users/:id', updateUser);
// Delete Product

  router.delete('/product/:id', deleteProduct);
  router.delete('/users/:id', deleteUser);
// export default router
export default router;