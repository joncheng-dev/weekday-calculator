import Date from "./../src/calculator.js";

describe("Date", () => {
  test("should correctly return the year, month, and day passed in", () => {
    const dateTest = new Date(2022, 5, 31);
    expect(dateTest.enteredYear).toEqual(2022);
    expect(dateTest.enteredMonth).toEqual(5);
    expect(dateTest.enteredDay).toEqual(31);
  });
  test("method calculateDay should correctly return '4'", () => {
    const dateTest = new Date(1998, 4, 8);
    expect(dateTest.calculateDay()).toEqual(4);
  });
  test("method calculateDay should correctly return '5'", () => {
    const dateTest = new Date(1763, 11, 24);
    expect(dateTest.calculateDay()).toEqual(5);
  });
  test("method calculateDay should correctly return '3'", () => {
    const dateTest = new Date(2022, 5, 31);
    expect(dateTest.calculateDay()).toEqual(3);
  });
  test("method calculateDay should correctly return '3'", () => {
    const dateTest = new Date(2022, 6, 2);
    expect(dateTest.calculateDay()).toEqual(5);
  });
});
