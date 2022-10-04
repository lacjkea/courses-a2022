fetch("someurl", {
  method: "get",
  headers: {
    apikey: "your-anon-key",
  },
})
  .then((e) => e.json())
  .then((e) => console.log(e));
