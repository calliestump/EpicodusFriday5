const avgLifeSpan = 80;
export default function Calculator(year, month, day) {
  this.year = year;
  this.month = month;
  this.day = day;
  this.birthday = new Date(this.year, this.month, this.day);
  this.today = new Date();
  this.earthDays = (Date.now() - this.birthday.getTime())
                        /(24*60*60*1000);
}
// Earth
Calculator.prototype.earthAge = function() {
  let birthYear = this.birthday.getFullYear();
  let presentYear = this.today.getFullYear();
  let earthAge = presentYear - birthYear;
  return earthAge;
};
Calculator.prototype.earthYearsLeft = function () {
  let earthYearsLeft = (this.earthDays/365).toFixed();
  return Math.abs(avgLifeSpan - earthYearsLeft);
};
Calculator.prototype.ageSurpassed = function () {
  let ageSurpassed = (this.earthDays/365).toFixed();
  const ageSur = Math.round(ageSurpassed);
  if (ageSur > avgLifeSpan) {
    console.log("Age has surpassed")
  }
  return ageSur;
}
// Mercury
Calculator.prototype.mercuryAge = function () {
  let mercuryAge = (this.earthDays/365/0.24);
  const finalMerc = Math.round(mercuryAge);
  return finalMerc;
};
Calculator.prototype.mercuryYearsLeft = function () {
  let mercuryYearsLeft = (this.earthDays/365/0.24).toFixed();
  return Math.abs(avgLifeSpan - mercuryYearsLeft);
};

// Venus
Calculator.prototype.venusAge = function () {
  let venusAge = (this.earthDays/365/0.62);
  const finalVenus = Math.round(venusAge);
  return finalVenus;
};
Calculator.prototype.venusYearsLeft = function () {
  let venusYearsLeft = (this.earthDays/365/0.62).toFixed();
  return Math.abs(avgLifeSpan - venusYearsLeft);
};

// Mars
Calculator.prototype.marsAge = function() {
  let marsAge = (this.earthDays/365/1.88);
  const finalMars = Math.round(marsAge);
  return finalMars;
};
Calculator.prototype.marsYearsLeft = function () {
  let marsYearsLeft = (this.earthDays/365/1.88).toFixed();
  return Math.abs(avgLifeSpan - marsYearsLeft);
};

// Jupiter
Calculator.prototype.jupiterAge = function() {
  let jupiterAge = (this.earthDays/365/11.86);
  const finalJupiter = Math.round(jupiterAge);
  return finalJupiter;
};
Calculator.prototype.jupiterYearsLeft = function () {
  let jupiterYearsLeft = (this.earthDays/365/11.86).toFixed();
  return Math.abs(avgLifeSpan - jupiterYearsLeft);
};