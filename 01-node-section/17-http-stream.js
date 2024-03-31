var fs = require("fs");
var http = require("http");

http
  .createServer((req, res) => {
    // const text = fs.readFileSync("./content/bigAss.txt", "utf-8");
    const fileStream = fs.createReadStream("./content/bigAss.txt", "utf-8");
    fileStream.on("open", () => fileStream.pipe(res));
    fileStream.on("error", (err) => res.end(err));
  })
  .listen("5002");
