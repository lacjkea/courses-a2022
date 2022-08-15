require("dotenv").config();
const { readdirSync, existsSync, statSync } = require("fs");
const { exec, execSync } = require("child_process");

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => source + "/" + dirent.name);

let urlsToParse = [];
const topLevelDirectories = getDirectories("./src/pages");
topLevelDirectories.forEach((url) => {
  urlsToParse = urlsToParse.concat(getDirectories(url));
});
//console.log(urlsToParse);

const testsToRun = [];
urlsToParse.forEach((url) => {
  const parts = url.split("/");
  const file = parts.at(-1);
  const folder = parts.at(-2);
  if (!existsSync(`./tests/${folder}/${file}`)) {
    exec(`mkdir ./tests/${folder}`);
    exec(`mkdir ./tests/${folder}/${file}`);
    console.log("creating folder", `mkdir ./tests/${folder}/${file}/`);
    //runTest(folder, file);
    testsToRun.push({ folder, file });
  } else {
    //TODO: nok også pdf. Den kigger på filen, men ikke om layoutfilen er ændret
    const testStats = statSync(`./tests/${folder}/${file}/test.html`);
    const astroStats = statSync(`./src/pages/${folder}/${file}/index.astro`);
    if (testStats.mtime > astroStats.mtime) {
      /*  console.log(
        `skipping ./tests/${folder}/${file}, it exists and test is newer`
      ); */
    } else {
      console.log(`overwriting ./tests/${folder}/${file}/test.html`);
      testsToRun.push({ folder, file });
      //runTest(folder, file);
    }
  }
});
if (testsToRun.length > 0) {
  runTest();
}
function runTest() {
  const test = testsToRun.pop();
  var child = exec(
    `npm run _test -- ${process.env.SITE}${test.folder}/${test.file}/ --chrome-flags="--headless" --quiet --output-path ./tests/${test.folder}/${test.file}/test.html`, //TODO: env
    (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        /* return; */
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        /* return; */
      }
      console.log(`stdout: ${stdout}`);
    }
  );
  child.on("exit", () => {
    if (testsToRun.length > 0) {
      runTest();
    }
  });
}
