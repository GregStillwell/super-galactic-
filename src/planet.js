export class Planet {
  constructor(earthage, futurebirth, passbirth) {

    this.earthage = earthage;
    this.futurebirth = futurebirth
    this.passbirth = passbirth
  }

  getAge() {
    this.mercuryAge = Math.floor(this.earthage / .24);
    this.venusAge= Math.floor(this.earthage /  .62);
    this.marsAge = Math.floor(this.earthage /  1.88);
    this.jupiterAge = Math.floor(this.earthage /  11.86);
  }

  passAge() {
    this.passAgeCal = this.earthage - this.passbirth;
  }

  yearsPassed() {
    this.mercuryPassedbirth = Math.floor(this.passAgeCal / .24);
    this.venusPassedbirth = Math.floor(this.passAgeCal / .62);
    this.marsPassedbirth = Math.floor(this.passAgeCal / 1.88);
    this.jupiterPassedbirth = Math.floor(this.passAgeCal / 11.86);
  }

  yearsToPass() {
    this.earthAgeToPass = this.futurebirth - this.earthage
  }

  yearsToPassCal() {
    this.mercuryYearsToPass = Math.floor(this.earthAgeToPass / .24);
    this.venusYearsToPass = Math.floor(this.earthAgeToPass / .62);
    this.marsYearsToPass = Math.floor(this.earthAgeToPass/ 1.88);
    this.jupiterYearsToPass = Math.floor(this.earthAgeToPass / 11.86);
  }



}