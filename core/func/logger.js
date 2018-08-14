let colors = require("colors");

let prefix = "shortjump";

module.exports.info = (message) => {
    // eventually add a physical copy of the shits to a .log file
    console.log(`${prefix.green} | ${message}`);
};

module.exports.warn = (message) => {
    // eventually add a physical copy of the shits to a .log file
    console.log(`${prefix.yellow} | ${message}`);
};

module.exports.error = (message) => {
    // eventually add a physical copy of the shits to a .log file
    console.log(`${prefix.red} | ${message}`);
};