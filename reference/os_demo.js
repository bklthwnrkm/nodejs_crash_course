/*** OS Module ***/

const os = require("os");

// Platform
console.log(os.platform()); //win32

// CPU Architecture
console.log(os.arch()); //x64

// CPU Core Info
console.log("🚀os.cpus: ", os.cpus());

// Free memory
console.log("🚀os.freemem: ", os.freemem());
// total system
console.log("🚀os.totalmem: ", os.totalmem());

// Home directory
console.log("🚀os.homedir: ", os.homedir());

// Uptime
console.log("🚀os.uptime: ", os.uptime());
