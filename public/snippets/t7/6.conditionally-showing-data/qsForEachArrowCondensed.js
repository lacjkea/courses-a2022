document.querySelectorAll("div.product").forEach((elem) => {
  //we now have the dom elements one at a time, as 'elem'
  elem.addEventListener("click", (e) => {
    //e is the event object
    //e.target is the element that was clicked
    e.target.classList.add("selected");
    //this.classList.add("selected"); // is the same
  });
});
