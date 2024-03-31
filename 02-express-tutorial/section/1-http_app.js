const http = require("http");
const { readFileSync } = require("fs");

const homePage = readFileSync("./navbar-ex/index.html");
const homeStyle = readFileSync("./navbar-ex/style.css");
const homeLogo = readFileSync("./navbar-ex/logo.svg");
const homeLogic = readFileSync("./navbar-ex/browser-app.js");

// In this code we deploy the html, css, js file on server with port number 5005

const server = http.createServer((req, res) => {
  const url = req.url;
  console.log(url);
  //home page
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  }
  //homepage style
  else if (url === "/style.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyle);
    res.end();
  }
  //homepage logo
  else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(homeLogo);
    res.end();
  }
  //homepage Logic
  else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homeLogic);
    res.end();
  }
  //about page
  else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About Page</h1>");
    res.end();
  }
  //error page
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Page Not Found</h1>");
    res.end();
  }
});

server.listen(5005);
