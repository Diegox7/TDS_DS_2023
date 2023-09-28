const express = require("express");
const routes = express.Router(); 

routes.get("/", (request, response)=>{
    response.send("alunos");
});

routes.get("/notas", (request, response)=>{
    response.send("notas");
});

routes.get("/livros", (request, response)=>{
    response.send("livros");
});

routes.get("/perfil", (request, response)=>{
    response.send("perfil");
});


module.exports = routes;