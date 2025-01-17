const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./navbar-ex/index.html"));
});

app.listen(5008, () => {
  console.log("Server Is listening to 5008");
});
