import { Planet } from "../src/planet.js"

describe('Planet', () => {
  let myPlanet = new Planet(10, 20, 5);

  test('it should create a new Planet object with properties for earthage, futurebirth and passbirth', () => {
    expect(myPlanet.earthage).toEqual(10);
    expect(myPlanet.futurebirth).toEqual(20);
    expect(myPlanet.passbirth).toEqual(5);
  })

  test('it should convert earth years to years on other planets', () => {
    myPlanet.getAge();
    expect(myPlanet.mercuryAge).toEqual(41);
    expect(myPlanet.venusAge).toEqual(16);
    expect(myPlanet.marsAge).toEqual(5);
    expect(myPlanet.jupiterAge).toEqual(0);
  })

   test("It should return number of years since another birthday", () => {
    myPlanet.passAge();
    expect(myPlanet.passAgeCal).toEqual(5)
   })

   test("it should return a number of years from mercury, venus, mars, jupiter years in pastbirth", () => {
    myPlanet.passAge();
    expect()
   }
   

   
  


})
