const { Buffer } = require("buffer");

// create new buffer
const buffer1 = Buffer.from([257, 65, 66, 67]);
console.log(buffer1);

// write the first 2 bytes
buffer1.write("aa");
console.log(buffer1);
console.log(buffer1.toString());

const buf= Buffer.alloc(26);
for (let i = 0; i < 26; i++) {
    buf[i] = i + 97;
}

console.log(buf.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz
console.log(buf.toString('ascii', 0,10));   // outputs: abcde
console.log(buf.toString('utf8', 0,5));    // outputs: abcde
console.log(buf.toString(undefined, 0, 7)); // encoding defaults to 'utf8', outputs abcde

// convert buffer to JSON
console.log(buf.toJSON());

// concatenate
const buf1 = Buffer.from("1234", 'utf8');
const buf2 = Buffer.from("abcd", "utf8");
const buf3 = Buffer.concat([buf1, buf2]);
console.log(buf3.toString());
console.log(Buffer.compare(buf2, buf1))
