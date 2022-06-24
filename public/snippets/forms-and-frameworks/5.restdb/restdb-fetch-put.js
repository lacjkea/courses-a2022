let data = {
  name: "Jonas2",
  email: "jofh@kea.dk",
  age: 18,
};
let postData = JSON.stringify(data);

fetch("someurl/SOME_ID", {
  method: "put",
  headers: {
    "Content-Type": "application/json",
    "x-apikey": "your-cors-api-key",
  },
  body: postData,
})
  .then((d) => d.json())
  .then((t) => console.log(t));
