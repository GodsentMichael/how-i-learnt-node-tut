const http = require("http");
const fs = require("fs");
const { text } = require("express");

http.createServer(function(req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf-8')
    // res.end(text)
    const fileStream = fs.createReadStream("./content/big.txt", "utf-8");
    fileStream.on("open", () => {
        fileStream.pipe();
    });
    fileStream.on("error", (err) => {
        res.end(err);
    });
});