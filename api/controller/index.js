const express = require("express");
const bodyParser = require("body-parser");
const routes = express.Router();

const { Users, products } = require("../model");

routes.get("/products", (req, res) => {
    products.fetchProducts(req, res);
  });
  
  routes.get("/products/:id", (req, res) => {
    product.fetchProduct(req, res);
  });



module.exports = {
    express,
    routes
}