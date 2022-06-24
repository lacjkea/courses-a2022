const searchengines = [
  { target: "https://google.com", name: "Google" },
  { target: "https://bing.com", name: "Bing" },
];
let links = "";
searchengines.forEach((link) => {
  links.push(`<a href="${link.target}">${link.name}</a>`);
});
