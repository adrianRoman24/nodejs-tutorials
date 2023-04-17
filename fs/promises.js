const fsPromises = require("fs/promises");

async function getFiles(directory) {
    const result = [];
    const files = await fsPromises.readdir(directory);
    const ps = [];
    for (const file of files) {
        ps.push((async () => {
            const stats = await fsPromises.lstat(directory + "/" + file);
            if (stats.isDirectory()) {
                const currentFiles = await getFiles(directory + "/" + file);
                result.push(...currentFiles);
                return;
            }
            result.push(file);
        })());
    }
    const psRes = await Promise.allSettled(ps);
    if (psRes.some(elem => elem.status === "rejected")) {
        throw Error("Error");
    }
    return result;
}

(async () => {
    // asyncronous read using promises
    const data = await fsPromises.readFile("./input.txt", "utf-8");
    
    // read all files from directory asyncronously
    const filesData = await getFiles("./inputdir");
    console.log(filesData);
})();
