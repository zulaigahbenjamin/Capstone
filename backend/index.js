import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import Router from "./routes/router.js";
import path from 'path';
import { fileURLToPath } from 'url';
import db from './config/config.js';
import { check } from 'express-validator';
import { validationResult } from 'express-validator';
import userController from './controllers/users.js';


import { dirname } from 'path';
import { errorHandeling } from "../backend/middleware/errorHandeling.js";

import userRoutes from '../backend/routes/userRoutes.js'



const allowedOrigins = ['http://localhost:5002', 'http://localhost:8080'];

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express(); // Create the 'app' instance first

const corsOptions = {
  origin: allowedOrigins
};

const port = +process.env.PORT || 5002;

// Configure CORS headers
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Request-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Expose-Headers", "Authorization");
  next();
});

// Set up middleware and routes
app.use(errorHandeling);
app.use(express.json());
app.use(cors(corsOptions));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(Router);
app.use(express.static(path.join(__dirname, 'static')));
app.use("/api/users", userRoutes)

// Define your routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'html', 'index.html'));
});
app.use(cors({
  origin: allowedOrigins,
}));

app.get('/home', (req, res) => {
  res.json({
    status: res.statusCode,
    msg: "You're home"
  });
});




app.post('/products', (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.status(201).json(newProduct);
});


app.post('/addProduct', (req, res) => {
  const { productName, productSize, productDescription, productPrice } = req.body;
  const sql = 'INSERT INTO products ( prodId, prodUrl, prodName, quantity,category, amount) VALUES (?, ?, ?, ?,?,?,?)';
  const values = [productName, productSize, productDescription, productPrice];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error adding product:', err);
      res.status(500).json({ error: 'An error occurred while adding the product' });
    } else {
      res.json({ message: 'Product added successfully', productId: result.insertId });
    }
  });
});



app.delete('/products/:id', (req, res) => {
  const productId = req.params.id;

  const sql = 'DELETE FROM products WHERE prodId = ?';

  db.query(sql, [productId], (error, result) => {
    if (error) {
      console.error('Error deleting product:', error);
      res.status(500).send('Error deleting product');
    } else {
      console.log('Product deleted');
      res.status(200).send('Product deleted successfully');
    }
  });
});


app.post(
  '/register',
  [
    check('firstName').notEmpty().withMessage('First name is required'),
    check('lastName').notEmpty().withMessage('Last name is required'),
    check('emailAddress').isEmail().withMessage('Enter a valid email'),
    check('Pwd')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters long'),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    // Call your userController.register function here
    userController.register(req, res);
  }
);

// Define the 'login' endpoint
app.post(
  '/login',
  [
    check('emailAddress').isEmail().withMessage('Enter a valid email'),
    check('Pwd').exists().withMessage('Password is required'),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    // Call your userController.login function here
    userController.login(req, res);
  }
);



// Start the server after connecting to the database
app.listen(5002, () =>
  console.log('Server running at http://localhost:5002')
);