class FormsIncricaoVaga {
    elements = {
        inputNome: () => cy.get('[data-cy="campo-nome-input"]'),
        inputEmail: () => cy.get('[data-cy="campo-email-input"]'),
        inputTelefone: () => cy.get('[data-cy="campo-telefone-input"]'),
        inputSexo: () => cy.get('[data-cy="campo-sexo-input"]'),
        inputCEP: () => cy.get('[data-cy="campo-cep-input"]'),
        inputLogradouro: () => cy.get('[data-cy="campo-logradouro-input"]'),
        inputNumero: () => cy.get('[data-cy="campo-numero-input"]'),
        inputComplemento: () => cy.get('[data-cy="campo-complemento-input"]'),
        inputBairro: () => cy.get('[data-cy="campo-bairro-input"]'),
        inputCidade: () => cy.get('[data-cy="campo-cidade-input"]'),
        inputEscolaridade: () => cy.get('[data-cy="campo-escolaridade-input"]'),
        inputCurso: () => cy.get('[data-cy="campo-curso-input"]'),
        inputLinkedin: () => cy.get('[data-cy="campo-linkedin-input"]'),
        inputComoChegouAteAVaga: () => cy.get('[data-cy="campo-como-chegou-input"]'),
        inputPretensaoSalarial: () => cy.get('[data-cy="campo-pretensao-salarial-input"]'),
        inputCurriculo: () => cy.get('[data-cy="campo-curriculo-input"]'),
        inputFoto: () => cy.get('[data-cy="campo-foto-perfil-input"]'),
        botaoAvancar: () => cy.get('[data-cy="botao-vaga-inscricao-avancar"]'),
        avisoEmailInvalido: () => cy.get('[data-cy="campo-email-erro"]'),
        alertDeFalhaEmCamposObrigatorios: () => cy.get('[data-cy="vaga-inscricao-dados-erro-geral-container"]'),
    }

    preencherFormularioInscricaoVaga(candidato) {
        this.elements.inputNome().type(candidato.nome);
        this.elements.inputEmail().type(candidato.email);
        this.elements.inputTelefone().type(candidato.telefone);
        this.elements.inputSexo().select(candidato.sexo);
        this.elements.inputNumero().type(candidato.numero);
        this.elements.inputEscolaridade().select(candidato.escolaridade);
        this.elements.inputCurso().type(candidato.curso);
        this.elements.inputLinkedin().type(candidato.linkedin);
        this.elements.inputComoChegouAteAVaga().select(candidato.comoChegouAteAVaga);
        this.elements.inputPretensaoSalarial().type(candidato.pretensaoSalarial);
    }

    preencherCEP(cep){
        this.elements.inputCEP().type(cep);
    }

    preencherEmail(email){
        this.elements.inputEmail().type(email);
    }

    anexarCurriculo(nomeArquivo) {
        this.elements.inputCurriculo().selectFile(`cypress/fixtures/${nomeArquivo}`, { force: true });
    }

    anexarFotoPerfil(nomeArquivo){
        this.elements.inputFoto().selectFile(`cypress/fixtures/${nomeArquivo}`, { force: true });
    }
}

export default new FormsIncricaoVaga();