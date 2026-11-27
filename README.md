# Automação do Portal de Vagas ESIG

Projeto de automação de testes E2E com Cypress para o portal de vagas ESIG GROUP.

## Requisitos

- Node.js e npm em versões compatíveis com Cypress 16.3.0.
- Acesso à internet para abrir o portal e carregar os recursos do Cypress.

## Instalação

Na raiz do projeto, instale as dependências definidas no `package-lock.json`:

```bash
npm ci
```

Opcionalmente, confirme a instalação do Cypress:

```bash
npx cypress verify
```

## Como executar

Abrir o Cypress em modo interativo:

```bash
npx cypress open
```

Executar o arquivo E2E em modo headless:

```bash
npx cypress run --spec cypress/e2e/portalVagas.cy.js
```

O `baseUrl` configurado em `cypress.config.js` aponta para `https://vagas.quarkrh.com.br/esig`. Este repositório contém a automação, não o código da aplicação do portal; portanto, não há um servidor local da aplicação para iniciar. O script `npm test` ainda é apenas um placeholder e não executa a suíte Cypress.

> **Atenção:** os testes acessam um portal remoto. Não execute um fluxo de inscrição real sem autorização e sem um ambiente de teste apropriado. O CT-05 automatizado está incompleto por causa do Cloudflare Turnstile, e suas ações de conclusão estão comentadas.

## Casos de teste manuais

### CT-01: Deve exibir vagas correspondentes ao buscar por um termo existente

**Objetivo:** Esse caso de teste valida o fluxo correto de buscar uma vaga por uma palavra-chave e obter como resultado uma vaga existente.

**Pré-condição:** Estar na página inicial do portal de vagas ESIG GROUP.

| # | Passo | Resultado Esperado |
| :--- | :--- | :--- |
| 1 | Clicar no input de pesquisa | O input de pesquisa deve ficar focado |
| 2 | Digitar a palavra chave "estágio" | O texto digitado deve aparecer no campo de pesquisa |
| 3 | Clicar no botão "Buscar"| A listagem deve ser atualizada exibindo pelo menos uma vaga que contenha a palavra-chave "estágio" |

### CT-02: Deve exibir nenhuma vaga ao buscar por um termo inexistente

**Objetivo:** Esse caso de teste valida o fluxo correto de buscar uma vaga por uma palavra-chave e obter como resultado nenhuma vaga.

**Pré-condição:** Estar na página inicial do portal de vagas ESIG GROUP.

| # | Passo | Resultado Esperado |
| :--- | :--- | :--- |
| 1 | Clicar no input de pesquisa | O input de pesquisa deve ficar focado |
| 2 | Digitar a palavra chave "termoInexistente" | O texto digitado deve aparecer no campo de pesquisa |
| 3 | Clicar no botão "Buscar"| A listagem deve ser atualizada exibindo como resultado:<br>• 0 vagas encontradas<br>• O texto "Nenhuma vaga encontrada"<br>• A descrição "Não encontramos vagas que correspondam aos filtros aplicados. Tente ajustar os critérios de busca ou remover alguns filtros."<br>• Um botão "Ver todas as vagas" desbloqueado e clicável |

**Cobertura automatizada atual:** verifica a visibilidade do contador, do título e da descrição de lista vazia e do botão. Não verifica que o valor do contador seja numericamente zero.

### CT-03: Deve exibir vagas de vínculo CLT
**Objetivo:** Esse caso de teste valida o fluxo correto da busca por vagas de vínculo CLT

**Pré-condição:** Estar na página inicial do portal de vagas ESIG GROUP.

| # | Passo | Resultado Esperado |
| :--- | :--- | :--- |
| 1 | Clicar no input de vínculos | deve ser exibido um dropdown com 3 opções |
| 2 | Selecionar a opção "CLT" | Opção "CLT" deve ser selecionada |
| 3 | Clicar no botão "Buscar"| A listagem deve ser atualizada exibindo vagas de vínculo CLT |

**Cobertura automatizada atual:** seleciona CLT e verifica que o texto "CLT" aparece no container de vagas. Não verifica a quantidade de opções do filtro nem valida individualmente cada vaga exibida.

### CT-04: Deve bloquear o avanço da inscrição por causa do e-mail inválido
**Objetivo:** Esse caso de teste valida o bloqueio do avanço na incrição do candidato que possui um e-mail inválido

**Pré-condição:** Estar na página inicial do portal de vagas ESIG GROUP.

