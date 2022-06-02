import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import Date from "./calculator.js";

// User Interface Logic
function displayDayOfWeek(number) {
  // Displays to html a different day of week based on result.
  if (number === 0) {
    return "Saturday";
  } else if (number === 1) {
    return "Sunday";
  } else if (number === 2) {
    return "Monday";
  } else if (number === 3) {
    return "Tuesday";
  } else if (number === 4) {
    return "Wednesday";
  } else if (number === 5) {
    return "Thursday";
  } else if (number === 6) {
    return "Friday";
  } else {
    return "Error 101";
  }
}

$(document).ready(function () {
  // To do
  $("#userInput").submit(function (event) {
    event.preventDefault();
    const inputYear = parseInt($("#year").val());
    const inputMonth = parseInt($("#month").val());
    const inputDay = parseInt($("#day").val());
    const dateIntoAlgorithm = new Date(inputYear, inputMonth, inputDay);
    const codeForDayOfWeek = dateIntoAlgorithm.calculateDay();
    const dayOfWeek = displayDayOfWeek(codeForDayOfWeek);
    $("#appResponse").append("<p>" + dayOfWeek + "</p>");
  });
});
