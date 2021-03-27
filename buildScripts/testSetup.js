// This file isn't transpiled, so must use CommonJS

// Register babel to transpile before our tests run.
require("@babel/register")();

// Disable webpack features that Mocha doesn't understand.
// import "./index.css"; みたいなのは、Mocha には扱うことができない
require.extensions[".css"] = function () {};
