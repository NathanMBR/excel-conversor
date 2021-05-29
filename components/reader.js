// Modules
const fs = require("fs");
const util = require("util");

// Code
const read = async (path) => {
    try {
        return await (util.promisify(fs.readFile))(path, "utf-8");
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = read;