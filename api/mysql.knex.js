const knex = require("knex");



module.exports = knex({
    client: "mysql",
    
    connetction: {
        host: "localhost",
        port: 3306,
        user: "root",
        password: "root",
        database: "apiDB"
    }

});