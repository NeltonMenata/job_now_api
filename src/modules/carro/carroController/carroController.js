const CarroService = require("./carroService.js")

function carroController(req, res){
    res.send("Rota automoveis");

}

async function getCarros(req, res){
    const response = await CarroService.buscarCarros();    
    res.json(response);
}

async function postCarro(req, res){
    const modelo = req.body.modelo;
    const placa = req.body.placa;
    const response = await global.connection.query(`insert into carros(modelo, placa) values ("${modelo}","${placa}");`);
    res.json(response[0]);
}

module.exports = {
    getCarros: getCarros,
    criarCarro: postCarro
};