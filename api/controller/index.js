const express = require("express");
const bodyParser = require("body-parser");
const routes = express.Router();

const { users, products } = require("../model");

// Product routes
routes.get("/products", (req, res) => {
    products.fetchProducts(req, res);
  });
  
  routes.get("/product/:id", (req, res) => {
    products.fetchProduct(req, res);
  });

  routes.post("/product", (req, res) => {
    products.addProducts(req, res);
  });

  routes.delete("/product/:id",(req, res) => {
    products.deleteProduct(req, res);
  });

  routes.patch("/product/:id", bodyParser.json(), (req, res) => {
    products.updateProducts(req, res);
  });

//  User routes

  routes.get("/users", (req, res) => {
    users.fetchUsers(req, res);
  });
  
  routes.get("/user/:id", (req, res) => {
    users.fetchUser(req, res);
  });

  routes.delete("/user/:id", (req, res) => {
    users.deleteUser(req, res);
  });

  routes.patch("/user/:id", bodyParser.json(), (req, res) => {
    users.updateUser(req, res);
  });

  

//  do routes for add and delete


module.exports = {
    express,
    routes
}