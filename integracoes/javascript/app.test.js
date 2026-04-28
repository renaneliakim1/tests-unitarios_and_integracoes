const request = require('supertest');
const app = require('./app');

describe('GET /produtos', () => {
  test('deve retornar lista de produtos perfeitamente igual', async () => {
    const response = await request(app).get('/produtos');

    // Validação da Camada HTTP
    expect(response.status).toBe(200);

    // Validação Ativa do Corpo da Resposta (Deep Equality)
    expect(response.body).toEqual([
      { id: 1, nome: "Notebook", preco: 3500 },
      { id: 2, nome: "Mouse", preco: 150 },
    ]);
  });

  test('cada produto deve ter os atributos corretos', async () => {
    const response = await request(app).get('/produtos');
    const primeiroProduto = response.body[0];

    // Validação ativa que garante que o esqueleto do retorno não perde dados!
    expect(primeiroProduto).toHaveProperty('id');
    expect(primeiroProduto).toHaveProperty('nome');
    expect(primeiroProduto).toHaveProperty('preco');
  });
});