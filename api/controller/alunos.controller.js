const { buscarTodos } = require("../repository/alunos.repository");

module.exports = {
    listaAlunos: (req, res)=>{
        const data = buscarTodos();
        console.log(data);
        res.send(data);
    }
};