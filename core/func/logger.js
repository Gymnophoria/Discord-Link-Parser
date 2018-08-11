let colors = require("colors");

let prefix = "shortjump";

module.exports.info = (message) => {
    // eventually add a physical copy of the shits to a .log file
    console.log(`${prefix.green} | ${message}`);
};