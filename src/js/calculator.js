import { parse } from "@babel/core";

export class Calculator {
  constructor(age) {
    this.age = age;
  }

  earthAge() {
    return this.age;
  }

  mercuryAge() {
    let num = this.age / 0.24;
    return parseFloat(num.toFixed(2));
  }

  venusAge() {
    let num = this.age / 10.62;
    return parseFloat(num.toFixed(2));
  }


};