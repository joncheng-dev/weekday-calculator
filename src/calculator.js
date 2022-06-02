export default function Date(year, month, day) {
  this.enteredYear = year;
  this.enteredMonth = month;
  this.enteredDay = day;
}

Date.prototype.calculateDay = function () {
  return "I can't answer that yet.";
};

Date.prototype.zellerDateMonth = function () {
  const month = this.enteredMonth;
  const day = this.enteredDay;
  return "The month is " + month + " and the day is " + day + ".";
};
