const { Module } = require("module");

function add(a, b) {
    return b + a;

}
// module.exports = {};
module.exports = add;