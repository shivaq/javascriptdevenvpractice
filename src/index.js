// 下記によって、bundle された css が html に適用される
//
// html ファイルには、<script src="bundle.js"></script> を追加
/**
 * 下記によって、bundle された css が html に適用される
 * html ファイルには、<script src="bundle.js"></script> を追加
 * webpack.config で、output 設定をしておく
 */
import "./index.css";
import numeral from "numeral";

const wantMore = numeral(1000).format("$0,0.00");
// debugger のラインで、実行が一旦止まる
// debugger;
// eslint-disable-next-line no-console
console.log(`くれくれ ${wantMore} あたしにおくれ!`);
