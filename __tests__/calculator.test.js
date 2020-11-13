import { TestScheduler } from 'jest';
import { Calculator } from './../src/js/Calculator.js';

describe('Calculator', () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator(19);
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
  })

  test('should return the remaining years the user has until 79 (life expectancy)', () => {
    expect(calc.remainingYears()).toEqual(60);
  });

});