const usuario = {
    id: 1,
    nome: "Diego",
    user_name: "di",
    senha: "123"
} 

module.exports ={
    dadosUsuario: (request, response) => {
        response.json(usuario);
    },

    loginUsuario: (request, response) => {
        const user_name = request.body.user_name;
        const senha = request.body.senha;

        if (user_name === usuario.user_name && senha === usuario.senha) {
            response.send("Login bem-sucedido!");
        } else {
            response.send("Nome de usuário ou senha incorretos."); 
        }
    }
    
}