export class Calculator {
  constructor(age) {
    this.age = age;
  }

  earthAge() {
    return this.age;
  }

  mercuryAge() {
    return parseFloat((this.age / 0.24).toFixed(2));
  }


};