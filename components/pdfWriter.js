// Modules
const pdf = require("html-pdf");

const writePDF = (path, html) => {
    pdf.create(html, {}).toFile(path, error => {
        if (error)
            throw new Error(error);
    });
}

module.exports = writePDF;