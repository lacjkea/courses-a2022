const { readdirSync, existsSync, statSync } = require("fs");
const { exec } = require("child_process");

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => source + "/" + dirent.name);

let urlsToParse = [];
const topLevelDirectories = getDirectories("./src/pages");
topLevelDirectories.forEach((url) => {
  urlsToParse = urlsToParse.concat(getDirectories(url));
});
console.log(urlsToParse);
urlsToParse.forEach((url) => {
  const parts = url.split("/");
  const file = parts.at(-1);
  const folder = parts.at(-2);
  //check if we need to recreate the pdf
  /* console.log("PDF's disabled, scanFolders.js line 21");
  return; */
  if (!existsSync(`./pdfs/${folder}/${file}.pdf`)) {
    //console.log(`creating ./pdfs/${folder}/${file}.pdf`);
    createPDF(folder, file);
  } else {
    const pdfStats = statSync(`./pdfs/${folder}/${file}.pdf`);
    const astroStats = statSync(`./src/pages/${folder}/${file}/index.astro`);
    if (pdfStats.mtime > astroStats.mtime) {
      /* console.log(
        `skipping ./pdfs/${folder}/${file}.pdf, it exists and pdf is newer`
      ); */
    } else {
      console.log(`overwriting ./pdfs/${folder}/${file}.pdf`);
      createPDF(folder, file);
    }
  }
});
function createPDF(folder, file) {
  console.log(`starting PDF ${folder} ${file}`);
  console.log(
    `npm run pdf -- http://localhost:3000/${folder}/${file}?decktape ./pdfs/${folder}/${file}.pdf`
  );
  exec(
    `npm run pdf -- http://localhost:3000/${folder}/${file}?decktape ./pdfs/${folder}/${file}.pdf`,
    (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
    }
  );
}
