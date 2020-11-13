export class Calculator {
  constructor(age) {
    this.age = age;
  }

  earthAge() {
    return this.age;
  }

  mercuryAge() {
    return this.age / 200.24;
  }


};