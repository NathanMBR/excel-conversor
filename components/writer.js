// Modules
const fs = require("fs");
const util = require("util");

// Code
const write = async (path, data) => {
    try {
        return await (util.promisify(fs.writeFile))(path, data);
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = write;