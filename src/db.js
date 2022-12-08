const mysql = require("mysql2/promise");

async function connection() {
    const dbConnection = process.env.DB_CONNECTION || "mysql://root:@localhost:3306/job_now";
    try {
        const con = await mysql.createConnection(dbConnection);
        global.connection = con;
        console.log("Conectou ao banco de dados");

    } catch (e) {
        console.log("Banco de Dados não inicializado!!")
        console.log(e);

    }


}

module.exports = { connection: connection() };