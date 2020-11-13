import { TestScheduler } from "jest";
import Calculator from "../src/method.js"

describe("Calculator", () => {

  test("should return inputted age as integer", () => {
    const userAge = new Calculator(3);
    expect(userAge.userAge).toEqual(2);
  });
});