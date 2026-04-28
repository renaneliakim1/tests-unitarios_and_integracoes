// Importando a classe CalculadoraIMC
const { CalculadoraIMC } = require('./calculadora_imc');

// Criando uma instância da classe
const imc = new CalculadoraIMC();

// =============================================================
// CAMINHO FELIZ — uma categoria por faixa de classificação
// =============================================================

describe('calcular — caminho feliz', () => {

  it('calcula corretamente o IMC de uma pessoa com peso normal', () => {
    // 70 kg / (1.75 * 1.75) = 22.86
    const resultado = imc.calcular(70, 1.75);
    expect(resultado).toBeCloseTo(22.86, 2);
  });

  it('calcula corretamente o IMC de uma pessoa abaixo do peso', () => {
    // 50 kg / (1.80 * 1.80) = 15.43
    const resultado = imc.calcular(50, 1.80);
    expect(resultado).toBeCloseTo(15.43, 2);
  });

  it('calcula corretamente o IMC de uma pessoa com sobrepeso', () => {
    // 85 kg / (1.75 * 1.75) = 27.76
    const resultado = imc.calcular(85, 1.75);
    expect(resultado).toBeCloseTo(27.76, 2);
  });

  it('calcula corretamente o IMC de uma pessoa com obesidade', () => {
    // 100 kg / (1.70 * 1.70) = 34.60
    const resultado = imc.calcular(100, 1.70);
    expect(resultado).toBeCloseTo(34.60, 2);
  });

});

// =============================================================
// CLASSIFICAR — caminho feliz (uma entrada por categoria)
// =============================================================

describe('classificar — caminho feliz', () => {

  it('classifica como "Abaixo do peso" para IMC 15.0', () => {
    expect(imc.classificar(15.0)).toBe('Abaixo do peso');
  });

  it('classifica como "Peso normal" para IMC 22.0', () => {
    expect(imc.classificar(22.0)).toBe('Peso normal');
  });

  it('classifica como "Sobrepeso" para IMC 27.0', () => {
    expect(imc.classificar(27.0)).toBe('Sobrepeso');
  });

  it('classifica como "Obesidade" para IMC 35.0', () => {
    expect(imc.classificar(35.0)).toBe('Obesidade');
  });

});

// =============================================================
// TESTES DE LIMITE (BOUNDARY TESTING)
// =============================================================

describe('classificar — valores de limite (boundary)', () => {

  it('classifica como "Abaixo do peso" para IMC 18.4 (logo abaixo do limite)', () => {
    expect(imc.classificar(18.4)).toBe('Abaixo do peso');
  });

  it('classifica como "Peso normal" para IMC exatamente 18.5 (limite inferior)', () => {
    expect(imc.classificar(18.5)).toBe('Peso normal');
  });

  it('classifica como "Peso normal" para IMC 24.9 (logo abaixo do próximo limite)', () => {
    expect(imc.classificar(24.9)).toBe('Peso normal');
  });

  it('classifica como "Sobrepeso" para IMC exatamente 25.0 (limite inferior)', () => {
    expect(imc.classificar(25.0)).toBe('Sobrepeso');
  });

  it('classifica como "Sobrepeso" para IMC 29.9 (logo abaixo do próximo limite)', () => {
    expect(imc.classificar(29.9)).toBe('Sobrepeso');
  });

  it('classifica como "Obesidade" para IMC exatamente 30.0 (limite inferior)', () => {
    expect(imc.classificar(30.0)).toBe('Obesidade');
  });

});

// =============================================================
// TRATAMENTO DE ERROS — peso inválido
// =============================================================

describe('calcular — erros de peso', () => {

  it('lança erro ao receber peso igual a zero', () => {
    expect(() => imc.calcular(0, 1.75)).toThrow('Erro: peso deve ser maior que zero');
  });

  it('lança erro ao receber peso negativo', () => {
    expect(() => imc.calcular(-10, 1.75)).toThrow('Erro: peso deve ser maior que zero');
  });

  it('lança erro ao receber peso como string', () => {
    expect(() => imc.calcular('70', 1.75)).toThrow('Erro: peso deve ser um valor numérico válido');
  });

  it('lança erro ao receber peso como null', () => {
    expect(() => imc.calcular(null, 1.75)).toThrow('Erro: peso deve ser um valor numérico válido');
  });

  it('lança erro ao receber peso como undefined', () => {
    expect(() => imc.calcular(undefined, 1.75)).toThrow('Erro: peso deve ser um valor numérico válido');
  });

  it('lança erro ao receber peso como NaN', () => {
    expect(() => imc.calcular(NaN, 1.75)).toThrow('Erro: peso deve ser um valor numérico válido');
  });

});

// =============================================================
// TRATAMENTO DE ERROS — altura inválida
// =============================================================

describe('calcular — erros de altura', () => {

  it('lança erro ao receber altura igual a zero', () => {
    expect(() => imc.calcular(70, 0)).toThrow('Erro: altura deve ser maior que zero');
  });

  it('lança erro ao receber altura negativa', () => {
    expect(() => imc.calcular(70, -1.75)).toThrow('Erro: altura deve ser maior que zero');
  });

  it('lança erro ao receber altura como string', () => {
    expect(() => imc.calcular(70, '1.75')).toThrow('Erro: altura deve ser um valor numérico válido');
  });

  it('lança erro ao receber altura como null', () => {
    expect(() => imc.calcular(70, null)).toThrow('Erro: altura deve ser um valor numérico válido');
  });

  it('lança erro ao receber altura como undefined', () => {
    expect(() => imc.calcular(70, undefined)).toThrow('Erro: altura deve ser um valor numérico válido');
  });

  it('lança erro ao receber altura como NaN', () => {
    expect(() => imc.calcular(70, NaN)).toThrow('Erro: altura deve ser um valor numérico válido');
  });

});
