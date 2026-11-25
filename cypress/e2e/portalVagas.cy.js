import PortalVagasPage from '../pages/PortalVagasPage';

describe('Testes do Portal de Vagas', () => {
  beforeEach(() => {
    cy.visit('');
  });

  it('CT-01: Deve exibir vagas correspondentes ao buscar por um termo existente', () => {
    PortalVagasPage.buscarPorPalavraChave('estágio');
    PortalVagasPage.elements.containerVagas()
      .contains('estágio', { matchCase: false })
      .should('be.visible');
  });

  it('CT-02: Deve exibir nenhuma vaga ao buscar por um termo inexistente', () => {
    PortalVagasPage.buscarPorPalavraChave('termoInexistente');

    cy.contains('0 vagas encontradas').should('be.visible');
    cy.contains('Nenhuma vaga encontrada').should('be.visible');
    cy.contains('Não encontramos vagas que correspondam aos filtros aplicados. Tente ajustar os critérios de busca ou remover alguns filtros.').should('be.visible');
    cy.contains('button', 'Ver todas as vagas')
      .should('be.visible')
      .and('be.enabled')

  })
})