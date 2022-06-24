import "./style.css";
const APIKEY = "606d5d99f5535004310074edx";
const endpoint = "https://frontendspring20-9cc3.restdb.io/rest/superheroes";

function get() {
  fetch(endpoint, {
    method: "GET",
    headers: {
      "x-apikey": APIKEY,
    },
  })
    .then((res) => res.json())
    .then(showStuff);
}

function showStuff(superheroes) {
  console.log(superheroes);
  superheroes.forEach((hero) => {
    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);
    copy.querySelector("h2").textContent = hero.real_name;
    copy.querySelector("h3").textContent = hero.alias;
    copy.querySelector("p").textContent = hero.dob;
    copy.querySelector("button").addEventListener("click", () => {
      deleteIt(hero._id);
    });
    document.querySelector("#app").appendChild(copy);
  });
}

function put() {
  const obj = {
    real_name: "Clark Kent",
    alias: "Superman",
    dob: "1978-01-01",
  };
  fetch(endpoint + "/5e98b5515053da750002a5d5", {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      "x-apikey": APIKEY,
    },
    body: JSON.stringify(obj),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
function post() {
  const hero = {
    real_name: "Lord JS Von Doom",
    alias: "Jonas",
    dob: "2000-01-01",
  };
  fetch(endpoint, {
    method: "POST",
    headers: {
      "x-apikey": APIKEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(hero),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function deleteIt(id) {
  fetch(endpoint + "/" + id, {
    method: "delete",
    headers: {
      "x-apikey": APIKEY,
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
document.querySelector("button").addEventListener("click", put);
get();
