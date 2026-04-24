# calculator/calculadora.py
class Calculadora:
  def adicao(self, a, b):
    return a + b


  def subtracao(self, a, b):
    return a - b

  def multiplicacao(self, a, b):
    return a * b


  def divisao(self, a, b):
    if b == 0:
        raise ValueError("Erro: Divisão por zero não é permitida")
    return a / b




