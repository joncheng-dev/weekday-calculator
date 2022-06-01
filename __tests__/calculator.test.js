import Date from "./../src/calculator.js";

describe("Date", () => {
  test("should correctly return the year, month, and day passed in", () => {
    const dateTest = new Date(2022, 5, 31);
    expect(dateTest.enteredYear).toEqual(2022);
    expect(dateTest.enteredMonth).toEqual(5);
    expect(dateTest.enteredDay).toEqual(31);
  });
  test("method calculateDay should correctly return a day of week", () => {
    const dateTest = new Date(2022, 5, 31);
    expect(dateTest.calculateDay()).toEqual("I can't answer that yet.");
  });
});
