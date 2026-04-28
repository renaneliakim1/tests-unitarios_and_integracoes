const express = require('express');
const { produtos } = require('./produtos');

const app = express();
app.use(express.json());

app.get('/produtos', (req, res) => {
  res.status(200).json(produtos);
});


app.post('/produtos', (req, res) =>{
  const produto = {nome, preco};

    if(nome === null){
      res.json({ "erro": "Nome é obrigatorio"})
    }

    // completar....
} )

module.exports = app;