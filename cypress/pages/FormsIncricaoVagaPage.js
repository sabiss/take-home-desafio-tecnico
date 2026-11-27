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
        inputResumoDoCandidato: () => cy.get('[data-cy="campo-resumo-input"]'),
        botaoAvancar: () => cy.get('[data-cy="botao-vaga-inscricao-avancar"]'),
        avisoEmailInvalido: () => cy.get('[data-cy="campo-email-erro"]'),
        alertDeFalhaEmCamposObrigatorios: () => cy.get('[data-cy="vaga-inscricao-dados-erro-geral-container"]'),
        avisoCurriculoMaior5mb: () => cy.get('[data-cy="campo-curriculo-erro"]'),
    }

    preencherFormularioInscricaoVaga(candidato) {
        this.elements.inputNome().clear().type(candidato.nome);
        this.elements.inputEmail().clear().type(candidato.email);
        this.elements.inputTelefone().clear().type(candidato.telefone);
        this.elements.inputSexo().select(candidato.sexo);
        this.elements.inputNumero().clear().type(candidato.numero);
        this.elements.inputEscolaridade().select(candidato.escolaridade);
        this.elements.inputCurso().clear().type(candidato.curso);
        this.elements.inputLinkedin().clear().type(candidato.linkedin);
        this.elements.inputComoChegouAteAVaga().select(candidato.comoChegouAteAVaga);
        this.elements.inputPretensaoSalarial().clear().type(candidato.pretensaoSalarial);
        this.elements.inputCEP().clear().type(candidato.cep);
        this.elements.inputResumoDoCandidato().clear().type(candidato.resumo);
    }

    anexarCurriculo(nomeArquivo) {
        this.elements.inputCurriculo().selectFile(nomeArquivo, { force: true });
    }

    anexarFotoPerfil(nomeArquivo){
        this.elements.inputFoto().selectFile(nomeArquivo, { force: true });
    }

    avancarInscricao() {
        this.elements.botaoAvancar().click();
    }
}

export default new FormsIncricaoVaga();