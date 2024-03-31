const fs = require("fs");

for (let i = 0; i < 10000; i++) {
  fs.writeFileSync("./content/bigAss.txt", `Hey you ${i} hell nooo\n`, {
    flag: "a",
  });
}
