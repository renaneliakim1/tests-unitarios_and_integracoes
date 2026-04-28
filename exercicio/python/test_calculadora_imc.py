import unittest
from calculadora_imc import CalculadoraIMC


class TestCalculadoraIMC(unittest.TestCase):

    def setUp(self):
        """Instancia a calculadora antes de cada teste."""
        self.imc = CalculadoraIMC()

    # =============================================================
    # CAMINHO FELIZ — cálculo correto do IMC
    # =============================================================

    def test_calcula_imc_peso_normal(self):
        # 70 / (1.75 ** 2) = 22.857...
        resultado = self.imc.calcular(70, 1.75)
        self.assertAlmostEqual(resultado, 22.857, places=2)

    def test_calcula_imc_abaixo_do_peso(self):
        # 50 / (1.80 ** 2) = 15.432...
        resultado = self.imc.calcular(50, 1.80)
        self.assertAlmostEqual(resultado, 15.432, places=2)

    def test_calcula_imc_sobrepeso(self):
        # 85 / (1.75 ** 2) = 27.755...
        resultado = self.imc.calcular(85, 1.75)
        self.assertAlmostEqual(resultado, 27.755, places=2)

    def test_calcula_imc_obesidade(self):
        # 100 / (1.70 ** 2) = 34.602...
        resultado = self.imc.calcular(100, 1.70)
        self.assertAlmostEqual(resultado, 34.602, places=2)

    # =============================================================
    # CLASSIFICAR — caminho feliz (uma entrada por categoria)
    # =============================================================

    def test_classifica_abaixo_do_peso(self):
        self.assertEqual(self.imc.classificar(15.0), "Abaixo do peso")

    def test_classifica_peso_normal(self):
        self.assertEqual(self.imc.classificar(22.0), "Peso normal")

    def test_classifica_sobrepeso(self):
        self.assertEqual(self.imc.classificar(27.0), "Sobrepeso")

    def test_classifica_obesidade(self):
        self.assertEqual(self.imc.classificar(35.0), "Obesidade")

    # =============================================================
    # TESTES DE LIMITE (BOUNDARY TESTING)
    # =============================================================

    def test_limite_abaixo_do_peso_proximo_ao_limite(self):
        self.assertEqual(self.imc.classificar(18.4), "Abaixo do peso")

    def test_limite_peso_normal_inicio(self):
        self.assertEqual(self.imc.classificar(18.5), "Peso normal")

    def test_limite_peso_normal_proximo_ao_proximo_limite(self):
        self.assertEqual(self.imc.classificar(24.9), "Peso normal")

    def test_limite_sobrepeso_inicio(self):
        self.assertEqual(self.imc.classificar(25.0), "Sobrepeso")

    def test_limite_sobrepeso_proximo_ao_proximo_limite(self):
        self.assertEqual(self.imc.classificar(29.9), "Sobrepeso")

    def test_limite_obesidade_inicio(self):
        self.assertEqual(self.imc.classificar(30.0), "Obesidade")

    # =============================================================
    # TRATAMENTO DE ERROS — peso inválido
    # =============================================================

    def test_erro_peso_zero(self):
        with self.assertRaises(ValueError) as ctx:
            self.imc.calcular(0, 1.75)
        self.assertIn("peso deve ser maior que zero", str(ctx.exception))

    def test_erro_peso_negativo(self):
        with self.assertRaises(ValueError) as ctx:
            self.imc.calcular(-10, 1.75)
        self.assertIn("peso deve ser maior que zero", str(ctx.exception))

    def test_erro_peso_string(self):
        with self.assertRaises(TypeError) as ctx:
            self.imc.calcular("70", 1.75)
        self.assertIn("peso deve ser um valor numérico válido", str(ctx.exception))

    def test_erro_peso_none(self):
        with self.assertRaises(TypeError) as ctx:
            self.imc.calcular(None, 1.75)
        self.assertIn("peso deve ser um valor numérico válido", str(ctx.exception))

    def test_erro_peso_booleano(self):
        # bool é subclasse de int em Python, deve ser rejeitado explicitamente
        with self.assertRaises(TypeError) as ctx:
            self.imc.calcular(True, 1.75)
        self.assertIn("peso deve ser um valor numérico válido", str(ctx.exception))

    def test_erro_peso_lista(self):
        with self.assertRaises(TypeError) as ctx:
            self.imc.calcular([70], 1.75)
        self.assertIn("peso deve ser um valor numérico válido", str(ctx.exception))

    # =============================================================
    # TRATAMENTO DE ERROS — altura inválida
    # =============================================================

    def test_erro_altura_zero(self):
        with self.assertRaises(ValueError) as ctx:
            self.imc.calcular(70, 0)
        self.assertIn("altura deve ser maior que zero", str(ctx.exception))

    def test_erro_altura_negativa(self):
        with self.assertRaises(ValueError) as ctx:
            self.imc.calcular(70, -1.75)
        self.assertIn("altura deve ser maior que zero", str(ctx.exception))

    def test_erro_altura_string(self):
        with self.assertRaises(TypeError) as ctx:
            self.imc.calcular(70, "1.75")
        self.assertIn("altura deve ser um valor numérico válido", str(ctx.exception))

    def test_erro_altura_none(self):
        with self.assertRaises(TypeError) as ctx:
            self.imc.calcular(70, None)
        self.assertIn("altura deve ser um valor numérico válido", str(ctx.exception))

    def test_erro_altura_booleano(self):
        with self.assertRaises(TypeError) as ctx:
            self.imc.calcular(70, False)
        self.assertIn("altura deve ser um valor numérico válido", str(ctx.exception))

    def test_erro_altura_lista(self):
        with self.assertRaises(TypeError) as ctx:
            self.imc.calcular(70, [1.75])
        self.assertIn("altura deve ser um valor numérico válido", str(ctx.exception))


if __name__ == "__main__":
    unittest.main(verbosity=2)
