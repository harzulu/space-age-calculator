import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Calculator } from './js/Calculator';

function printToPage(calc) {
  let age = calc.earthAge();
  $("#results").append(`<li>Your Earth age is ${age}.</li>`);
}

$("#ageForm").submit(function(event) {
  event.preventDefault();
  let age = $("#age").val();
  let calc = new Calculator(age);
  printToPage(calc);
});