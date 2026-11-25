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