
class CandidatoRepository{
    constructor(candidatoDB){
        this.candidatoDB = candidatoDB;
    };

    allCandidatos (){
        return this.candidatoDB.getAllCandidatos();
    }
    oneCandidato (email, senha){
        return this.candidatoDB.getOneCandidato(email, senha);
    }
    saveCandidato (user){
        console.log(user);
        return this.candidatoDB.insertOneCandidato(user);
    }
}

module.exports = CandidatoRepository;