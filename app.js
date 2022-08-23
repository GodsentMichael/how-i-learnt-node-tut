//npm -- global comand.comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency -- use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (linux deb)

// package.json - manifest file (storse important info about project/package)
// 3 ways to set up package.json
// 1. manual approach (create package.json in the root, create properties etc)
// 2. npm init (step by step, press enter to skip)
// 3. npm init -y (everything default)

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);