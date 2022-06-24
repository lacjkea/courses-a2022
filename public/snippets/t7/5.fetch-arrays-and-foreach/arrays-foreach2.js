const ninjas = [
  {
    name: "Cole",
    power: "earth"
  },
  {
    name: "Zane",
    power: "ice"
  }
];

//For each ninja, call the function doYourThing
ninjas.forEach(doYourThing);

/* The ninjas are passed to the function as
'nin' one at a time */
function doYourThing(nin) {
  console.log(`${nin.name} has a special power: ${nin.power}`);
}
