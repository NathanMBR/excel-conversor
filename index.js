// Modules
const fs = require("fs");

// Components
const read = require("./components/reader");
const process = require("./components/processor");
const Table = require("./components/Table");
const htmlParser = require("./components/htmlParser");
const write = require("./components/writer");
const writePDF = require("./components/pdfWriter");

// Definitions
const path = "./examples/movies.csv";

// Code
(async () => {
    try {
        if (!fs.existsSync("./out"))
            fs.mkdirSync("./out");

        if (!fs.existsSync("./out/html"))
            fs.mkdirSync("./out/html");

        if(!fs.existsSync("./out/pdf"));
            fs.mkdirSync("./out/pdf");
    } catch (error) {
        throw new Error(error);
    }

    const movies = new Table(process(await read(path)));

    console.log(movies.header);
    console.log("Header length: " + movies.headerLength);
    console.log(movies.body);
    console.log("Body length: " + movies.bodyLength);

    const html = await htmlParser(movies);
    const date = new Date().getTime();

    write(`out/html/movies${date}.html`, html);
    writePDF(`out/pdf/movies${date}.pdf`, html);
})();