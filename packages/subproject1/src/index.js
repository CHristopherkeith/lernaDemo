// import sayHello2 from "subproject2/src/index"
const sayHello2Default = require("subproject2");
const sayHello1 = require("../lib/subproject1");
const sayHello2 = require("subproject2/src/index");

console.log("[hello index.js from subproject1]");
console.log(sayHello1());
console.log(sayHello2Default());
// console.log(sayHello2)
