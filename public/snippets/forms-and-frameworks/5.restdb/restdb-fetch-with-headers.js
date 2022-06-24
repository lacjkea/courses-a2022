fetch("someurl", {
  method: "get",
  headers: {
    "x-apikey": "your-cors-api-key",
  },
})
  .then((e) => e.json())
  .then((e) => console.log(e));
