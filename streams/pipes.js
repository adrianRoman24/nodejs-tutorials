const fs = require("fs");

// redirect input stream to output stream using pipes
const readerStream = fs.createReadStream("./input.txt", "utf-8");
const writeStream = fs.createWriteStream("./output.txt", "utf-8");

readerStream.on("end", () => {
    console.log("Ended reading");
});

writeStream.on("finish", () => {
    console.log("Ended writing");
});

readerStream.pipe(writeStream);
