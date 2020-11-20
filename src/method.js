export default class Calculator {
  Calculator (year, month, day, avgLifeSpan) {
    this.avgLifeSpan = avgLifeSpan;
    //this.avgLifeSpan = 80;
    this.year = year;
    this.month = month;
    this.day = day;
    this.birthday = new Date(this.year, this.month, this.day);
    this.today = new Date();
    this.earthDays = (Date.now() - this.birthday.getTime()) /(24*60*60*1000);
  }
  // Earth
  earthAge() {
    let birthYear = this.birthday.getFullYear();
    let presentYear = this.today.getFullYear();
    let earthAge = presentYear - birthYear;
    return earthAge;
  }
  earthYearsLeft() {
    //let avgLifeSpan = 80;
    let earthYearsLeft = (this.earthDays/365).toFixed();
    return Math.abs(this.avgLifeSpan - earthYearsLeft);
  }
  earthAgeSurpassed () {
    let earthAgeSurpassed = (this.earthDays/365).toFixed();
    const earthAgeSur = Math.round(earthAgeSurpassed);
    if (earthAgeSur > this.avgLifeSpan) {
      console.log("Age has surpassed");
    }
    return earthAgeSur;
  }
  // Mercury
  mercuryAge () {
    let mercuryAge = (this.earthDays/365/0.24);
    const finalMerc = Math.round(mercuryAge);
    return finalMerc;
  }
  mercuryYearsLeft () {
    let mercuryYearsLeft = (this.earthDays/365/0.24).toFixed();
    return Math.abs(this.avgLifeSpan - mercuryYearsLeft);
  }
  mercuryAgeSurpassed () {
    let mercuryAgeSurpassed = (this.earthDays/365/0.24).toFixed();
    const mercuryAgeSur = Math.round(mercuryAgeSurpassed);
    if (mercuryAgeSur > this.avgLifeSpan) {
      console.log("Age has surpassed");
    }
    return mercuryAgeSur;
  }
  // Venus
  venusAge () {
    let venusAge = (this.earthDays/365/0.62);
    const finalVenus = Math.round(venusAge);
    return finalVenus;
  }
  venusYearsLeft () {
    let venusYearsLeft = (this.earthDays/365/0.62).toFixed();
    return Math.abs(this.avgLifeSpan - venusYearsLeft);
  }

  // Mars
  marsAge() {
    let marsAge = (this.earthDays/365/1.88);
    const finalMars = Math.round(marsAge);
    return finalMars;
  }
  marsYearsLeft () {
    let marsYearsLeft = (this.earthDays/365/1.88).toFixed();
    return Math.abs(this.avgLifeSpan - marsYearsLeft);
  }

  // Jupiter
  jupiterAge() {
    let jupiterAge = (this.earthDays/365/11.86);
    const finalJupiter = Math.round(jupiterAge);
    return finalJupiter;
  }
  jupiterYearsLeft () {
    let jupiterYearsLeft = (this.earthDays/365/11.86).toFixed();
    return Math.abs(this.avgLifeSpan - jupiterYearsLeft);
  }
} 