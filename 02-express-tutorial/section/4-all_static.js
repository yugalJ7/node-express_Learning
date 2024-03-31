const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("./public"));

// we rendered the .html file by putting it in static folder which is public folder in this example

app.listen(5008, () => {
  console.log("Server Is listening to 5008");
});
