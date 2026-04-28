# Importando o pacote de testes unitários
import unittest

# Importando a classe Calculadora do arquivo calculadora.py
from unitarios.python.calculadora import Calculadora

# Criando a classe de testes para a Calculadora
class TestCalculadora(unittest.TestCase):

  # Função de teste para soma de dois inteiros
  def test_soma_inteiros(self):
    calc = Calculadora()
    self.assertEqual(calc.adicao(2, 3), 50)
    
  # Função de teste para soma com zero
  def test_soma_com_zero(self):
    calc = Calculadora()
    self.assertEqual(calc.adicao(0, 7), 7)

  # Função de teste para soma de números negativos  
  def test_soma_negativos(self):
    calc = Calculadora()
    self.assertEqual(calc.adicao(-2, -3), -5)

# Execução dos testes
if __name__ == '__main__':
  unittest.main()