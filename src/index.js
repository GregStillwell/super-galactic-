import './css/styles.css';
import { Planet } from './planet';

function handleForm(event) {
  event.preventDefault()

  const userAge = parseInt(document.getElementById("userAge"));
  const futureAge = parseInt(document.getElementById("futureAge"))
  const pastAge = parseInt(document.getElementById("pastAge"))
  
  let planet = new Planet(userAge, futureAge, pastAge);
}
