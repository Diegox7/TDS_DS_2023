const conn = require("../mysql.knex");

module.exports = {
    buscaTodos: async () => {
        return await conn.from("turmas").innerJoin("professor", "turmas.professor_id", "professor.id");
    },
    inserir: async (data) => {
        return await conn.select().from("professor", "alunos");
    }
}