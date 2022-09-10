//EVENT DRIVEN PROGRAMMING
//The order matters.
//1. Listen to the event
//2. Emit it
const eventEmitter = require("events");

const customEmitter = new eventEmitter();
//You can have as many events as possible and loisten to them same way, then emit.

customEmitter.on("response", (name, ID) => {
    console.log(`Data received user ${name} with ID:${ID}!`);
});
customEmitter.on("response", () => {
    console.log(`I can add someother logic here!`);
});

customEmitter.emit("response", "Godsent", 24);