import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Calculator } from './js/Calculator';

function printToPage(calc) {
  $("#resultName").html(calc.name);
  let age = calc.earthAge();
  $("#results").append(`<li>Your Earth age is ${age} years.</li>`);
  age = calc.mercuryAge();
  $("#results").append(`<li>Your Mercury age is ${age} years.</li>`);
  age = calc.venusAge();
  $("#results").append(`<li>Your Venus age is ${age} years.</li>`);
  age = calc.marsAge();
  $("#results").append(`<li>Your Mars age is ${age} years.</li>`);
  age = calc.jupiterAge();
  $("#results").append(`<li>Your Jupiter age is ${age} years.</li>`);
  age = calc.remainingYears();
  
  if (age > 0) {
    $("#results").append(`<li>The average life expectancy in the US is 79 years old. Which means you have about ${age} many years left to live (statistically...).</li>`);
    age = calc.remainingMercury();
    $("#results").append(`<li>You have ${age} Mercury years left to live!</li>`);
    age = calc.remainingVenus();
    $("#results").append(`<li>You have ${age} Venus years left to live!</li>`);
    age = calc.remainingMars();
    $("#results").append(`<li>You have ${age} Mars years left to live!</li>`);
    age = calc.remainingJupiter();
    $("#results").append(`<li>You have ${age} Jupiter years left to live!</li>`);
  } else {
    age = calc.pastExpect();
    $("#results").append(`<li>You have lived past your life expectancy! You have lived ${age} years past it! Keep up the good work!`)
  }
}

$("#ageForm").submit(function(event) {
  event.preventDefault();
  $("#outcome").show();
  let age = $("#age").val();
  let name = $("#name").val();
  let calc = new Calculator(age, name);
  printToPage(calc);
});