import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import Router from "./routes/route.js";
import path from 'path';
import { fileURLToPath } from 'url';
import db from './config/config.js';
import { dirname } from 'path';
import { errorHandeling } from "./middleware/errorHandeling.js";

const allowedOrigins = ['http://localhost:5002', 'http://localhost:8081'];

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

app.use(cors(corsOptions));

// Set up middleware and routes
app.use(errorHandeling);
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(Router);
app.use(express.static(path.join(__dirname, 'static')));

// Define your routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'html', 'index.html'));
});
// app.use(cors({
//   origin: function (origin, callback) {
//     if (allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   }
// }));

app.get('/home', (req, res) => {
  res.json({
    status: res.statusCode,
    msg: "You're home"
  });
});


app.get('/users', (req, res) => {
  const users = new users();
  users.fetchUsers(req, res);
});

app.post('/products', (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.status(201).json(newProduct);
});
app.post('/addProduct', (req, res) => {
  const { productName, productSize, productDescription, productPrice } = req.body;
  const sql = 'INSERT INTO products ( prodId, prodUrl, prodName, quantity,category, amount) VALUES (?, ?, ?, ?,?,?,?)';
  const values = [productName,productDescription, productPrice];

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

  const sql = 'DELETE FROM products WHERE prodID = ?';

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



///users
app.post('/users', (req, res) => {
  const newUser = req.body;
  user.push(newUser);
  res.status(201).json(newUser);
});
app.post('/addUsers', (req, res) => {
  const {
    userId,
    firstName,
    lastName,
    emailAddress,
    Pwd,
  } = req.body;
  const sql = 'INSERT INTO Users (firstName, lastName) VALUES (?, ?, ?, ?)';
  const values = [
    userId,
    firstName,
    lastName,
    emailAddress,
    Pwd,
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error adding users:', err);
      res.status(500).json({ error: 'An error occurred while adding the product' });
    } else {
      res.json({ message: 'Users added successfully', userId: result.insertId });
    }
  });
});

app.delete('/users/:id', (req, res) => {
  const UserId = req.params.id;

  const sql = 'DELETE FROM Users WHERE userId = ?';

  connection.query(sql, [UserId], (error, result) => {
    if (error) {
      console.error('Error deleting user:', error);
      res.status(500).send('Error deleting product');
    } else {
      console.log('Users deleted');
      res.status(200).send('Users deleted successfully');
    }
  });
});

app.post('/add_cart', (request, response) => {

	const prodId = request.body.prodId;
	const prodName = request.body.prodName;
	const amount = request.body.amount;
	let count = 0;
	for(let i = 0; i < request.session.cart.length; i++)
	{
		if(request.session.cart[i].prodId === prodId)
		{
			request.session.cart[i].quantity += 1;
			count++;
		}
	}
	if(count === 0)
	{
		const cart_data = {
			prodId : prodId,
			prodName : prodName,
			amount : parseFloat(amount),
			quantity : 1
		};

		request.session.cart.push(cart_data);
	}

	response.redirect("/");

});

app.get('/remove_item', (request, response) => {

	const prodId = request.query.id;

	for(let i = 0; i < request.session.cart.length; i++)
	{
		if(request.session.cart[i].prodId === prodId)
		{
			request.session.cart.splice(i, 1);
		}
	}

	response.redirect("/");

});


// Start the server after connecting to the database
app.listen(5002, () =>
  console.log('Server running at http://localhost:5002')
);