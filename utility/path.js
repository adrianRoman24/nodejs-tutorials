const path = require("path");

console.log(path.resolve(__filename));

console.log(path.normalize("../fs/inputdir/../"));

console.log(path.join("/", "tmp"))

console.log(path.extname(__filename));