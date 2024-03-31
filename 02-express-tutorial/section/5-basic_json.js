const express = require("express");
const app = express();
const { products } = require("../data");

app.get("/", (req, res) => {
  res.json(products);
});

app.listen(5003, () => {
  console.log("Server is listening to 5003");
});
