module.exports = require("./make-webpack-config")({
  entry: {
    app: "./src/app.js",
    docs: "./src/css/app.less"
  },
  separateStylesheet: true,
  path: "./docs/dist"
  //library: "app"
});
