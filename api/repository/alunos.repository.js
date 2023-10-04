const conn = require("../mysql.knex.js");

module.exports = {
    buscarTodos: async ()=>{
        return await conn.select().from("alunos");
    },
    buscaAlunosPorID: async (id) => {
        return await conn.select().from("alunos").where({id:id });
    }
}