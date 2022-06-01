import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import Date from "./calculator.js";

$(document).ready(function () {
  // To do
  $("#userInput").submit(function (event) {
    event.preventDefault();
    const inputYear = $("#year").val();
    const inputMonth = $("#month").val();
    const inputDay = $("#day").val();
    const dateIntoAlgorithm = new Date(inputYear, inputMonth, inputDay);
    const dayOfWeek = dateIntoAlgorithm.calculateDay();
    $("#appResponse").append("<p>" + dayOfWeek + "</p>");
  });
});
