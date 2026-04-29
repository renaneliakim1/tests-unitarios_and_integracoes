PLANO DE TESTES - PROJETO CALCULADORA (Versão 1.0)
Projeto: Módulo de Calculadora Aritmética (JavaScript)
Responsável (QA): [Nome do Analista de Testes]
Data: [Data Atual]

I. Escopo dos Testes
O que será testado (In-Scope): As quatro operações matemáticas básicas (Somar, Subtrair, Multiplicar, Dividir) e o tratamento de erros em caso de divisão por zero ou inserção de dados não-numéricos (letras, nulos).
O que não será testado (Out-of-Scope): Interface gráfica (Front-end), performance para grandes volumes de dados e integração com banco de dados.
II. Estratégia de Testes
Nível de Teste: Teste de Unidade (Unitário).
Tipo de Teste: Funcional (Caixa Preta) e Estrutural (Caixa Branca focada em exceções).
Ferramenta: Automação utilizando o framework Jest (Node.js).
III. Critérios de Aceitação e Conclusão
Critério de Início: O código deve compilar sem erros de sintaxe e o ambiente local deve estar configurado.
Critério de Conclusão (DoD): 100% dos Casos de Teste Críticos (prioridade Alta) devem estar com o status Passou. Nenhum defeito bloqueante pode estar aberto no repositório.
IV. Tabela de Especificação e Execução de Casos de Teste (CTs)
A tabela a seguir descreve os testes planejados. Foi adicionada a coluna "Resultado da Execução" para registrar o status real após a rodada de testes: Passou (Passed), Falhou (Failed) ou Bloqueado (Blocked).

ID do Caso	Descrição / Objetivo	Dados de Entrada	Resultado Esperado	Resultado da Execução
CT-01	Validar a soma de dois números inteiros positivos (Caminho Feliz).	a = 2, b = 2	O sistema deve retornar 4.	✅ Passou
CT-02	Validar a subtração com resultado positivo.	a = 5, b = 3	O sistema deve retornar 2.	✅ Passou
CT-03	Validar a multiplicação de dois números inteiros.	a = 3, b = 4	O sistema deve retornar 12.	✅ Passou
CT-04	Validar a divisão exata entre dois números.	a = 10, b = 2	O sistema deve retornar 5.	✅ Passou
CT-05	Validar o erro ao tentar dividir por zero (Caminho Triste / Valor Limite).	a = 10, b = 0	O sistema deve lançar um erro informando que divisão por zero não é permitida.	✅ Passou
CT-06	Validar a proteção contra tipos de dados não numéricos (Ex: Strings).	a = "Dois", b = 2	O sistema deve lançar um erro de tipagem (TypeError) exigindo números.	❌ Falhou (O erro disparou, mas a mensagem foi diferente da especificada)
CT-07	Validar a proteção ao enviar um valor nulo.	a = null, b = 5	O sistema deve lançar um TypeError.	⚠️ Bloqueado (Depende de correção na tipagem do banco para testar nulos)
(Nota: Os resultados na tabela acima são simulações de uma execução real para demonstrar o preenchimento prático do plano e o acompanhamento dos testes).

V. Gestão de Riscos
Risco Identificado	Severidade	Ação de Mitigação
Falta de cobertura para números decimais (ex: 5.5 + 2.1).	Média	Incluir novos Casos de Teste específicos para ponto flutuante na próxima Sprint.
Alteração no código quebrar testes antigos (Regressão).	Alta	Configurar execução obrigatória dos testes unitários antes de qualquer aceite de código novo (Pipeline CI/CD).
VI. Ambiente de Testes
Hardware/Software: Máquina de desenvolvimento local (Windows, macOS ou Linux).
Dependências: Node.js (v18 ou superior) e Framework Jest (v29+).
VII. Parecer Final e Observações (Test Summary Report)
Métricas de Execução: Foram planejados e executados 7 casos de teste. Desses, 5 passaram (71%), 1 falhou (14%) e 1 foi bloqueado (14%).
Observações Técnicas: O erro identificado no CT-06 é de baixa prioridade sistêmica, referindo-se apenas a uma divergência entre a mensagem de erro textual esperada e a retornada pelo código. O CT-07 não pôde ser executado devido à falta de configuração para entradas nulas no simulador do banco.
Decisão / Parecer: 🔴 NÃO APROVADO PARA PRODUÇÃO (No-Go). É necessário corrigir a mensagem de erro (referente ao CT-06) e resolver o bloqueio do CT-07 para uma nova rodada de testes (Reteste) antes do lançamento oficial.
VIII. Aprovações
Atestamos que este documento reflete o planejamento e a execução real, em conformidade com as diretrizes de garantia de qualidade (QA) do projeto.

QA Lead / Analista de Testes Responsável

Product Owner / Gerente de Projetos

