const express = require("express");
const app = express();
const logger = require("../logger");
const authorize = require("../authorize");
const morgan = require("morgan");

//middleware function
// app.use(logger);

//multi middleware function
// app.use([authorize, logger]);

//using external package morgan
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("<h1>Home Page App.USE</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h2>About Domain Expansion</h2>");
});

app.get("/api/products", (req, res) => {
  res.send("<h2>Gojo Untouchable but i got hands on him</h2>");
});

app.get("/api/items", (req, res) => {
  console.log(req.user);
  res.send("<h2>Am bounty hunter i dont fight for free</h2>");
});

app.listen(5, () => {
  console.log("Server is listening to port 5000");
});
