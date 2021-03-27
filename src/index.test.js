// for assertion
import { expect } from "chai";
// for dom
import jsdom from "jsdom";
// for file system
import fs from "fs";

describe("Our first test", () => {
  it("should pass", () => {
    expect(true).to.equal(true);
  });
});

let AssertStr1 = "時々霧笛が鳴ればいい"

describe("index.html", () => {
  it("should have h1 that says users", () => {
    const index = fs.readFileSync("./src/index.html", "utf-8");
    const { JSDOM } = jsdom;
    const dom = new JSDOM(index);
    const h1 = dom.window.document.getElementsByTagName("h1")[0];
    expect(h1.innerHTML).to.equal(AssertStr1);
    // dom をクリーンアップ
    dom.window.close();
  });
});
