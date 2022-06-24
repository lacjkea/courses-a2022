//Step 1: Chose the <template>'s content
const templateElement = document.querySelector("#myTemplate").content;

//Step 2: Make a "clone"
const myClone = templateElement.cloneNode(true);

//Step 3: Change the content
myClone.querySelector("h1").textContent = "Hi Mom";
//...

//Step 4: Chose the new "parent" element
const parentElement = document.querySelector("body");

//Step 5: Add (Append) the clone to the DOM
parentElement.appendChild(myClone);
