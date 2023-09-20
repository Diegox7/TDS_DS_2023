const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const usuario = {
    id: 1,
    nome: "Diego",
    user_name: "di",
    senha: "123"
}

app.get("/usuario", (request, response) => {
    response.json(usuario);
});

app.post("/login", (request, response) => {
    const user_name = request.body.user_name;
    const senha = request.body.senha;

    if (user_name === usuario.user_name && senha === usuario.senha) {
        response.send("Login bem-sucedido!");
    } else {
        response.send("Nome de usuário ou senha incorretos."); 
    }
});

app.listen(8080, (error)=>{
    console.log("O servidor está rodando na porta 8080! 👍");
}); 

