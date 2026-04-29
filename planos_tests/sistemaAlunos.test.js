const SistemaAlunos = require('./sistemaAlunos');

describe("Bateria de Testes - Sistema de Alunos", () => {
    let sistema;

    beforeEach(() => {
        sistema = new SistemaAlunos();
    });

    test("CT-01 - Deve calcular a média corretamente de quatro notas válidas", () => {
        expect(sistema.calcularMedia(7, 8, 9, 6)).toBe(7.5);
    });

    test("CT-02 - Deve retornar 'Aprovado' para media exata igual 7.0", () => {
        expect(sistema.verificarStatus(7.0)).toBe("Aprovado");
    });

    test("CT-03 - Deve retornar 'Recuperação' para média >= 5 e < 7", () => {
        expect(sistema.verificarStatus(6.5)).toBe("Recuperação");
    });

    test("CT-04 - Deve retornar 'Reprovado' para média < 5", () => {
        expect(sistema.verificarStatus(4.9)).toBe("Reprovado");
    });
});