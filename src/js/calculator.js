export class Calculator {
  constructor(age, name) {
    this.age = age;
    this.name = name
    this.yearsLeft = 79 - this.age;
  }

  earthAge() {
    return parseFloat(this.age);
  }

  mercuryAge() {
    let num = this.age / 0.24;
    return parseFloat(num.toFixed(2));
  }

  venusAge() {
    let num = this.age / 0.62;
    return parseFloat(num.toFixed(2));
  }

  marsAge() {
    let num = this.age / 1.88;
    return parseFloat(num.toFixed(2));
  }

  jupiterAge() {
    let num = this.age / 11.86;
    return parseFloat(num.toFixed(2));
  }

  remainingYears() {
    return this.yearsLeft;
  }

  remainingMercury() {
    let num = this.yearsLeft / 0.24;
    return parseFloat(num.toFixed(2));
  }

  remainingVenus() {
    let num = this.yearsLeft / 0.62;
    return parseFloat(num.toFixed(2));
  }

  remainingMars() {
    let num = this.yearsLeft / 1.88;
    return parseFloat(num.toFixed(2));
  }

  remainingJupiter() {
    let num = this.yearsLeft / 11.86;
    return parseFloat(num.toFixed(2));
  }

}