// Classe responsável pelo cálculo e classificação do IMC
class CalculadoraIMC {

  // Calcula o IMC a partir do peso (kg) e altura (m)
  calcular(peso, altura) {
    // Validação: peso deve ser numérico
    if (typeof peso !== 'number' || isNaN(peso)) {
      throw new Error('Erro: peso deve ser um valor numérico válido');
    }

    // Validação: altura deve ser numérica
    if (typeof altura !== 'number' || isNaN(altura)) {
      throw new Error('Erro: altura deve ser um valor numérico válido');
    }

    // Validação: peso deve ser positivo
    if (peso <= 0) {
      throw new Error('Erro: peso deve ser maior que zero');
    }

    // Validação: altura deve ser positiva
    if (altura <= 0) {
      throw new Error('Erro: altura deve ser maior que zero');
    }

    return peso / (altura * altura);
  }

  // Classifica o IMC conforme tabela da OMS
  classificar(imc) {
    if (imc < 18.5) {
      return 'Abaixo do peso';
    } else if (imc < 25.0) {
      return 'Peso normal';
    } else if (imc < 30.0) {
      return 'Sobrepeso';
    } else {
      return 'Obesidade';
    }
  }
}

// Exportando a classe para ser usada nos testes
module.exports = { CalculadoraIMC };
