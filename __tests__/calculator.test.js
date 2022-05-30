import Date from "./../src/calculator.js";

describe("Date", () => {
  test("should correctly return the date user entered", () => {
    const dateTest = new Date("May 30th, 2022");
    expect(dateTest.enteredDate).toEqual("May 30th, 2022");
  });
});
