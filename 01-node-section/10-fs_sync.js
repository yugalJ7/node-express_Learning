const fs = require("fs");
console.log("process is started");
const first = fs.readFileSync("./content/first.txt", "utf-8");
const second = fs.readFileSync("./content/second.txt", "utf-8");

fs.writeFileSync(
  "./content/result-file.txt",
  `Here is the result of both my file : ${first} ${second}`,
  console.log("In Progress")
);
console.log("task is completed");
console.log("moving to next task");

// in this approach of reading and writting file program execute in synchronous way
// execution will look something like this
// process is started
// In Progress
// task is completed
// moving to next task
