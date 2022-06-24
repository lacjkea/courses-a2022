const payload = {
  header: "hi mom",
  other: "here goes",
};

fetch(`/endpoint`, {
  method: "post",
  body: JSON.stringify(payload),
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then((d) => {});
