const http = require("http");

// this code is synchronous if i made some changes in / url and reload about page it first let finish about page rendring and then proceed with / page rendering

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page done stupid");
  } else if (req.url === "/about") {
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(i + " , " + j);
      }
    }
    res.end("About Our Comppany what we do");
  } else {
    res.end("Error Page");
  }
});

server.listen(5005, () => {
  console.log("Server is listening to port:5005... ");
});
