const fs = require("fs");
const zlib = require("zlib");

fs.createReadStream("./input.txt.gzip")
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream("./output.txt"));

console.log("File decompressed");
