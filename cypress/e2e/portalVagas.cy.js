import PortalVagasPage from '../pages/PortalVagasPage';
import FormsIncricaoVaga from '../pages/FormsIncricaoVagaPage';
import { gerarCandidato } from '../support/factories/candidatoFactory';

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

  it('CT-04: Deve bloquear o avanço da inscrição por causa do e-mail inválido', () => {
    const candidato = gerarCandidato({
      email: 'teste.invalido.9841exemplo.invalid',
    });
    
    PortalVagasPage.buscarPorPalavraChave('Estágio em Testes');
    PortalVagasPage.acessarInscricaoDaVaga('Estágio em Testes');
    PortalVagasPage.seInscreverNaVaga();

    FormsIncricaoVaga.preencherFormularioInscricaoVaga(candidato);
    FormsIncricaoVaga.anexarCurriculo(candidato.curriculo);
    FormsIncricaoVaga.anexarFotoPerfil(candidato.foto);
    FormsIncricaoVaga.elements.botaoAvancar().click();

    cy.url().should('eq', 'https://vagas.quarkrh.com.br/esig/inscricao/73514786');
    FormsIncricaoVaga.elements.alertDeFalhaEmCamposObrigatorios().should('be.visible');
    FormsIncricaoVaga.elements.avisoEmailInvalido().should('be.visible');
  });
})