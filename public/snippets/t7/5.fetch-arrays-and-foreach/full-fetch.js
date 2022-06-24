fetch("SOME-API-ENDPOINT")
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then(dataReceived)
  .catch((e) => {
    //Woops, something went wrong
    console.error("An error occured:", e.message);
  });

function dataReceived(data) {
  //We have the data
  console.log(data);
}
