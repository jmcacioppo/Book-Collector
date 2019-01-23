const express = require("express");
const webpack = require("webpack");
const path = require("path");
const config = require("../webpack.config.dev");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");

const port = 8000;
const app = express();
const compiler = webpack(config);

app.use(
  webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  })
);

app.use(webpackHotMiddleware(compiler));

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(port, function(err) {
  if (err) console.log(err);
  else console.log(`Listening at localhost:${port}...`);
});
