fetch("/endpoint/", {
  method: "get",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
})
  .then(res => res.json())
  .then(data => {
    //do stuff with the data
  });
