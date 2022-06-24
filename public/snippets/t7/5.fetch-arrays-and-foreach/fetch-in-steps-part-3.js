fetch(url).then(headersReceived).then(dataReceived);

function headersReceived(response) {
  return response.json();
}

function dataReceived(data) {
  //do something with the data
  console.log(data);
}
