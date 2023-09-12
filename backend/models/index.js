const users = require('./userModal.js')
const Products = require ('./productModel.js')
const cart = require ('./cart.js')
module.exports = {
    users: new users,
    product:new Products,
    cart: new cart
}