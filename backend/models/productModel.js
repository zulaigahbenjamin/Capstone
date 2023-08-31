// import connection
import db from "../config/config.js";

// Get All Products
export const getProducts = (result) => {
    db.query("SELECT * FROM products;", (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Get Single Product by ID
export const getProductById = (id, result) => {
    db.query("SELECT * FROM products WHERE prodId = ?", [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            if (results.length === 0) {
                result({ message: "Product not found" }, null);
            } else {
                result(null, results[0]);
            }
        }
    });
}

// Insert Product to payloadbase
export const insertProduct = async (payload) => {
    return new Promise((resolve, reject) => {
        db.query("INSERT INTO products SET ?", [payload], (err, results) => {
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
export const updateProductById = (payload, id, result) => {
    db.query("UPDATE products SET prodName = ?, amount = ? WHERE prodId = ?", [payload.prodName,payload.amount, id], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                if (results.affectedRows === 0) {
                    result({
                        message: "Product not found"
                    }, null);
                } else {
                    result(null, results);
                }
            }
        });
}

// Delete Product from payloadbase by ID
export const deleteProductById = (id, result) => {
    db.query("DELETE FROM products WHERE prodId = ?", [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            if (results.affectedRows === 0) {
                result({ message: "Product not found" }, null);
            } else {
                result(null, results);
            }
        }
    });
}
