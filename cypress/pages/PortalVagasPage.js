class PortalVagasPage {
    elements = {
        inputPesquisa: () => cy.get('input[placeholder="Busque pelo título do processo seletivo ou pelo cargo..."]')
            .filter(':visible')
            .first(),
        botaoBuscar: () => cy.contains('button', 'Buscar'),
        containerVagas: () => cy.get('[data-cy="instituicao-lista-vagas"]'),
  };

  buscarPorPalavraChave(palavraChave) {
    this.elements.inputPesquisa().click();
    this.elements.inputPesquisa().type(palavraChave);
    this.elements.botaoBuscar().click();
  }
}

export default new PortalVagasPage();