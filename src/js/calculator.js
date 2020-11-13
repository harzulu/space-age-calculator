import { parse } from "@babel/core";

export class Calculator {
  constructor(age) {
    this.age = age;
    this.yearsLeft;
  }

  earthAge() {
    return this.age;
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
    this.yearsLeft = 79 - this.age;
    return this.yearsLeft;
  }

  reaminingMercury() {
    let num = this.yearsLeft / 0.24;
    return parseFloat(num.toFixed(2));
  }


};