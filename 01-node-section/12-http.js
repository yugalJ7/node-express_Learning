const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(`<!DOCTYPE html>
 <html lang="en">
   <head>
     <meta charset="UTF-8" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <title>JavaScript Challenges</title>
   </head>
   <body>
     <div
       style="
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
       ">
       <h1>1. Longest Word</h1>
       <h1>2. Maths Sequences</h1>
     </div>
   </body>
 </html>`);
  } else if (req.url === "/about") {
    res.end("Here is our short history");
  } else {
    res.end(`
  <h1>OOPS!</h1>
  <p>We can't seem to find the page you're looking for</p>
  <a href='/'>Home</a>
  `);
  }
});

server.listen(5002);
