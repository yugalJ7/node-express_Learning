const { readFile } = require("fs");

console.log("Started first task");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
  console.log("Completed First Task");
});
console.log("Started Second Task");
