const image = document.querySelector("img.gallery");

image.addEventListener("click", swapImg);

function swapImg() {
  image.setAttribute("src", "selfie.jpg");
  image.setAttribute("alt", "A selfie");
}
