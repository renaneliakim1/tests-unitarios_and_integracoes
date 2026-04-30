//Serviço de processamento de pedidos
 

// Simula um serviço de envio de e-mails
const emailService = {
  send: (msg) => { 
    // Imagine uma conexão demorada e pesada com um servidor SMTP aqui
    console.log(`Enviando e-mail real: ${msg}`);
  }
};

// Função principal que queremos testar
function checkout(cart, email) {
  // Regra: se o carrinho estiver vazio, não finaliza a compra
  if (cart.length === 0) return false;
  
  // Chama o serviço de e-mail (dependência externa)
  emailService.send(`Pedido confirmado para ${email}`);
  
  // Retorna sucesso
  return true;
}

// Exporta as funções para serem usadas no teste
module.exports = { checkout, emailService };