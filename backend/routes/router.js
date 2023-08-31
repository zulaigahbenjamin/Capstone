// // Import express
// import express from "express";
// import { check, validationResult } from "express-validator";
// import * as userController from "../controllers/users.js";

// const router = express.Router();

// // Validation middleware
// const validate = (req, res, next) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(422).json({ errors: errors.array() });
//   }
//   next();
// };





// router.get('/users/login', userController.login);
// router.get('/users/register', userController.register);



// // Product Routes


// export default router;


// import express
import express from "express";
 
// import function from controller
import { showProducts, showProductById, createProduct, updateProduct, deleteProduct} from "../controllers/product.js";
 
// init express router
const router = express.Router();
  
// Get All Product
router.get('/products', showProducts);

// 
  
// Get Single Product
router.get('/products/:id', showProductById);

  
// Create New Product
router.post('/products', createProduct);

// Update Product
router.put('/products/:id', updateProduct);


//patch
router.patch('/products/:id',updateProduct);

// Delete Product

  router.delete('/product/:id', deleteProduct);

// export default router
export default router;