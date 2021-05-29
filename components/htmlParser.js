// Modules
const ejs = require("ejs");

// Code
const htmlParser = async table => {
    try {
        return await ejs.renderFile("./views/main.ejs", {header: table.header, body: table.body});
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = htmlParser;