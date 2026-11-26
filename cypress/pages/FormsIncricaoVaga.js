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
        inputInstituicao: () => cy.get('[data-cy="campo-instituicao-input"]'),
        inputLinkedin: () => cy.get('[data-cy="campo-linkedin-input"]'),
        inputComoChegouAteAVaga: () => cy.get('[data-cy="campo-como-chegou-input"]'),
        inputPretensaoSalarial: () => cy.get('[data-cy="campo-pretensao-salarial-input"]'),
        inputCurriculo: () => cy.get('[data-cy="campo-curriculo-input"]'),
        inputFoto: () => cy.get('[data-cy="campo-foto-input"]'),
        botaoAvancar: () => cy.get('[data-cy="botao-vaga-inscricao-avancar"]'),
        alertaCamposInvalidos: () => cy.contains(/campos obrigat[oó]rios inv[aá]lidos ou n[aã]o preenchidos/i),
        avisoEmailInvalido: () => cy.contains(/e-?mail.*inv[aá]lid|inv[aá]lid.*e-?mail/i),
        alertDeFalhaEmCamposObrigatorios: () => cy.get('[data-cy="vaga-inscricao-dados-erro-geral-container"]'),
    }

    preencherFormularioInscricaoVaga(dados) {
        this.elements.inputNome().type(dados.nome);
        this.elements.inputEmail().type(dados.email);
        this.elements.inputTelefone().type(dados.telefone);
        this.elements.inputSexo().select(dados.sexo);
        this.elements.inputCEP().type(dados.cep);
        this.elements.inputNumero().type(dados.numero);
        this.elements.inputComplemento().type(dados.complemento);
        this.elements.inputEscolaridade().select(dados.escolaridade);
        this.elements.inputCurso().type(dados.curso);
        this.elements.inputInstituicao().type(dados.instituicao);
        this.elements.inputLinkedin().type(dados.linkedin);
        this.elements.inputComoChegouAteAVaga().select(dados.comoChegouAteAVaga);
        this.elements.inputPretensaoSalarial().type(dados.pretensaoSalarial);
        this.elements.inputCurriculo().attachFile(dados.curriculo);
        this.elements.inputFoto().attachFile(dados.foto);
    }
}

export default new FormsIncricaoVaga();