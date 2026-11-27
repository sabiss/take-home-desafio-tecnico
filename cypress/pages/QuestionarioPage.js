export class QuestionarioPage {
    elements = {
        tituloQuestionario: () => cy.contains('Questionário', { matchCase: false }),
        perfilAnalitico: () => cy.get('[data-cy="campo-questao-texto-input-0-0-0"]'),
        perfilControlador: () => cy.get('[data-cy="campo-questao-texto-input-0-0-1"]'),
        perfilRelacional: () => cy.get('[data-cy="campo-questao-texto-input-0-0-2"]'),
        perfilExperimental: () => cy.get('[data-cy="campo-questao-texto-input-0-0-3"]'),
        inputPretensaoSalarial: () => cy.get('[data-cy="campo-questao-texto-input-0-1"]'),
        inputCategoriaPCD: () => cy.get('[data-cy="campo-questao-texto-input-0-2"]'),
        inputMotivoFazerParteTime: () => cy.get('[data-cy="campo-questao-textarea-input-0-3"]'),
        inputPeriodoAtualDoCurso: () => cy.get('[data-cy="campo-questao-texto-input-0-4"]'),
        checkboxDisponibilidadeTrabalharPelaManha: () => cy.get('[data-cy="campo-questao-checkbox-input-0-6-0"]'),
        checkboxDisponibilidadeTrabalharTarde: () => cy.get('[data-cy="campo-questao-checkbox-input-0-6-1"]'),
        checkboxSimEstouEnvolvidoEmProjetos: () => cy.get('[data-cy="campo-questao-checkbox-input-0-7-0"]'),
        checkboxNaoEstouEnvolvidoEmProjetos: () => cy.get('[data-cy="campo-questao-checkbox-input-0-7-1"]'),
        checkboxSimJaParticipeiDosProcessosSeletivosDaEmpresa: () => cy.get('[data-cy="campo-questao-checkbox-input-0-8-0"]'),
        checkboxNuncaParticipeiDosProcessosSeletivosDaEmpresa: () => cy.get('[data-cy="campo-questao-checkbox-input-0-8-1"]'),
        checkboxConcorcoComPoliticaDePrivacidade: () => cy.get('[data-cy="campo-questao-checkbox-input-0-9-0"]'),
        inputJaTrabalhouComIaOuUsa: () => cy.get('[data-cy="campo-questao-texto-input-0-10"]'),
        inputOqueEstaEstudandoNoMomento: () => cy.get('[data-cy="campo-questao-texto-input-0-11"]'),
        inputComoSeATualiza: () => cy.get('[data-cy="campo-questao-texto-input-0-12"]'),
        inputQuaisMetodologiasAgeisJaUtilizou: () => cy.get('[data-cy="campo-questao-texto-input-0-13"]'),
        inputDisponibilidadeParaPresencial: () => cy.get('[data-cy="campo-questao-texto-input-0-14"]'),
        botaoAvancarInscricao: () => cy.get('[data-cy="botao-vaga-inscricao-avancar"]'),
    }

    preencherQuestionario() {
        this.elements.perfilAnalitico().check();
        this.elements.perfilRelacional().check();
        this.elements.inputPretensaoSalarial().clear().type('2000');
        this.elements.inputCategoriaPCD().clear().type('Não se aplica');
        this.elements.inputMotivoFazerParteTime().clear().type('Tenho interesse em aprender e contribuir com a equipe.');
        this.elements.inputPeriodoAtualDoCurso().clear().type('3º período');
        this.elements.checkboxDisponibilidadeTrabalharPelaManha().check();
        this.elements.checkboxDisponibilidadeTrabalharTarde().check();
        this.elements.checkboxNaoEstouEnvolvidoEmProjetos().check();''
        this.elements.checkboxSimJaParticipeiDosProcessosSeletivosDaEmpresa().check();
        this.elements.checkboxConcorcoComPoliticaDePrivacidade().check();
        this.elements.inputJaTrabalhouComIaOuUsa().clear().type('Não, mas tenho interesse em aprender.');
        this.elements.inputOqueEstaEstudandoNoMomento().clear().type('Atualmente estou estudando desenvolvimento web e programação.');
        this.elements.inputComoSeATualiza().clear().type('Acompanho blogs, fóruns e cursos online para me manter atualizado.');
        this.elements.inputQuaisMetodologiasAgeisJaUtilizou().clear().type('Já utilizei Scrum e Kanban em projetos acadêmicos.');
        this.elements.inputDisponibilidadeParaPresencial().clear().type('Tenho disponibilidade para trabalhar presencialmente.');
    }

    avancarNaInscricao() {
        this.elements.botaoAvancarInscricao().click();
    }   

    aguardarBotaoAvancarHabilitado(tempoMaximo = 50000) {
        this.elements
        .botaoAvancar({ timeout: tempoMaximo })
        .scrollIntoView()
        .should('be.visible')
        .and('be.enabled');
    }
    concluirInscricao() {
        this.aguardarBotaoAvancarHabilitado();
        this.elements.botaoAvancar().click();
    }
}