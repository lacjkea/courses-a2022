fetch("someurl/?id=eq.SOME_ID", {
  method: "delete",
  headers: {
    apikey: "your-anon-key",
  },
})
  .then((res) => res.json())
  .then((data) => console.log(data));
