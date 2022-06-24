fetch("someurl/SOME_ID", {
  method: "delete",
  headers: {
    "x-apikey": "your-cors-api-key",
  },
})
  .then((res) => res.json())
  .then((data) => console.log(data));
