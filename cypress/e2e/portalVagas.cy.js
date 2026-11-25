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
  })
})