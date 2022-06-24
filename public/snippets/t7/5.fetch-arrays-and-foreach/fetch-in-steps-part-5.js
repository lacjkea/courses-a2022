fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(dataReceived);

function dataReceived(data) {
  //do something with the data
  console.log(data);
}
