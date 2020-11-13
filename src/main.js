import $ from "jquery";
import "./css/styles.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Calculator from "./method.js";

$(document).ready(function() {
  $("form#calculator").submit(function(event) {
    event.preventDefault();
    const year = $(".year").val();
    const month = $(".month").val();
    const day = $(".day").val();
    const userBirthday = new Date (year, month ,day);
    const person = new Calculator(+ year, +  month, + day);
    $(".birthdayResult").append(userBirthday);
    console.log(person);
    const currentAge = ((Date.now() / 31353600000) - (userBirthday / 31353600000));
    $(".ageResult").append(Math.round(currentAge));
    Calculator.prototype.earthAge(currentAge);
    console.log(Calculator.prototype.earthAge());
  });
});