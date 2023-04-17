const fs = require("fs");
let data = "";

// read file in chunks using streams
const readerStream = fs.createReadStream("./input.txt");
readerStream.setEncoding("utf8");

readerStream.on("data", (chunk) => {
    data += chunk;
});

readerStream.on("end", () => {
    console.log("Read data:");
    console.log(data);
});

readerStream.on("error", (err) => {
    console.log("Error: ", err.stack);
});

// write to file using stream
const writeStream = fs.createWriteStream("./output.txt", "utf8");
writeStream.write("First line of output file\n");
writeStream.write("Second line of output file\n");
writeStream.end();

writeStream.on("finish", () => {
    console.log("Write completed");
});

writeStream.on("error", (err) => {
    console.log(err.stack);
});

