// Criando a classe Calculadora
class Calculadora {

  // método para adição de dois números
  adicao(a, b) {
    return a + b;
  }


   // método para subtração
  subtracao(a, b) {
    return a - b;
  }

  // método para multiplicação
  multiplicacao(a, b) {
    return a * b;
  }

  // método para divisão
  divisao(a, b) {
    if (b === 0) {
      throw new Error('Erro:Divisão por zero não permitida');
    }
    return a / b;
  }
}




// Exportando a classe para ser usada nos testes
module.exports = { Calculadora };

