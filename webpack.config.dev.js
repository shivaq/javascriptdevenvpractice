import path from "path";

/**
 * mode -> 名前をつけておくと、デバッグ時に便利
 *
 * devtool ->速さやクオリティなどに違いがある選択肢がある
 * source-map とは -> 変換後のソースと元のソースとを関連付けるファイル
 * https://webpack.js.org/configuration/devtool/
 *
 * entry -> webpack はこの場所を探して、そこから依存関係やなんかを再帰的に評価していく
 *
 * output -> dev bundle をアウトプットする場所
 * develpment モードでは、ファイルは生成されず、メモリ上のこのディレクトリからブラウザに渡される
 * __dirname は、現在のディレクトリを表す
 *
 * module -> ファイルタイプ別に、どのように扱うかを定義する
 * JS 以外もimport して、bundle できる
 */

// export することで、import 可能になる
export default {
  mode: "development",
  devtool: "eval-source-map",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "src"),
    publicPath: "/",
    filename: "bundle.js",
  },
  plugins: [],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
};
