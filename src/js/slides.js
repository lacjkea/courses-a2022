//add cusome animaytion classes to svg elements in .explanation
Reveal.addEventListener("fragmentshown", function (event) {
  // event.fragment = the fragment DOM element

  if (!event.fragment.dataset.animation) {
    return;
  }
  if (event.fragment.nodeName === "g") {
    [...event.fragment.children].forEach((e) => {
      e.classList.add(event.fragment.dataset.animation);
    });
  } else {
    event.fragment.classList.add(event.fragment.dataset.animation);
  }
});

(function () {
  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    link.getAttribute("href") &&
      link.hostname !== location.hostname &&
      (link.target = "_blank");
  });
})();
