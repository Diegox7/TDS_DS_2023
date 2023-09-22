const express = require("express");
const routes = express.Router();

routes.get("/notas", (request, response)=>{
    response.send("notas");
});

routes.get("/atividades", (request, response)=>{
    response.send("atividades");
});


routes.get("/material", (request, response)=>{
    response.send("material");
});



module.exports = routes;