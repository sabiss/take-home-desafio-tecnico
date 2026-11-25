class PortalVagasPage {
    elements = {
        inputPesquisa: () => cy.get('input[placeholder="Busque pelo título do processo seletivo ou pelo cargo..."]'), 
        botaoBuscar: () => cy.contains('button', 'Buscar'),
  };
}

export default new PortalVagasPage();