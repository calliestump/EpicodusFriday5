import $ from "jquery";
import "./css/styles.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Calculator from "./method.js";
$(document).ready(function() {
  $("form#").submit(function(event) {
    event.preventDefault();
    const input = $(".age").val();
    const userAge = new Calculator(input);
    const final = userAge.checkINT();
    $("ageResult").append(final);
  });
});