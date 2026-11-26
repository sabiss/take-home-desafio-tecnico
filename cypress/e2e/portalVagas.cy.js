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

    PortalVagasPage.elements.totalVagasEncontradas().should('be.visible');
    PortalVagasPage.elements.tituloNenhumaVagaEncontrada().should('be.visible');
    PortalVagasPage.elements.descricaoNenhumaVagaEncontrada().should('be.visible');
    PortalVagasPage.elements.botaoVerTodasVagas().should('be.visible').and('be.enabled');

  })

  it('CT-03: Deve exibir vagas de vínculo CLT', () => {
    PortalVagasPage.buscarVagasPorVinculo('CLT');
    PortalVagasPage.elements.containerVagas()
      .contains('CLT', { matchCase: false })
      .should('be.visible');
  })
})