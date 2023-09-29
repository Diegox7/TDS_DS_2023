const conn = require("../mysql.knex");

module.exports = {
    buscarTodos: ()=>{
        return conn.select().from("alunos");
    }

};