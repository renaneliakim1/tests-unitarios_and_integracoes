const request = require('supertest');
const app = require('../app'); // ajuste conforme seu projeto

describe('API de Livros', () => {

  let livroCriado;

  // ✅ Teste de Caminho Feliz
  it('deve cadastrar um livro com sucesso', async () => {
    const novoLivro = {
      nome: "Dom Casmurro",
      autor: "Machado de Assis",
      genero: "Romance"
    };

    const response = await request(app)
      .post('/livros')
      .send(novoLivro);

    expect(response.status).toBe(201);

    // validação do corpo
    expect(response.body).toHaveProperty('id');
    expect(response.body.nome).toBe(novoLivro.nome);
    expect(response.body.autor).toBe(novoLivro.autor);
    expect(response.body.genero).toBe(novoLivro.genero);

    livroCriado = response.body;
  });

  // ⚠️ Teste de Validação de Dados
  it('deve retornar erro ao cadastrar livro sem autor', async () => {
    const livroInvalido = {
      nome: "Livro sem autor",
      genero: "Mistério"
    };

    const response = await request(app)
      .post('/livros')
      .send(livroInvalido);

    expect(response.status).toBe(400);

    expect(response.body).toHaveProperty('erro');
    expect(response.body.erro).toMatch(/autor/i);
  });

  // ❌ Teste de Caminho Triste
  it('deve retornar 404 ao buscar livro inexistente', async () => {
    const idInexistente = 999999;

    const response = await request(app)
      .get(`/livros/${idInexistente}`);

    expect(response.status).toBe(404);

    expect(response.body).toHaveProperty('erro');
  });

  // 🔍 Teste extra (boa prática)
  it('deve buscar um livro pelo id', async () => {
    const response = await request(app)
      .get(`/livros/${livroCriado.id}`);

    expect(response.status).toBe(200);

    expect(response.body).toHaveProperty('id');
    expect(response.body.nome).toBe(livroCriado.nome);
    expect(response.body.autor).toBe(livroCriado.autor);
    expect(response.body.genero).toBe(livroCriado.genero);
  });

});