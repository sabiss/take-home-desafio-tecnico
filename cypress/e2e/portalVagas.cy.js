import PortalVagasPage from '../pages/PortalVagasPage';
import FormsIncricaoVaga from '../pages/FormsIncricaoVagaPage';
import QuestionarioPage from '../pages/QuestionarioPage';
import TesteDISCPage from '../pages/TesteDISCPage';
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

    PortalVagasPage.elements.totalVagasEncontradas()
      .should('be.visible')
      .and('contain.text', '0 vagas encontradas');
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
    FormsIncricaoVaga.avancarInscricao();

    cy.url().should('eq', 'https://vagas.quarkrh.com.br/esig/inscricao/73514786');
    FormsIncricaoVaga.elements.alertDeFalhaEmCamposObrigatorios().should('be.visible');
    FormsIncricaoVaga.elements.avisoEmailInvalido().should('be.visible');
  });

  it('CT-05: Deve avançar para a próxima etapa da inscrição com sucesso', () => {
    //TODO: descobrir como passar do captcha do Cloudflare Turnstile para poder avançar na inscrição e fazer o teste DISC
    const candidato = gerarCandidato();

    PortalVagasPage.buscarPorPalavraChave('Estágio em Testes');
    PortalVagasPage.acessarInscricaoDaVaga('Estágio em Testes');
    PortalVagasPage.seInscreverNaVaga();

    FormsIncricaoVaga.preencherFormularioInscricaoVaga(candidato);
    FormsIncricaoVaga.anexarCurriculo(candidato.curriculo);
    FormsIncricaoVaga.anexarFotoPerfil(candidato.foto);
    FormsIncricaoVaga.avancarInscricao();
    FormsIncricaoVaga.avancarInscricao();//a inscrição so avança e mostra o erro, após dois clique no avançar. O primeiro clique, aparentemente, é pra upar os arquivos e o seguinte clique é que faz a validação

    QuestionarioPage.elements.tituloQuestionario().should('be.visible');

    QuestionarioPage.preencherQuestionario();
    QuestionarioPage.avancarNoQuestionario();
    
    /* Não consegui passar do captcha do Cloudflare Turnstile
    QuestionarioPage.concluirInscricao();
    PortalVagasPage.fazerTesteDICS();

    TesteDISCPage.iniciarTesteDISC();
    TesteDISCPage.responderTesteDISC();
    TesteDISCPage.finalizarTesteDISC();
    */
  });

  it('CT-BÔNUS-1: Deve bloquear o avanço na inscrição por causa do currículo de mais de 5mb', () => {
    const candidato = gerarCandidato({
      curriculo: 'cypress/fixtures/curriculo_mais_5mb.pdf',
    });

    PortalVagasPage.buscarPorPalavraChave('Estágio em Testes');
    PortalVagasPage.acessarInscricaoDaVaga('Estágio em Testes');
    PortalVagasPage.seInscreverNaVaga();

    FormsIncricaoVaga.preencherFormularioInscricaoVaga(candidato);
    FormsIncricaoVaga.anexarCurriculo(candidato.curriculo);
    FormsIncricaoVaga.anexarFotoPerfil(candidato.foto);
    FormsIncricaoVaga.avancarInscricao();
    FormsIncricaoVaga.avancarInscricao();//a inscrição so avança e mostra o erro, após dois clique no avançar. O primeiro clique, aparentemente, é pra upar os arquivos e o seguinte clique é que faz a validação


    cy.url().should('eq', 'https://vagas.quarkrh.com.br/esig/inscricao/73514786');
    FormsIncricaoVaga.elements.avisoErroCurriculo().should('be.visible');
  });

  it('CT-BÔNUS-2: Deve rejeitar um arquivo JPG anexado como currículo', () => {
    const candidato = gerarCandidato({
      curriculo: 'cypress/fixtures/foto_perfil.jpg',
    });

    PortalVagasPage.buscarPorPalavraChave('Estágio em Testes');
    PortalVagasPage.acessarInscricaoDaVaga('Estágio em Testes');
    PortalVagasPage.seInscreverNaVaga();

    FormsIncricaoVaga.preencherFormularioInscricaoVaga(candidato);
    FormsIncricaoVaga.anexarCurriculo(candidato.curriculo);
    //confirma que o arquivo anexado é realmente o arquivo de foto
    FormsIncricaoVaga.elements.inputCurriculo().should(($input) => {
      expect($input[0].files[0].name).to.equal('foto_perfil.jpg');
    });
    FormsIncricaoVaga.anexarFotoPerfil(candidato.foto);
    FormsIncricaoVaga.avancarInscricao();
    FormsIncricaoVaga.avancarInscricao();

    cy.url().should('eq', 'https://vagas.quarkrh.com.br/esig/inscricao/73514786');
    FormsIncricaoVaga.elements.avisoErroCurriculo()
      .should('be.visible')
  });
})