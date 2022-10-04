let data = {
  name: "Jonas2",
  email: "jofh@kea.dk",
  age: 18,
};
let postData = JSON.stringify(data);

fetch("someurl/?id=eq.SOME_ID", {
  method: "patch",
  headers: {
    "Content-Type": "application/json",
    apikey: "your-anon-key",
  },
  body: postData,
})
  .then((d) => d.json())
  .then((t) => console.log(t));
