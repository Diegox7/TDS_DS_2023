const express = require("express");
const bodyparser = require('body-parser');
const app = new express();
app.use(bodyparser.json());


app.get("/alunos", (request, response)=>{
    response.send("alunos");
});

app.get("/professores", (request, response)=>{
    response.send("professores");
});

app.get("/soma", (request, response)=>{
    var valor1 = 10;
    var valor2 = 10;

    var resultado = valor1 + valor2;

    response.send(`O resultado da soma é: ${resultado}`);
});

app.post("/somaParametros", (request, response)=>{
    const valor1 = request.body.valor1;
    const valor2 = request.body.valor2;

    const resultado = valor1 + valor2;

    response.send(`O resultado da soma dos parâmetros é: ${resultado}`)
});



app.listen(8080, (error)=>{
        console.log("O servidor está rodando na porta 8080! 👍");
}); 