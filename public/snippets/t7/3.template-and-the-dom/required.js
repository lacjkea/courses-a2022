const myEl = document.querySelector("main");
const myNewEl = document.createElement("section");

myNewEl.textContent = "some text";
myEl.innerHTML = "<p>Some HTML</p>";

myEl.appendChild(myNewEl);

myEl.classList.add("some-css-class");
myEl.classList.remove("some-css-class");
myEl.classList.toggle("some-css-class");

if (myEl.classList.contains("some-css-class")) {
  console.log("do something");
}
