const express = require("express");
const bodyParser = require("body-parser");
const routes = express.Router();

const { users, products } = require("../model");

routes.get("/products", (req, res) => {
    products.fetchProducts(req, res);
  });
  
  routes.get("/products/:id", (req, res) => {
    product.fetchProduct(req, res);
  });

  routes.delete("/product/:id", (req, res) => {
    product.deleteProduct(req, res);
  });

  routes.get("/users", (req, res) => {
    users.fetchUsers(req, res);
  });
  
  routes.get("/user/:id", (req, res) => {
    users.fetchUser(req, res);
  });



module.exports = {
    express,
    routes
}