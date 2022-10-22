const sayHello1 = require("../lib/subproject1");
const sayHello2 = require("subproject2/lib/subproject2");
console.log("[hello index.js from subproject1]");
console.log(sayHello1());
console.log(sayHello2());
