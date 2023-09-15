const db = require('../config/config.js')

class Products{
   getProducts = (req, res) => {
        const query =`SELECT * FROM products;`
        db.query(query, (err, results) => {
            if (err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    };
  
    getProduct(req,res){
        const query =`
        SELECT prodId, prodName,quantity, amount, category, prodUrl
        FROM products
        WHERE prodId = ${req.params.id};
        `
        db.query(query,(err,results)=>{
            if (err) throw err 
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
   
    addProduct(req, res) {
        const data = req.body;

        if (!data.prodId) {
            return res.json({
                status: res.statusCode,
                msg: "No prodId inserted"
            })
        };
        
        const query = `
            INSERT INTO products
            SET ? ;
        `

        db.query(query, data, (err) => {
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg: "Product has been successfully added"
            })
        })
    }

    
    updateProduct(req,res){
        const data = req.body
       
        const query =`
        UPDATE products
        SET ?
        WHERE prodId = ${req.params.id};
        `
        db.query(query,[data],(err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "Your product has been updated "
            })
        })
    }
    deleteProduct(req,res){
        const query =`
        DELETE FROM products
        WHERE prodId = ${req.params.id};
        `
        db.query(query,(err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "Your product has been removed."
            })
        })
    }
}
module.exports = Products