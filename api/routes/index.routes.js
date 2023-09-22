const express = require("express");
const alunosRoute = require("./alunos.router");
const professoresRoute = require("./professores.router");
const somaRoute = require("./soma.router");

const routes = express.Router();


routes.use("/professores", professoresRoute);
routes.use("/alunos", alunosRoute);
routes.use("/soma", somaRoute);


module.exports = routes;