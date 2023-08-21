const Users = require('./Users')
const Products = require('./Products')

//export all objects
module.exports = {
    products: new Products(),
    users: new Users(),
  
}