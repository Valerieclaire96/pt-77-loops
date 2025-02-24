import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// factored
// updated variable names
// updated for loops for for of loops
// moved functionality into function then called in window.onload
// added comments to better describe my code
// add more items to my array to increase varity 
window.onload = function () {
  createAllBandNames() 
};

const createAllBandNames = () => {
  // create the "parts" of the band names
  let adjs = ["nine", "red", "fleet", "bbq", "loudly", "fall"];
  let advs = ["inch", "hot", "wood", "chick", "barking", "out"];
  let nouns = ["nails", "chili peppers", "mac", "inn", "noun", "boy"];

  // loop through parts to create band name
  for (let adj of adjs) {
    for (let adv of advs) {
      for (let noun of nouns) {
        console.log(adj, adv, noun) //display in console
      }
    }
  }
}
