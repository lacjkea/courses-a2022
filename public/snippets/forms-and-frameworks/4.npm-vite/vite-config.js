// vite.config.js
const { resolve } = require("path");

module.exports = {
  base: "./", //set base here or in the build command
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        sub: resolve(__dirname, "sub.html"),
      },
    },
  },
};
