import './css/styles.css';
import { Planet } from './planet';

function handleForm(event) {
  event.preventDefault();

  const userAge = parseInt(document.getElementById("userage"));
  const futureAge = parseInt(document.getElementById("futureage"));
  const pastAge = parseInt(document.getElementById("pastage"));
  
  let planet = new Planet(userAge, futureAge, pastAge);
  planet.getAge();
  planet.passAge();
  planet.yearsToPass();
  planet.yearsPassed();
  planet.yearsToPassCal();

  let result = document.getElementById("results")
  result.p.append

 // const p = document.createElement("p");
 // p.append(results);
  //document.body.append(p)
}
window.addEventListener("load", function() {
  this.document.getElementById("AgeInput").addEventListener("submit", handleForm)
});