const path = require("path");

module.exports = {
  entry: "./src/index.js", // your main file
  output: {
    filename: "bundle.js", // output file
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development", // use 'production' when ready to deploy
};
