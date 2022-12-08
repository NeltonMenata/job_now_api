
class CandidatoDB {
    constructor(candidato_query){
        this.candidato_query = candidato_query;
    }

    async getAllCandidatos(){
        const candidato = await this.candidato_query.query("SELECT * FROM candidatos");
        
        return candidato[0];
    }

    async insertOneCandidato(user){
        try {
            const candidato = await this.candidato_query.query(`INSERT INTO candidatos (nome, nascimento, email, senha, bilhete_identidade, telefone) values ("${user.nome}", "${user.nascimento}", "${user.email}", "${user.senha}", "${user.bilhete_identidade}", ${user.telefone})`)    
            return candidato[0];
        } catch (error) {
            if(error.errno == 1062){
                return "Account already exists!!"
            }
            return error
        }
        
        
    }

    async getOneCandidato(email, senha){
        const candidato = await this.candidato_query.query(`SELECT * FROM candidatos WHERE email="${email}" AND senha="${senha}" `);
        return candidato[0];
    }
}
module.exports = CandidatoDB;