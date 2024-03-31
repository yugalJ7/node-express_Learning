const { createReadStream } = require("fs");

// The highWaterMark option is used to specify the size (in bytes) of the internal buffer used by the stream.
// When reading from the file, Node.js will try to fill the internal buffer up to this size before emitting a data event.
const stream = createReadStream("./content/bigAss.txt", {
  highWaterMark: 15000,
  encoding: "utf-8",
});

stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (err) => console.log(err));
