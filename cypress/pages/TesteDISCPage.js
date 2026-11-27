class TesteDISCPage {
    elements = {
        tituloTesteDISC: () => cy.get('[data-cy="teste-disc-header-titulo-acoes"]'),
        botaoIniciarTeste: () => cy.get('[data-cy="botao-teste-disc-iniciar-continuar"]'),
        botaoPrimeiraAlternativa: () => cy.get('[data-cy="teste-disc-alternativa-item-0"]'),
        botaoProximaPergunta: () => cy.get('[data-cy="botao-teste-disc-proxima"]'),
        botaoFinalizarTeste: () => cy.get('[data-cy="botao-teste-disc-finalizar"]'),
    }

    iniciarTesteDISC() {
        this.elements.botaoIniciarTeste().click();
    }

    selecionarPrimeiraAlternativa() {
        this.elements.botaoPrimeiraAlternativa().click();
    }

    avancarPergunta(){
        this.elements.botaoProximaPergunta().click();
    }

    responderTesteDISC() {
        for (let i = 0; i < 40; i++) {
            this.selecionarPrimeiraAlternativa();
            this.avancarPergunta();
        }
    }

    finalizarTesteDISC() {
        this.elements.botaoFinalizarTeste().click();
    }
}

export default new TesteDISCPage();