import { Calculator } from './../src/js/Calculator.js';

describe('Calculator', () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator(19, "Ben");
  });

  test('should return the given age', () => {
    expect(calc.earthAge()).toEqual(19);
  });

  test('should return the users age on mercury', () => {
    expect(calc.mercuryAge()).toEqual(79.17);
  });

  test('should return the users age on venus', () => {
    expect(calc.venusAge()).toEqual(30.65);
  });

  test('should return the users age on mars', () => {
    expect(calc.marsAge()).toEqual(10.11);
  });

  test('should return the users age on jupiter', () => {
    expect(calc.jupiterAge()).toEqual(1.60);
  });

  test('should return the remaining years the user has until 79 (life expectancy)', () => {
    expect(calc.remainingYears()).toEqual(60);
  });

  test('should return the users remaining mercury years', () => {
    expect(calc.remainingMercury()).toEqual(250);
  });

  test('should return the users remaining venus years', () => {
    expect(calc.remainingVenus()).toEqual(96.77);
  });

  test('should return the users remaining mars years', () => {
    expect(calc.remainingMars()).toEqual(31.91);
  });

  test('should return the users remaining jupiter years', () => {
    expect(calc.remainingJupiter()).toEqual(5.06);
  });

  test('should return the number of years the user is past the life expectancy', () => {
    let calc = new Calculator(83, "Bob");
    expect(calc.pastExpect()).toEqual(4);
  });

});