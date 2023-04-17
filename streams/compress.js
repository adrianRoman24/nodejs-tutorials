const fs = require("fs");
const zlib = require("zlib");

// chained pipes to compress file
fs.createReadStream("./input.txt")
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream("./input.txt.gzip"));

console.log("File compressed");