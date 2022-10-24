Reveal.addEventListener("ready", () => {
  if (window.location.search.match(/decktape/gi)) {
    Reveal.getSlides().forEach((slide) => {
      slide.classList.forEach((className) => {
        if (className === "no-print") {
          function cleanupSlideForPrint() {
            //slide.remove();
            const iframe = slide.querySelector("iframe");
            if (iframe) {
              const p = document.createElement("p");
              const a = document.createElement("a");
              a.href = iframe.src;
              a.textContent = "Link (content removed from PDF)";
              p.appendChild(a);
              slide.replaceChild(p, iframe);
            } else {
              slide.remove();
            }
          }
          cleanupSlideForPrint();
        }
      });
    });
  }
});
//add cusome animation classes to svg elements in .explanation
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
