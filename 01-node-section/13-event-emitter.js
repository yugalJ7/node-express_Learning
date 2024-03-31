const EventEmiter = require("events");

const customEmitter = new EventEmiter();

// With an event emitter, we can simply raise a new event from a different part of an application, and a listener will listen to the raised event and have some action performed for the event.

customEmitter.on("response", (user, id) => {
  console.log(`Data recieved :
  Username : ${user}
  Id : ${id}
  `);
});

customEmitter.on("response", () => {
  console.log("procced to data cleaning ");
});

customEmitter.emit("response", "sinner", "32");
