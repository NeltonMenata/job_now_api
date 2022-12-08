class CandidatoModel {
    constructor({idCandidato, nome, nascimento, email, senha, bilhete_identidade, curriculum, telefone}){
        this.idCandidato = idCandidato;
        this.nome = nome;
        this.nascimento = nascimento;
        this.email = email;
        this.senha = senha;
        this.bilhete_identidade = bilhete_identidade;
        this.curriculum = curriculum;
        this.telefone = telefone;
    }
}

module.exports = CandidatoModel;