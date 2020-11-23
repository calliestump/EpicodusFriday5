import { TestScheduler } from "jest";
import Calculator from "../src/method.js"
// Tests Age Conversions
// Currently having trouble calculating age now that 'avgLifeSpan' variable is no longer global.
describe("Calculator", () => {
  let testDay = new Calculator(2001,10,1);
  let testAgeSurpassed = new Calculator(1940,3,3);
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
    const expectency = new Calculator (2001, 10, 1, 80)
    expect(expectency.avgLifeSpan).toEqual(61); // Came out as undefined. Could not make an integer.
  })
  
  test("should check mercuryYearsLeft functionality", () => {
    expect(testDay.mercuryYearsLeft()).toEqual(1); // Came out as NAN. Could not gather any data.
  })

  test("should check venusYearsLeft functionality", () => {
    expect(testDay.venusYearsLeft()).toEqual(49); 
  })

  test("should check marsYearsLeft functionality", () => {
    expect(testDay.marsYearsLeft()).toEqual(70);
  })

  test("should check jupiterYearsLeft functionality", () => {
    expect(testDay.jupiterYearsLeft()).toEqual(78);
  })

  test("should check earthAgeSurpassed functionality", () => {
    expect(testAgeSurpassed.earthAgeSurpassed()).toEqual(81);
  })

  test("should check mercuryAgeSurpassed functionality", () => {
    expect(testAgeSurpassed.mercuryAgeSurpassed()).toEqual(336)
  })
});