const products = document.querySelectorAll("div.product");

products.forEach(handleProduct);

function handleProduct(elem) {
  //we now have the dom elements one at a time, as 'elem'
  elem.addEventListener("click", productClicked);
}

function productClicked(e) {
  //e is the event object
  //e.target is the element that was clicked
  e.target.classList.add("selected");
  //this.classList.add("selected"); // is the same
}
