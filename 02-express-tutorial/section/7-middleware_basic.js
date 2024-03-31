const express = require("express");

const app = express();

const details = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const date = new Date().getFullYear();
  console.log(method, url, date);
  next();
};

app.get("/", details, (req, res) => {
  res.send(`<h1>Home</h1>`);
});

app.get("/about", details, (req, res) => {
  res.send("<h1>About Culling game</h1>");
});

app.listen(5, () => {
  console.log("Server listening on port 5000");
});
