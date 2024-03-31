class Validacao{
    async validarCadastro(senhaDeConfirmacao, senha, email) {
        if (senhaDeConfirmacao != senha) {
            res.send("senhas não batem, por favor volte e corrija");
        } else if (!email.includes("@gmail.com" || "@hotmail.com")) {
            res.send("por favor volte e insira um email da ufc");
        }
    }
}

module.exports = Validacao;