import PortalVagasPage from '../pages/PortalVagasPage';
import FormsIncricaoVaga from '../pages/FormsIncricaoVaga';
import { faker } from '@faker-js/faker';

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
    PortalVagasPage.buscarPorPalavraChave('Estágio em Testes');

    PortalVagasPage.elements.containerVagas()
      .contains('Estágio em Testes', { matchCase: false })
      .should('be.visible');

    PortalVagasPage.elements.containerVagas()
      .contains('Inscreva-se')
      .click();

    cy.url().should('eq', 'https://vagas.quarkrh.com.br/esig/73514786');
    PortalVagasPage.elements.botaoQueroMeInscrever().click();
    cy.url().should('eq', 'https://vagas.quarkrh.com.br/esig/inscricao/73514786');

    const candidato = {
      nome: `${faker.name.firstName('female')} ${faker.name.lastName()}`,
      email: 'teste.invalido.9841exemplo.invalid',
      telefone: '84999999999',
      sexo: 'Feminino',
      cep: '59015900',
      logradouro: 'Avenida Nevaldo Rocha',
      numero: '100',
      bairro: 'Tirol',
      cidade: 'NATAL/RN',
      escolaridade: 'Ensino Técnico Completo',
      curso: 'Ciência da Computação',
      linkedin: 'https://www.linkedin.com/in/candidato-teste',
      comoChegouAteAVaga: 'Rede Social',
      pretensaoSalarial: '2000',
      curriculo: 'curriculo.pdf',
      foto: 'foto.jpg'
    };

    FormsIncricaoVaga.elements.inputNome().clear().type(candidato.nome);
    FormsIncricaoVaga.elements.inputTelefone().clear().type(candidato.telefone);
    FormsIncricaoVaga.elements.inputSexo().select(candidato.sexo);
    FormsIncricaoVaga.elements.inputNumero().clear().type(candidato.numero);
    FormsIncricaoVaga.elements.inputEscolaridade().select(candidato.escolaridade);
    FormsIncricaoVaga.elements.inputCurso().clear().type(candidato.curso);
    FormsIncricaoVaga.elements.inputLinkedin().clear().type('https://www.linkedin.com/in/candidato-teste');
    FormsIncricaoVaga.elements.inputComoChegouAteAVaga().select(candidato.comoChegouAteAVaga);
    FormsIncricaoVaga.elements.inputPretensaoSalarial().clear().type('2000');

    FormsIncricaoVaga.elements.inputCEP().clear().type('59015900');
    FormsIncricaoVaga.elements.inputLogradouro()
      .should('have.value', 'Avenida Nevaldo Rocha');
    FormsIncricaoVaga.elements.inputBairro()
      .should('have.value', 'Tirol');
    FormsIncricaoVaga.elements.inputCidade()
      .should('have.value', 'NATAL/RN');

    FormsIncricaoVaga.elements.inputEmail()
      .clear()
      .type('teste.invalido.9841exemplo.invalid')
      .should('have.value', 'teste.invalido.9841exemplo.invalid');

    cy.on('window:alert', (mensagem) => {
      expect(mensagem).to.match(/campos obrigat[oó]rios inv[aá]lidos ou n[aã]o preenchidos/i);
    });

    FormsIncricaoVaga.elements.botaoAvancar().click();

    cy.url().should('eq', 'https://vagas.quarkrh.com.br/esig/inscricao/73514786');
    FormsIncricaoVaga.elements.alertaCamposInvalidos().should('be.visible');
    FormsIncricaoVaga.elements.avisoEmailInvalido().should('be.visible');
  });
})