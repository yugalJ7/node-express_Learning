const http = require("http");

const fool = http.createServer((req, res) => {
  console.log("request event");
  res.end("End of Fucking World");
});

fool.listen(5004, () => {
  console.log("Server listening on port:5000 ......");
});
