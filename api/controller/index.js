const express = require("express");
const bodyParser = require("body-parser");
const {verifyAToken} = require('../middleware/Authenticate')
const routes = express.Router();

const { users, products } = require("../model");

routes.get("/users", (req, res) => {
    users.fetchUsers(req, res);
  });
  
  routes.get("/user/:id", (req, res) => {
    users.fetchUser(req, res);
  });


module.exports = {
    express,
    routes,
    verifyAToken
}