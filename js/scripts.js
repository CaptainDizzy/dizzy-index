/***THIS FILE REQUIRES JQUERY***/

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function nameRandomizer () {
  let roulette = getRandomInt(0, 5);
  
  setTimeout(nameRandomizer, 5000);
}