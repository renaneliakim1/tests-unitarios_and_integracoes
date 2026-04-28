# calculadora_imc.py


class CalculadoraIMC:

    def calcular(self, peso, altura):
        """Calcula o IMC a partir do peso (kg) e altura (m)."""

        # Validação: bool é subclasse de int em Python, deve ser rejeitado
        if isinstance(peso, bool) or not isinstance(peso, (int, float)):
            raise TypeError("Erro: peso deve ser um valor numérico válido")

        if isinstance(altura, bool) or not isinstance(altura, (int, float)):
            raise TypeError("Erro: altura deve ser um valor numérico válido")

        # Validação: valores positivos
        if peso <= 0:
            raise ValueError("Erro: peso deve ser maior que zero")

        if altura <= 0:
            raise ValueError("Erro: altura deve ser maior que zero")

        return peso / (altura * altura)

    def classificar(self, imc):
        """Classifica o IMC conforme tabela da OMS."""

        if imc < 18.5:
            return "Abaixo do peso"
        elif imc < 25.0:
            return "Peso normal"
        elif imc < 30.0:
            return "Sobrepeso"
        else:
            return "Obesidade"
