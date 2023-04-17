console.log(__filename);
console.log(__dirname);

const t = setTimeout(() => {
    console.log("setTimout")
}, 0);

clearTimeout(t);

const tt = setInterval(() => {
    console.log("setInterval");
}, 0);

clearInterval(tt);

// // console.log(console);
// console.log(process);