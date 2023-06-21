const EventEmitter = require("events");

//Create Class
class MyEmitter extends EventEmitter {}

//Init object
const myEmitter = new MyEmitter();

//Event listener
myEmitter.on("event", () => console.log("ｲﾍﾞﾝﾄが発火しました!"));

//Init event
myEmitter.emit("event");
myEmitter.emit("event");
myEmitter.emit("event");
myEmitter.emit("event");
