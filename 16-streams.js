const { error } = require("console");
const { createReadStream } = require("fs");
const { result } = require("lodash");

const stream = createReadStream("./content/big.txt", { highWaterMark: 90000 });

//highWaterMark = control size
// last buffer = remainder

// const stream = createReadStream("./content/big.txt", { highWaterMark: 90000 });
// const stream = createReadStream("./content/big.txt", { encoding: "utf-8" });

stream.on("data", (result) => {
    console.log(result);
});

stream.on("error", (err) => {
    console.log(err);
});