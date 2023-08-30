import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import Router from "./routes/router.js";
import path from "path";
import { fileURLToPath } from "url";
import pool from "../backend/config/config.js";
import { dirname } from "path";
import { errorHandeling } from "./middleware/errorHandeling.js";


const corsOptions = {
    origin: 'http://localhost:5000', // Replace with the actual client application's origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
  };
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express(); // Create the 'app' instance first
const port = +process.env.PORT || 5002;

// Set up middleware and routes
app.use(cors(corsOptions));
app.use(errorHandeling);
app.use(express.json());
app.use(cors(corsOptions));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(Router);
app.use(express.static(path.join(__dirname, "static")));

// Define your routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "index.html"));
});


app.get("/home", (req, res) => {
  res.json({
    status: res.statusCode,
    msg: "You're home",
  });
});

app.get("/users", (req, res) => {
  const users = new users();
  users.fetchUsers(req, res); // Pass the req and res objects
});

app.post("/products", (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.status(201).json(newProduct);
});
app.post("/addProduct", (req, res) => {
  const { productName, productDescription, productPrice } =
    req.body;
  const sql =
    "INSERT INTO products ( prodId, prodUrl, prodName, quantity,category, amount) VALUES (?, ?,?,?,?,?)";
  const values = [productName, productDescription, productPrice];

  pool.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error adding product:", err);
      res
        .status(500)
        .json({ error: "An error occurred while adding the product" });
    } else {
      res.json({
        message: "Product added successfully",
        productId: result.insertId,
      });
    }
  });
});

app.delete("/products/:id", (req, res) => {
  const productId = req.params.id;

  const sql = "DELETE FROM products WHERE prodId = ?";

  pool.query(sql, [productId], (error, result) => {
    if (error) {
      console.error("Error deleting product:", error);
      res.status(500).send("Error deleting product");
    } else {
      console.log("Product deleted");
      res.status(200).send("Product deleted successfully");
    }
  });
});

///users
app.post("/users", (req, res) => {
  const newUser = req.body;
  user.push(newUser);
  res.status(201).json(newUsers);
});
app.post("/addUsers", (req, res) => {
  const {
    userID,
    firstName,
    lastName,
    userAge,
    Gender,
    userRole,
    emailAdd,
    emailPass,
    userProfile,
  } = req.body;
  const sql =
    "INSERT INTO Users (firstName, lastName, userAge) VALUES (?, ?, ?, ?)";
  const values = [
    userID,
    firstName,
    lastName,
    userAge,
    Gender,
    userRole,
    emailAdd,
    emailPass,
    userProfile,
  ];

  pool.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error adding users:", err);
      res
        .status(500)
        .json({ error: "An error occurred while adding the product" });
    } else {
      res.json({
        message: "Users added successfully",
        userId: result.insertId,
      });
    }
  });
});

app.delete("/users/:id", (req, res) => {
  const UserId = req.params.id;

  const sql = "DELETE FROM Users WHERE id = ?";

  connection.query(sql, [UserId], (error, result) => {
    if (error) {
      console.error("Error deleting user:", error);
      res.status(500).send("Error deleting product");
    } else {
      console.log("Users deleted");
      res.status(200).send("Users deleted successfully");
    }
  });
});

// Start the server after connecting to the database
app.listen(5000, () => console.log("Server running at http://localhost:5000"));
