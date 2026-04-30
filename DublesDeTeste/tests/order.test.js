//Testes do orderService


// Importando o módulo a ser testado e suas dependências
const { checkout, emailService } = require('../src/orderService');

test('Deve chamar o envio de e-mail ao finalizar compra com sucesso', () => {
  // Criando um Spy/Stub na função 'send' do 'emailService'
  // Ele vai interceptar a chamada e retornar "true" de forma silenciosa
  const spy = jest.spyOn(emailService, 'send').mockImplementation(() => true);

  // Executando a função que estamos testando
  // Obs: passamos um e-mail genérico para o teste
  const result = checkout(['item1', 'item2'], 'user@exemplo.com');

  // Verifica se o comportamento interno da função ocorreu como o esperado
  expect(result).toBe(true);
  
  // Verifica se o Spy foi chamado contendo o e-mail correto (foco no COMPORTAMENTO - Mock/Spy)
  expect(spy).toHaveBeenCalledWith(expect.stringContaining('user@exemplo.com'));
  
  // Boas práticas: Limpa o mock após o uso para não afetar outros testes
  spy.mockRestore(); 
});