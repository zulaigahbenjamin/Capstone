// const db = require("../config/config.js");


// class Cart {
//     //Show all cart items
//     fetchItems(req, res) {
//         const query = `
//         SELECT  userID, cartID, prodName, quantity, amount, prodURL
//         FROM Cart;
//         `
//         db.query(query, (err, results) => {
//             if (err) throw err
//             res.json({
//                 status: res.statusCode,
//                 results
//             })
//         })
//     }
//     //Add to Cart
//     addItem(req, res) {
//         const query = `
//         INSERT INTO Cart
//         SET ?;
//         `

//         db.query(query, [req.body], (err) => {
//             if (err) throw err
//             res.json({
//                 status: res.statusCode,
//                 msg: "Item successfully added to cart"
//             })
//         })
//     }
//     //Delete item from Cart
//     deleteItem(req, res) {
//         const query = `
//         DELETE FROM Cart
//         WHERE prodId = ${req.params.id};
//         `
//         db.query(query, (err) => {
//             if (err) throw err,
//                 res.json({
//                     status: res.statusCode,
//                     msg: "Item has been deleted"
//                 })
//         })
//     }
//     //delete specific item from cart
        

//     //Edit existing product
//     updateItem(req, res) {
//         const query = `
//         UPDATE Cart
//         SET ? 
//         `
//         db.query(query, [req.body, req.params.id], (err) => {
//             if (err) throw err
//             res.json({
//                 status: res.statusCode,
//                 msg: "Product has been updated"
//             })
//         })
//     }
// }

// module.exports = Cart