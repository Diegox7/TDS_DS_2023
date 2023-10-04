const { buscarTodos, buscaAlunosPorID } = require("../repository/alunos.repository");



module.exports = {
    listaAlunos: (req, res) => {
        buscarTodos().then((data) => {
            res.send(data);
        }).catch((error) => {
            console.log(error);
            res.status(404).send({ message: "erro ao consultar alunos!" })
        });
    },
    buscaAlunosPorID:(req, res) => {
        const {id} = req.params;

        buscaAlunosPorID(id).then((data) =>{
            res.send(data);
        }).catch((error) => {
            console.log(error);
            res.status(500).send({message: "erro ao consultar aluno por ID"});
        });
    }

}

