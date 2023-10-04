const express = require("express");
const { listaAlunos, buscaAlunosPorID } = require("../controller/alunos.controller");
const routes = express.Router(); 


routes.get("/", listaAlunos);

routes.get("/notas", (request, response)=>{
    response.send("notas");
});

routes.get("/livros", (request, response)=>{
    response.send("livros");
});

routes.get("/perfil", (request, response)=>{
    response.send("perfil");
});

routes.get("/(:id[0-9+])", buscaAlunosPorID);

module.exports = routes;