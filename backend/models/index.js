const users = require('./userModal.js')
const Products = require ('./productModel.js')
const Orders = require ('./cart.js')
module.exports = {
    users: new users,
    product:new Products,
    orders: new Orders
}