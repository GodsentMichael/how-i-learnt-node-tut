// File system can be done SYNCHRONOUSLY or ASYNCHRONOUSLY
const { readFileSync, writeFileSync } = require("fs"); //We destructure to use the sync method
console.log("start");
const fs = require("fs");
fs.readFileSync; //Another way to use the sync method asides ln2

//This is used to just access the file path or folder
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

console.log(first, second);

//This is used to create and write a new content into the new file.
writeFileSync(
    "./content/result-sync.txt",
    `Here is the result: ${first}, ${second}`
);

// If you want to append to the file
writeFileSync(
    "./content/result-sync.txt",
    `Here is the result: ${first}, ${second}`, { flag: "a" }
);
console.log(`done with this task`);
console.log(`starting the next one....`);