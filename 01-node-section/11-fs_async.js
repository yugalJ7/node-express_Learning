const { log } = require("console");
const fs = require("fs");

console.log("start the task");
fs.readFile("./content/second.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  // console.log(first);
  fs.readFile(
    "./content/first.txt",
    "utf-8",

    (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      const second = result;
      // console.log(second);

      fs.writeFile(
        "./content/result-async.txt",
        `test 3 result : ${first} ${second}`,
        (err, result) => {
          if (err) {
            console.log(err);
            return;
          }
          console.log("task is in progress");
        }
      );
    }
  );
});

// in this approach task of reading and writting file executed parallel with the rest of execution of program
// so the output looks something like this ->
// start the task
// task is starting
// result 0
// task is in progress

console.log("task is starting ");

var a = 16 % 4;
log("result " + a);
