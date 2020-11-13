/*const mercuryVal = 0.24;
const venusVal = 0.62;
const marsVal = 1.88;
const jupiterVal = 11.86;

export default function Calculator(dob, lifeExp) {
  let currentYear = new Date().getYear();
  this.birthYear = new Date(dob).getYear();
  this.age = currentYear - this.birthYear;
  this.lifeExp = lifeExp;
}

Calculator.prototype.mercury = function () {
  alert(age);
};*/
export default function Calculator(userAge) {
  this.userAge = userAge;
}

Calculator.prototype.checkINT = function() {
  return "this is an integer";
};