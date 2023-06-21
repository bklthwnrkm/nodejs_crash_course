const EventEmitter = require("events");
const uuid = require("uuid");

console.log(uuid.v4());

class Logger extends EventEmitter {
  //Call event
  log(msg) {
    this.emit("message", { id: uuid.v4(), msg });
  }
}

module.exports = Logger;
