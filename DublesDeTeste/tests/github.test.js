//Testes do githubService



// Importa o axios (que será mockado)
const axios = require('axios');
// Importa a função que vamos testar
const { getUserData } = require('../src/githubService');

// Informa ao Jest para mockar todo o módulo 'axios'
jest.mock('axios');

test('Deve retornar dados do usuário mockados sem fazer requisição real', async () => {
  // 1. Preparação (Arrange): Criação do nosso STUB (Dados Mockados)
  const mockUser = { name: 'Rena', bio: 'Developer' };
  
  // Configura o comportamento do Mock (O que o axios.get vai retornar quando for chamado)
  // Como axios.get retorna uma Promise, usamos mockResolvedValue
  axios.get.mockResolvedValue({ data: mockUser });

  // 2. Ação (Act): Chamamos a nossa função
  const data = await getUserData('rena');
  
  // 3. Verificação (Assert): Comparamos os resultados
  expect(data.name).toBe('Rena'); // Testa o retorno
  
  // Verifica o COMPORTAMENTO: Garante que a API foi chamada exatamente 1 vez
  expect(axios.get).toHaveBeenCalledTimes(1);
  
  // Verifica se foi chamado com a URL correta
  expect(axios.get).toHaveBeenCalledWith('https://api.github.com/users/renaneliakim1');
});