// Code
const process = data => {
    const rows = [];

    data.split("\r\n").forEach(row => {
        rows.push(row.split(","));
    });

    return rows;
}

module.exports = process;