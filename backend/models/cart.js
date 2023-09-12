const db = require("../config/config.js");

class cart {
  //get Order
  showCart = (req, res) => {
    // Assuming you have access to the user ID from the request or some other source
    const userId = req.userId; // Replace with your actual source of user ID

    const query = `
      SELECT orders.cartId, products.prodId, products.prodName,products.amount, products.prodUrl, products.quantity
      FROM users
      INNER JOIN orders ON users.userID = orders.userID
      INNER JOIN products ON orders.prodID = products.prodID
      WHERE orders.userID = ?
    `;

    db.query(query, [userId], (err, result) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        result,
      });
    });
  
  };

  // add order
  createCart = (data, result) => {
    db.query("INSERT INTO orders SET ?;", data, (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    });
  };

  //
  updateCart = (data, id, result) => {
    db.query(
      `UPDATE order SET ? WHERE cartId = ? `,
      [data, id],
      (err, results) => {
        if (err) {
          console.log(err);
          result(err, null);
        } else {
          result(null, results);
        }
      }
    );
  };

  deleteCart = (cartId, callback) => {
    db.query("DELETE FROM orders WHERE cartId = ?", [cartId], (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  };

  deleteAllCartItems = (id, result) => {
    db.query(`DELETE FROM orders WHERE userId = ?`, id, (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    });
  };
}
module.exports = cart ;
