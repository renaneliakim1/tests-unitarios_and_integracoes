const express = require('express');

const app = express();
app.use(express.json());

// "Banco de dados" em memória
let livros = [];
let idCounter = 1;

// POST /livros
app.post('/livros', (req, res) => {
  const { nome, autor, genero } = req.body;

  // Validação
  if (!nome || !autor || !genero) {
    return res.status(400).json({
      erro: 'Os campos nome, autor e genero são obrigatórios'
    });
  }

  const novoLivro = {
    id: idCounter++,
    nome,
    autor,
    genero
  };

  livros.push(novoLivro);

  return res.status(201).json(novoLivro);
});

// GET /livros/:id
app.get('/livros/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const livro = livros.find(l => l.id === id);

  if (!livro) {
    return res.status(404).json({
      erro: 'Livro não encontrado'
    });
  }

  return res.status(200).json(livro);
});

module.exports = app;