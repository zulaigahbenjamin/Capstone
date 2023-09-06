const db = require('../config/config.js')

class Orders{
    getOrdersByUser(req,res){
        const userId = req.params.userId;
        const query =`
        SELECT o.OrderID, p.ProdName, p.Quantity, p.Amount, o.OrderDate
        FROM orders o
        INNER JOIN product p ON o.ProdID = p.ProdID
        WHERE o.UserID =  ${req.params.id}
        `
        db.query(query,(err,results)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                results
            })
        })
    }
   
    addOrders(req,res){
        const data =req.body
       
        const query =`
        INSERT INTO orders
        SET ?
        `
        db.query(query,[data],(err)=>{
            if (err) throw err
          
            res.json({
                status:res.statusCode,
                msg:"An Order was made."
            })
        })
    }
    updateOrders(req,res){
        const data = req.body
       
        const query =`
        UPDATE orders
        SET ?
        WHERE OrderID = ${req.params.id} AND UserID = ${req.params.id};
        `
        db.query(query,[data],(err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "Your order has been updated "
            })
        })
    }
    deleteOrders(req,res){
        const query =`
        DELETE FROM orders
        WHERE UserID = ${req.params.id};
        `
        db.query(query,(err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "Your order has been removed."
            })
        })
    }
    deleteOrder(req,res){
        const query =`
        DELETE FROM orders
        WHERE UserID = ${req.params.id} AND OrderID = ${req.params.id};
        `
        db.query(query,(err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "Your order has been removed."
            })
        })
    }
}
module.exports = Orders