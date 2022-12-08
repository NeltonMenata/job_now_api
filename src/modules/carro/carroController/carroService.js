const db = require("../../../db.js");

async function buscarCarros() {
    const response = await global.connection.query("select * from carros");
    return response[0];
};

module.exports = {
    buscarCarros: buscarCarros
}