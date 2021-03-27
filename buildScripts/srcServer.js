/* eslint-disable import/no-unresolved */
import express from "express";
import path from "path";
import open from "open";
// webpack とその config を使えるようにする
import webpack from "webpack";
import config from "../webpack.config.dev";

const port = 5000;

// express のインスタンスを作成
const app = express();
const compiler = webpack(config);

/**
 *
 * express に、この middleware を使わせる。それを compiler に渡して、
 *
 */
app.use(
  require("webpack-dev-middleware")(compiler, {
    // noInfo: true, // this line invokes 'should NOT have additional properties' error
    // webpack.config.dev.js で設定した output.publicPath
    publicPath: config.output.publicPath,
  })
);

// パスごとのルールを定義
app.get("/", function (_req, res) {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(port, function (err) {
  if (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  } else {
    open("http://localhost:" + port);
  }
});
