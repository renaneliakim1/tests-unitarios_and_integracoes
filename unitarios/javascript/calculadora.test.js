// sempre fazer menção ao arquivo quando for testes  (o jeito depende da linguagem)

// Importando a classe Calculadora do arquivo calculadora.js
const { Calculadora } = require('./calculadora');

// Criando uma instância da classe Calculadora
const calc = new Calculadora();

// Teste para soma de dois inteiros
it('soma dois inteiros', () => {   // medoto "it" é uma das instrução usadas para testes ('descrição , e funcção anônima =  arrow function')
  expect(calc.adicao(2, 3)).toBe(5);
});

// Teste para soma com zero
it('soma com zero', () => {
  expect(calc.adicao(0, 7)).toBe(7);
});

// Teste para soma de números negativos
it('soma números negativos', () => {
  expect(calc.adicao(-2, -3)).toBe(-5);
});


// exemplo de teste com FALHA 
it('divide dois inteiros', () => {   
      expect(calc.divisao(20, 2)).toBe(44);
});

//-------------------------------------------------------------------


//-- SUBTRAÇÃO
it('subtrai dois números positivos', () => {
  expect(calc.subtracao(10, 5)).toBe(5);
});

it('subtrai com resultado negativo', () => {
  expect(calc.subtracao(5, 10)).toBe(-5);
});


it('subtraium numero positivo e um negativo', () => {
  expect(calc.subtracao(-89, 75)).toBe(-164);
});


// -- MULTIPLICAÇÃO
it('multiplica dois números positivos', () => {
  expect(calc.multiplicacao(4, 3)).toBe(12);
});

it('multiplica número negativo', () => {
  expect(calc.multiplicacao(-2, 3)).toBe(-6);
});


it('multiplica número positivo com zero', () => {
  expect(calc.multiplicacao(0, 3)).toBe(0);
});

// -- DIVISÃO
it('divide dois números', () => {
  expect(calc.divisao(20, 4)).toBe(5);
});


it('divide dois números positivo e negativo', () => {
  expect(calc.divisao(49, -7)).toBe(-7);
});

it('lança erro ao dividir por zero', () => {
  expect(() => calc.divisao(10, 0)).toThrow();
});



