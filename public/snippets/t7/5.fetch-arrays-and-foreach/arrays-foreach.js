const ninjas = ["Kai", "Jay", "Lloyd", "Cole", "Zane"];

//For each ninja, call the function doKarate
ninjas.forEach(doKarate);

/* The ninjas are passed to the function as
'oneNinja' one at a time */
function doKarate(oneNinja) {
  console.log(`${oneNinja} does some karate`);
}
