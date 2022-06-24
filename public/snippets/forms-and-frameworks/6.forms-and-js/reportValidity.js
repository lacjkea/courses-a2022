const form = document.querySelector("form");
form.reportValidity();

const email = form.elements.email;
email.reportValidity();
