const express = require("express");
const bodyparser = require('body-parser');
const routes = require("./routes/index.routes");

const app = new express();
app.use(bodyparser.json());

//usando as rotas
app.use(routes);



app.listen(8080, (error)=>{
        console.log("O servidor está rodando na porta 8080! 👍");
}); 