| # | Passo | Resultado Esperado |
| :--- | :--- | :--- |
| 1 | Clicar no input de pesquisa | o input de pesquisa deve ficar focado |
| 2 | Digitar "Estágio em Testes" | O texto digitado deve aparecer no campo de pesquisa |
| 3 | Clicar no botão "Buscar"| A listagem deve ser atualizada exibindo pleo menos uma vaga de estágio em testes |
| 4 | Clicar em "Inscreva-se" | Deve ser redirecionado para a tela de informações sobre o estágio de url "https://vagas.quarkrh.com.br/esig/73514786" |
| 5 | Clicar no botão "Quero me inscrever" | Ser redirecionado para o formulário de inscrição de url "https://vagas.quarkrh.com.br/esig/inscricao/73514786" |
| 6 | Preencher todos os campos obrigatórios, exceto Bairro e Logradouro e usando um e-mail inválido | Os campos obrigatórios, devem possuir valor |
| 7 | Verificar Bairro e Logradouro | Os seguintes campos devem possuir os seguintes valores: <br>• Logradouro: Avenida Nevaldo Rocha<br>• Bairro: Tirol<br>•Cidade/UF: NATAL/RN |
| 8 | Clicar no botão "Avançar" | <br>• Deve permanecer na mesma tela com Url "https://vagas.quarkrh.com.br/esig/inscricao/73514786" <br>• Deve haver o aviso informando sobre campos obrigtórios inválidos ou não preenchidos <br>• Deve haver um aviso informando que o e-mail é inválido |

**Cobertura automatizada atual:** verifica que a URL não mudou e que os avisos geral e de e-mail inválido aparecem. Não verifica os valores de endereço preenchidos pelo CEP.

### CT-05: Deve concluir uma candidatura completa

**Objetivo:** Validar o fluxo completo de candidatura para a vaga "Estágio em Testes", desde a busca até a confirmação de conclusão da inscrição.

**Pré-condição:** Estar na página inicial do portal de vagas ESIG GROUP e ter acesso ao arquivo fictício `cypress/fixtures/curriculo.pdf` e `cypress/fixtures/foto_perfil.jpg`.

| # | Passo | Resultado Esperado |
| :--- | :--- | :--- |
| 1 | Pesquisar por "Estágio em Testes" e clicar em "Buscar" | A listagem deve apresentar pelo menos uma vaga com o título "Estágio em Testes" |
| 2 | Clicar em "Inscreva-se" na vaga encontrada | Deve ser exibida a tela de informações da vaga de URL `https://vagas.quarkrh.com.br/esig/73514786`|
| 3 | Clicar no botão "Quero me inscrever" | Deve ser exibido o formulário de inscrição da URL `https://vagas.quarkrh.com.br/esig/inscricao/73514786` |
| 4 | Preencher os dados pessoais obrigatórios com os dados de teste informados | Todos os campos preenchidos devem exibir os respectivos valores |
| 5 | Informar o CEP "59015900" | Os campos devem ser preenchidos automaticamente: Logradouro "Avenida Nevaldo Rocha", Bairro "Tirol" e Cidade/UF "NATAL/RN" |
| 6 | Anexar o currículo `curriculo.pdf` | O PDF fictício deve ser selecionado e associado ao currículo do candidato |
| 7 | Anexar a foto de perfil `foto_perfil.jpg` | A imagem fictícia deve ser selecionada e associada ao perfil do candidato |
| 8 | Clicar em "Avançar" | Os dados devem ser aceitos sem alertas de campo inválido ou não preenchido e o sistema deve iniciar a etapa do questionário |
∣ 9 | Preencher todos os campos do questionário | Todos os campos devem estar preenchidos e deve ser exibido um captcha |
| 10 | Marcar o captcha | Botão de "Confirmar incrição" deve ser habilitado |
| 11 | Clicar em "COnfirmar inscrição" | Deve ser direcionada para tela de informação sobre o teste DISC |
| 12 | Clicar em "Fazer teste DISC obrigatório" | Ser redirecionado para o teste DISC |
| 13 | Clicar em "Começar agora" | Dese ser exibido a primeira pergunta do teste |
| 14 | Responder as 40 perguntas do teste | A cada resposta, deve ser pressionado o botão "Próximo" e ser exibido outra pergunta |
| 15 | Clicar em "Finalizar Teste" | Deve ser direcionado para a tela de resultado do teste. Deve haver avisos de inscrição confirmada e teste concluído |


