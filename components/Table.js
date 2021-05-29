class Table {
    constructor(array) {
        this.header = array[0];
        array.shift();
        this.body = array;
    }

    get headerLength() {
        return this.header.length;
    }

    get bodyLength() {
        return this.body.length;
    }
}

module.exports = Table;