### CT-01: Deve exibir vagas correspondentes ao buscar por um termo existente

**Objetivo:** Esse caso de teste valida o fluxo correto de buscar uma vaga por uma palavra-chave e obter como resultado uma vaga existente.

**Pré-condição:** Estar na página inicial do portal de vagas ESIG GROUP.

| # | Passo | Resultado Esperado |
| :--- | :--- | :--- |
| 1 | Clicar no input de pesquisa | O input de pesquisa deve ficar focado |
| 2 | Digitar a palavra chave "estágio" | O texto digitado deve aparecer no campo de pesquisa |
| 3 | Clicar no botão "Buscar"| A listagem deve ser atualizada exibindo pelo menos uma vaga que contenha a palavra-chave "testes" |

### CT-02: Deve exibir nenhuma vaga ao buscar por um termo inexistente

**Objetivo:** Esse caso de teste valida o fluxo correto de buscar uma vaga por uma palavra-chave e obter como resultado nenhuma vaga.

**Pré-condição:** Estar na página inicial do portal de vagas ESIG GROUP.

| # | Passo | Resultado Esperado |
| :--- | :--- | :--- |
| 1 | Clicar no input de pesquisa | O input de pesquisa deve ficar focado |
| 2 | Digitar a palavra chave "termoInexistente" | O texto digitado deve aparecer no campo de pesquisa |
| 3 | Clicar no botão "Buscar"| A listagem deve ser atualizada exibindo como resultado:<br>• 0 vagas encontradas<br>• O texto "Nenhuma vaga encontrada"<br>• A descrição "Não encontramos vagas que correspondam aos filtros aplicados. Tente ajustar os critérios de busca ou remover alguns filtros."<br>• Um botão "Ver todas as vagas" desbloqueado e clicável |

### CT-03: Deve exibir vagas de vínculo CLT
**Objetivo:** Esse caso de teste valida o fluxo correto da busca por vagas de vínculo CLT

**Pré-condição:** Estar na página inicial do portal de vagas ESIG GROUP.

| # | Passo | Resultado Esperado |
| :--- | :--- | :--- |
| 1 | Clicar no input de vínculos | deve ser exibido um dropdown com 3 opções |
| 2 | Selecionar a opção "CLT" | Opção "CLT" deve ser selecionada |
| 3 | Clicar no botão "Buscar"| A listagem deve ser atualizada exibindo vagas de vínculo CLT |

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
| 6 | Preencher todos os campos obrigatórios, exceto e-mail, CEP, Bairro e Logradouro | Os campos obrigatórios, exceto e-mail, CEP, Bairro e Logradouro devem possuir valor |
| 7 | Preencher o campo de CEP com o valor "59015900" | Os seguintes campos devem possuir os seguintes valores: <br>• Logradouro: Avenida Nevaldo Rocha<br>• Bairro: Tirol<br>•Cidade/UF: NATAL/RN |
| 8 | Preencher o campo de e-mail com "teste.invalido.9841exemplo.invalid" | campo de e-mail deve conter valor | 
| 9 | Clicar no botão "Avançar" | <br>• Deve permanecer na mesma tela com Url "https://vagas.quarkrh.com.br/esig/inscricao/73514786" <br>• Deve haver o alert informando sobre campos obrigtórios inválidos ou não preenchidos <br>• Deve haver um aviso informando que o e-mail é inválido |