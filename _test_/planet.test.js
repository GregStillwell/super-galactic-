import { Planet } from "../src/index.js"

describe('Planet', () => {
  let myPlanet = new Planet(10, 20, 5);

  test('it should create a new Planet object with properties for earthage, futurebirth and passbirth', () => {
    expect(myPlanet.earthage).toEqual(10);
  })
})
