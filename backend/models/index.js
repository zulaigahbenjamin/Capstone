const Users = require('./userModal.js')
const Products = require ('./productModel.js')
const Orders = require ('./cart.js')
module.exports = {
    users: new Users,
    product:new Products,
    orders: new Orders
}