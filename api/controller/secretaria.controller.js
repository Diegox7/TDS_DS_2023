const { buscaTodos, inserir} = require("../repository/secretaria.repository");

module.exports = {
    buscaTodos: (request, response) => {
        buscaTodos().then((data) => {
            response.send(data);
        }).catch((error)=>{
            response.status(500).send({ message: "Erro" });
        })
    },
    inserir: (request, response) => {
        const { aluno, professor } = request.body;
        const data = { aluno, professor };
        
        inserir(data).then((data) => {
            response.send({ message: "sucesso ao inserir!" });
        }).catch((error) => {
            response.status(500).send({ message: "Erro ao tentar inserir!" });
        });  
    },
    deletar: (request, response) => {
        const { id } = request.params;

        deletar(id).then((data) => {
            response.send({ message: "sucesso ao deletar!" });
        }).catch((error) => {
            response.status(500).send({ message: "Erro ao tentar deletar!" });
        }); 
    }
}
