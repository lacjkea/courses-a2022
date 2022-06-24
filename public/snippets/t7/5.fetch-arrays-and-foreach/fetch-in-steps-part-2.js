fetch(url).then(headersReceived).then();

function headersReceived(response) {
  return response.json();
}
