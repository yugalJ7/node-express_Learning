const http = require("http");

const server = http.createServer();

//we can also create server using eventemitter on
server.on("request", (req, res) => {
  res.end("welcome home");
});

server.listen(5006);
