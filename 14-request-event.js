const http = require("http");
// const server = http.createServer((req, res) => {
//     res.end('Welcome')
// })

//ALTERNATIVELY

//Using Event Emitter API
const server = http.createServer();
//Has an inbuilt ability to emit events automatically
//So all you do is listen to it and respond to it.
server.on("request", (req, res) => {
    res.end("Welcome!");
});

server.listen(3000);