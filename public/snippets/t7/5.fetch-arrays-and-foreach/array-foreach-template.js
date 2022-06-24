const items = [
  {
    name: "Jonas",
    pets: 6,
  },
  {
    name: "Lasse",
    pets: 0,
  },
];
items.forEach(showProduct);

function showProduct(item) {
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);
  clone.querySelector(".name").textContent = item.name;
  clone.querySelector(".pets").textContent = item.pets;
  const parent = document.querySelector("main");
  parent.appendChild(clone);
}
