//CommonJs, every file in node is a module b(y default)
//Modules = Encapsulated Code (you share what you need out of it)
const names = require("./4-names");
const sayHi = require("./5-utils");

const data = require("./6-alternative-flavors");
// console.log(data);
require("./7-mind-grenade"); //You see, we didn't add 'const variable'

sayHi("susan");
sayHi(names.john);
sayHi(names.peter);