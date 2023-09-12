const express = require('express')
const bodyParser = require('body-parser')
const routes = express.Router()

const { users, product, cart} = require('../models')

//=====Routes for users=====
routes.get('/users',(req,res)=>{
    users.fetchUsers(req,res)
})
routes.get('/user/:id',(req,res)=>{
    users.fetchUser(req,res)
})
routes.post('/register',bodyParser.json(), (req, res)=>{
    users.register(req, res)
});
routes.post('/login',bodyParser.json(),
 (req, res)=>{
    users.login(req, res)
});

routes.patch('/user/:id',bodyParser.json(),(req,res)=>{
    users.updateUser(req,res)
})
routes.delete('/user/:id',(req,res)=>{
    users.deleteUser(req,res)
})




//====Routes for orders=====
routes.get('/users/:id/cart',(req,res) => {
    cart.showCart(req,res)
})


routes.post('/users/:id/cart',(req,res) => {
    cart.createCart(req,res)
})


routes.delete('/users/:id/cart',(req,res) => {
    cart.deleteAllCartItems(req,res)
})


routes.delete('/users/:id/cart/:id',(req,res) => {
    cart.deleteCart(req,res)
})

routes.post('/users/:id/cart/:id',(req,res) => {
    cart.updateCart(req,res)
})



//====Routes for products=====
routes.get('/products',(req,res)=>{
    product.getProducts(req,res)
})
routes.get('/product/:id',(req,res)=>{
    product.getProduct(req,res)
})
routes.post('/product',bodyParser.json(),(req,res)=>{
    product.addProduct(req,res)
})
routes.delete('/product/:id',(req,res)=>{
    product.deleteProduct(req,res)
})
routes.post('/addProduct',bodyParser.json(),(req,res)=>{
    product.addProduct(req,res)
})
module.exports ={
    express,
    routes
}