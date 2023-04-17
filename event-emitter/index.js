const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

const listener1 = (...args) => {
    console.log("listener 1 executed with args: ", args);
}

const listener2 = (...args) => {
    console.log("listener 2 executer with args: ", args);
}

// Bind the connection event with the listner1 function
eventEmitter.on("connection", listener1);

// Bind the connection event with the listner2 function
eventEmitter.on("connection", listener2);

console.log(`${eventEmitter.listenerCount("connection")} listeners are listening to connection event`);

// fire the connection event
eventEmitter.emit("connection", ...["arg1", "arg2"]);

// remove binding of listener 1
eventEmitter.removeListener("connection", listener1);

// fire again the connection event
eventEmitter.emit("connection", ...["arg1", "arg2"]);

console.log(`${eventEmitter.listenerCount("connection")} listeners are listening to connection event`);