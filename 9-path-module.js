const path = require("path");

console.log(path.sep);

const filePath = path.join(
    //This method gives the entire directory.
    "/content",
    "subfolder",
    "sub-subfolder",
    "test.txt"
);
console.log(filePath);

const base = path.basename(filePath); //This gives you the "text.txt" file
console.log(base);

const absolute = path.resolve(__dirname, "content", "subfolder", "text.txt");
console.log(absolute);