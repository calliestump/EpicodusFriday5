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
export default function Calculator(year, month, day) {
  this.year = year;
  this.month = month;
  this.day = day;
  this.birthday = new Date(this.year, this.month, this.day);
  this.today = new Date();
}

Calculator.prototype.earthAge = function() {
  let birthYear = this.birthday.getFullYear();
  let presentYear = this.today.getFullYear();
  let earthAge = presentYear - birthYear;
  return earthAge;
};