**Estado da automação:** o CT-05 atualmente preenche o formulário e o questionário, mas para no bloqueio do Cloudflare Turnstile. As chamadas de conclusão da inscrição e do teste DISC estão comentadas em `cypress/e2e/portalVagas.cy.js`; portanto, o fluxo completo ainda não está validado automaticamente.

### CT-BÔNUS: Deve bloquear o avanço na inscrição por causa do currículo de mais de 5mb
**Objetivo:** Esse caso de teste valida o bloqueio do avanço na incrição do candidato que possui um currícul com mais de 5mb

**Pré-condição:** Estar na página inicial do portal de vagas ESIG GROUP.

| # | Passo | Resultado Esperado |
| :--- | :--- | :--- |
| 1 | Clicar no input de pesquisa | o input de pesquisa deve ficar focado |
| 2 | Digitar "Estágio em Testes" | O texto digitado deve aparecer no campo de pesquisa |
| 3 | Clicar no botão "Buscar"| A listagem deve ser atualizada exibindo pleo menos uma vaga de estágio em testes |
| 4 | Clicar em "Inscreva-se" | Deve ser redirecionado para a tela de informações sobre o estágio de url "https://vagas.quarkrh.com.br/esig/73514786" |
| 5 | Clicar no botão "Quero me inscrever" | Ser redirecionado para o formulário de inscrição de url "https://vagas.quarkrh.com.br/esig/inscricao/73514786" |
| 6 | Preencher todos os campos, usando um currículo maior que 5MB| Todos os campos devem possuir valor |
| 7 | Clicar no botão "Avançar" | <br>• Deve permanecer na mesma tela com Url "https://vagas.quarkrh.com.br/esig/inscricao/73514786" <br>• Deve haver o aviso informando sobre que o arquivo do currículo deve ter no máximo 5MB |

**Cobertura automatizada atual:** anexa `cypress/fixtures/curriculo_mais_5mb.pdf`, tenta avançar e verifica que o elemento de erro do currículo está visível. Não verifica o texto exato do aviso.

## Organização da automação

- `cypress/e2e/portalVagas.cy.js`: cenários E2E CT-01 a CT-05 e CT-BÔNUS.
- `cypress/pages/`: Page Objects para busca, inscrição, questionário e teste DISC.
- `cypress/support/factories/candidatoFactory.js`: geração de dados fictícios de candidato com Faker.
- `cypress/fixtures/`: arquivos de teste usados como currículo e foto.

Os Page Objects encapsulam seletores e ações das páginas. A factory centraliza os dados de candidato para reduzir repetição nos testes.

## O que foi feito

- Estruturação da suíte Cypress para busca de vagas, filtros e validação de e-mail.
- Inclusão do cenário bônus de bloqueio de currículo acima de 5 MB.
- Organização das interações com a aplicação em Page Objects Model.
- Geração de dados de candidato com Faker e uso de arquivos de fixture.
- Especificação do fluxo de inscrição e DISC no CT-05. A automação desse fluxo ainda está pendente por causa do Turnstile e da necessidade de respostas de API compatíveis com uma inscrição válida.

## Desafios, aprendizados e observações

### O que foi mais difícil

O principal desafio foi a dependência do Cloudflare Turnstile em um portal remoto. Por mais que eu tenha pesquisado bastante sobre como ultrapassar esse captcha com o cypress, não obtive sucesso. Uma resposta HTTP bem-sucedida simulada no Cypress não cria, por si só, uma inscrição persistida ou um identificador DISC válido. Para testar o fluxo completo com estabilidade, é necessário usar chaves oficiais de teste em um ambiente controlado.
### O que foi aprendido

- Como criar um teste com Cypress
- Como o Cypress funciona em relação ao Playwright, framework com o qual trabalho
- Diferenças entre Cypress e Playwright 
- O captcha realmente possui uma boa proteção contra bots e eu realmente gostaria de aprender se é possível e como passar deles

### O que chamou atenção no portal

- O preenchimento do endereço pode ser iniciado pelo CEP.
- O fluxo de inscrição reúne várias etapas, incluindo questionário, Turnstile e, conforme a inscrição, o teste DISC.
- O teste DISC é bem interessante
- No momento após anexar os arquivos, seria interessante que, com apenas um clique no "avnçar", já fazer o upload dos arquivos e realmente avançar na aplicação, não necessitando assim de 2 cliques
