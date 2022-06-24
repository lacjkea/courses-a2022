const el = document.querySelector("p");

//the browser turns it into text
//the user sees the HTML tag
el.textContent = "<h1>Hi mom</h1>";

//the browser turns it in to html
//the user sees big text
el.innerHTML = "<h1>Hi mom</h1>";
