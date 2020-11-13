import { TestScheduler } from "jest";
import Calculator from "../src/method.js"

describe("Calculator", () => {
  let testDay = new Calculator(2001,10,1);
  test("should check earthAge() functionality", () => {
    expect(testDay.earthAge()).toEqual(18);
  });
});