import { TestScheduler } from "jest";
import Calculator from "../src/method.js"
// Tests Age Conversions
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

  test("should check jupiterAge functionality", () => {
    expect(testDay.jupiterAge()).toEqual(2);
  })

  // Test life expectency
  test("should check earthYearsLeft functionality", () => {
    expect(testDay.earthYearsLeft()).toEqual(61);
  })
  
  test("should check mercuryYearsLeft functionality", () => {
    expect(testDay.mercuryYearsLeft()).toEqual(1);
  })

  test("should check venusYearsLeft functionality", () => {
    expect(testDay.venusYearsLeft()).toEqual(49); 
  })

  test("should check marsYearsLeft functionality", () => {
    expect(testDay.marsYearsLeft()).toEqual(70);
  })
});