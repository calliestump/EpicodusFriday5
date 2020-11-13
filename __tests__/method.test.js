import { TestScheduler } from "jest";
import Calculator from "../src/method.js"

describe("Calculator", () => {
  let testDay = new Calculator(2001,10,1);
  test("should check earthAge() functionality", () => {
    expect(testDay.earthAge()).toEqual(19);
  });

  test("should check mercuryAge functionality", () => {
    expect(testDay.mercuryAge()).toEqual(79);
  })

  test("should check venusAge functionality", () => {
    expect(testDay.venusAge()).toEqual(31);
  })

  test("should check marsAge functionality", () => {
    expect(testDay.marsAge()).toEqual(10);
  })
});