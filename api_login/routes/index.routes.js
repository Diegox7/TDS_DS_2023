const express = require("express");
const usuarioRoutes = require("./usuario.router");
const routes = express.Router();


routes.use("/usuario", usuarioRoutes);


module.exports = routes;


