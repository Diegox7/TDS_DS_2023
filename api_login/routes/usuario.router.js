const express = require("express");
const routes = new express.Router();
const {dadosUsuario, loginUsuario} = require("../controller/usuario.controller");

routes.get("/", dadosUsuario);
routes.post("/login", loginUsuario);


module.exports = routes;