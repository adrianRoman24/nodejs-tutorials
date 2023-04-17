const fs = require("fs");

const buf = Buffer.alloc(1024);
fs.open("./input.txt", (err, fd) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("File opened successfully");
    fs.read(fd, buf, 0, buf.length, 0, (err, bytes) => {
        if (err){
            console.log(err);
        }
        console.log(bytes + " bytes read");
        if (bytes > 0) {
            console.log(buf.subarray(0, bytes).toString());
        }
        fs.close(fd, (err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log("Successfully closed file");
        });
    })
});
