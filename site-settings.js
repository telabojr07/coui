const glob = require("glob");
let options = {};
var array = [];
const files = glob.sync("./rules/*.js");
files.forEach((file) => {
  let conf = require(file);
  array.push(conf);
});

module.exports = array;
