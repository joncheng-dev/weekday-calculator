export default function Date(year, month, day) {
  this.enteredYear = year;
  this.enteredMonth = month;
  this.enteredDay = day;
}

Date.prototype.calculateDay = function () {
  let k = this.enteredYear % 100;
  let j = Math.floor(this.enteredYear / 100);
  let h =
    (this.enteredDay +
      Math.floor((13 * (this.enteredMonth + 1)) / 5) +
      k +
      Math.floor(k / 4) +
      Math.floor(j / 4) -
      2 * j) %
    7;
  return h;
};
