import { url, headers } from "./config.js";

async function getShows() {
  const options = {
    method: "GET",
    headers: headers,
  };

  const res = await fetch(url, options);
  const data = await res.json();
  return data;
}

function addShow() {
  const options = {
    method: "POST",
    headers: headers,
    body: '{"genres":["Fantasy"],"seasons":4,"director":"me","rating":4.7,"ongoing":true,"name":"House of JS"}',
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
      showData();
    });
}
function updateShow() {}
function deleteShow(id) {
  const options = {
    method: "DELETE",
    headers: headers,
  };
  console.log(id);

  fetch(url + "?id=eq." + id, options)
    .then((response) => response.json())
    .then((response) => {
      showData();
    })
    .catch((err) => console.error(err));
}

async function init() {
  const button = document.querySelector("nav button.addShow");
  button.addEventListener("click", addShow);
  showData();
}
async function showData() {
  const data = await getShows();
  console.log(data);
  document.querySelector("main").innerHTML = "";
  data.forEach((item) => {
    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);
    copy.querySelector("h2").textContent = item.name;
    copy.querySelector(".seasons").textContent = item.seasons;
    copy.querySelector(".director").textContent = item.director;
    const button = copy.querySelector("button");
    button.addEventListener("click", () => {
      deleteShow(item.id);
    });
    document.querySelector("main").appendChild(copy);
  });
}
init();
