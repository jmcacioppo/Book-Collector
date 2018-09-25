const express = require('express');
const webpack = require('webpack');
const path = require('path');
const config = require('../webpack.config.dev');
// const open = require('open');

const port = 8000;
const app = express();
const compiler = webpack(config);

// app.use(require('webpack-dev-middleware')(compiler, {
//   noInfo: true,
//   publicPath: config.output.publicPath
// }));

// app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`Listening at localhost:${port}...`);
    // open(`http://localhost:${port}`);
  }
});
