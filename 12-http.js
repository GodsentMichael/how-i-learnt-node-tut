const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Welcome to our home page");
    }
    if (req.url === "/about") {
        res.end("Here is our short history");
    }
    res.end(`<h1>oops!</h1> <p> We can't seem to find the page you are looking for</p>
   <a href="/">back home</a>`);
});

server.listen(3000);

//npm -- global comand.comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency -- use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (linux deb)

// package.json - manifest file (storse important info about project/package)
// 3 ways to set up package.json
// 1. manual approach (create package.json in the root, create properties etc)
// 2. npm init (step by step, press enter to skip)
// 3. npm init -y (everything default)

// const _ = require("lodash");

// const items = [1, [2, [3, [4]]]];
// const newItems = _.flattenDeep(items);
// console.log(newItems);

const express = require("express");
const fsPromises = require("fs").promises;

const PORT = 3000;
const app = express();

app.use(express.static("content"));
app.use(express.json);

//Synchronous error is automatically handled by express
app.get("/", (req, res) => {
    throw new Error("Hello error!");
});

//Asynchronous error is not handled by express
app.get("/file", async(req, res) => {
    const file = await fsPromises.readFile("./no-such-file.txt");
    res.sendFile(file);
});

app.get("/text", async(req, res, next) => {
    try {
        const file = await fsPromises.readFile("./no-such-file.txt");
        res.sendFile(file);
    } catch (error) {
        error.type = "Not Found";
        next(error);
    }
});

app.get("/user", async(req, res, next) => {
    try {
        const file = await fsPromises.readFile("./no-such-file.txt");
        res.sendFile(file);
    } catch (error) {
        error.type = "Redirect";
        next(error);
    }
});

//Handle asynchronous error using error middleware
app.use((error, req, res, next) => {
    console.log("Error Handling Middleware called");
    console.log("Path:", req.path);
    console.error("Error:", error);

    if (error.type == "Redirect") res.redirect("error.html");
    else if (error.type == "Not Found")
    //arbitrary condition check
        res.status(500).send("file not found!");
    else {
        res.status(404).send(error);
    }
    next();
});
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});