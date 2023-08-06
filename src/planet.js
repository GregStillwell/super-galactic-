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
    this.mercuryPassed = Math.floor(this.passAgeCal / .24);
    this.venusPassed = Math.floor(this.passAgeCal / .62);
    this.marsPassed = Math.floor(this.passAgeCal / 1.88);
    this.jupiterPassed = Math.floor(this.passAgeCal / 11.86);
  }

  



}