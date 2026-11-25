class PortalVagasPage {
    elements = {
        inputPesquisa: () => cy.get('[data-cy="campo-palavra-chave-header-input"]'),
        botaoBuscar: () => cy.get('[data-cy="botao-buscar-header"]'),
        containerVagas: () => cy.get('[data-cy="instituicao-lista-vagas"]'),
        totalVagasEncontradas: () => cy.get('[data-cy="instituicao-total-vagas-texto"]'),
        tituloNenhumaVagaEncontrada: () => cy.get('[data-cy="instituicao-sem-vagas-filtro-titulo"]'),
        descricaoNenhumaVagaEncontrada: () => cy.get('[data-cy="instituicao-sem-vagas-filtro-descricao"]'),
        botaoVerTodasVagas: () => cy.get('[data-cy="botao-ver-todas-vagas"]'),
  };

  buscarPorPalavraChave(palavraChave) {
    this.elements.inputPesquisa().click();
    this.elements.inputPesquisa().type(palavraChave);
    this.elements.botaoBuscar().click();
  }
}

export default new PortalVagasPage();