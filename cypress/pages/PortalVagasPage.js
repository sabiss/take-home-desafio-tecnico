class PortalVagasPage {
    elements = {
        inputPesquisa: () => cy.get('[data-cy="campo-palavra-chave-header-input"]'),
        botaoBuscar: () => cy.get('[data-cy="botao-buscar-header"]'),
        containerVagas: () => cy.get('[data-cy="instituicao-lista-vagas"]'),
        totalVagasEncontradas: () => cy.get('[data-cy="instituicao-total-vagas-texto"]'),
        tituloNenhumaVagaEncontrada: () => cy.get('[data-cy="instituicao-sem-vagas-filtro-titulo"]'),
        descricaoNenhumaVagaEncontrada: () => cy.get('[data-cy="instituicao-sem-vagas-filtro-descricao"]'),
        botaoVerTodasVagas: () => cy.get('[data-cy="botao-ver-todas-vagas"]'),
        inputVinculo: () => cy.get('[data-cy="campo-vinculo-header-botao"]'),
        botaoQueroMeInscrever: () => cy.get('[data-cy="botao-vaga-inscrever"]'),

  };

  buscarPorPalavraChave(palavraChave) {
    this.elements.inputPesquisa().click();
    this.elements.inputPesquisa().type(palavraChave);
    this.elements.botaoBuscar().click();
  }

  buscarVagasPorVinculo(vinculo) {
    this.elements.inputVinculo().click();

    if(vinculo === 'Estágio') {
      cy.get('[data-cy="campo-vinculo-header-option-1"]').click();
    }
    else if(vinculo === 'CLT'){
      cy.get('[data-cy="campo-vinculo-header-option-0"]').click();
    }
    else {
      cy.get('[data-cy="campo-vinculo-header-option-todos"]').click();
    }

    this.elements.botaoBuscar().click();
  }
}

export default new PortalVagasPage();