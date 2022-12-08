const CandidatoRepository = require("./candidato_repository");
const CandidatoDB = require("./candidato_db");
const CandidatoModel = require("./candidato_model.js");

async function repository(){
    const candidatoDB = new CandidatoDB(global.connection);
    const _repository = new CandidatoRepository(candidatoDB)
    return _repository;
}

async function GetCandidatos(req, res) {
    const _repository = await repository();
    try {
        const response = await _repository.allCandidatos();
        res.json({error: false, result: response});    
    } catch (e) {
        res.json({error: true, desc: e.message})
    }
    
}

async function PostCandidato(req, res) {
    const user = new CandidatoModel({ nome: req.body.nome, bilhete_identidade: req.body.bilhete_identidade, nascimento: req.body.nascimento, email: req.body.email, senha: req.body.senha, curriculum: `localhost:3000/api/curriculum/${req.file.filename}`, telefone: req.body.telefone });
    console.log(`http://${process.env.HOST}:${process.env.PORT}/jobnow/curriculum/${req.file.filename}`);
    const _repository = await repository();
    try {
        const response = await _repository.saveCandidato(user)
        res.json(response);    
    } catch (e) {
        res.json({error: true, desc: e.message});
    }
    
}

async function GetOneCandidato(req, res){
    const _repository = await repository();
    try{
    const response = await _repository.oneCandidato(req.body.email || "", req.body.senha ||"");
    res.json({"error":false,result:response})
    
}catch(e){
    res.json({error: true, desc: e.message})
}
}
module.exports = { GetCandidatos, PostCandidato, GetOneCandidato }