const Users = require('./Users')
const Products = require('./Products')

//export all objects
module.exports = {
    users: new Users(),
    products: new Products(),
  
}