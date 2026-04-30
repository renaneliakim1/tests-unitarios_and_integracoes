//Serviço que consome a API do GitHub



// Importa o axios para fazer requisições HTTP
const axios = require('axios');

// Função assíncrona que busca os dados na API
async function getUserData(username) {
  // Faz a requisição GET real para o GitHub
  const response = await axios.get(`https://api.github.com/users/renaneliakim1`);
  
  // Retorna apenas a carga de dados (data) da resposta
  return response.data;
}

module.exports = { getUserData };