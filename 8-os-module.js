const os = require("os");

// Info abot current user
const user = os.userInfo();
console.log(user);

// This method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime} seconds`);

// Using an object to check OS built in method
const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freemem: os.freemem(),
};
console.log(currentOs);