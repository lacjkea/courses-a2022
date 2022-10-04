fetch("/endpoint/" + id, {
  method: "delete"
})
  .then(res => res.json())
  .then(data => {
    console.log("data was deleted", data);
  });
