//this is a callback
setInterval(callback, 2000);

//so is this
elems.forEach(callback);

//and so is this
async function getData(url, callback) {
  const response = await fetch(urls);
  const json = await response.json();
  callback(json);
}
getData("https://....", console.log);
