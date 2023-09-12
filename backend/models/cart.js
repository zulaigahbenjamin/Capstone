const db = require('../config/config.js')

class Orders{

    //get Order
    getOrdersByUser(req,res){
        const userId = req.params.userId;
        const query =`
        SELECT o.OrderID, p.ProdName, p.quantity, p.amount, o.OrderDate
        FROM Orders o
        INNER JOIN product p ON o.prodId = p.prodId
        WHERE o.userId =  ${userId}
        `
        db.query(query,(err,results)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                results
            })
        })
    }
   // add order
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
   // updateOrders
updateOrders(req, res) {
    const data = req.body;
    const OrderId = req.params.OrderId; 
    const userId = req.params.userId;   

    const query = `
        UPDATE orders
        SET ?
        WHERE OrderId = ? AND userId = ?;
    `;

    db.query(query, [data, OrderId, userId], (err) => {
        if (err) throw err;
        res.json({
            status: res.statusCode,
            msg: "Your order has been updated "
        });
    });
}

    deleteOrders(req,res){
        const query =`
        DELETE FROM orders
        WHERE userId = ${req.params.id};
        `
        db.query(query,(err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "Your order has been removed."
            })
        })
    }

    //delete
    deleteOrder(req,res){
        const query =`
        DELETE FROM orders
        WHERE userId = ${req.params.id} AND OrderId = ${req.params.id};
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