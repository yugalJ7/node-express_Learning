const { readFile, writeFile } = require("fs").promises;
const { resolve } = require("path");

//Using util.promisify this code is better approach to write file rather than using callback like we do in 11-fs_async.js file
//instead of declaring below three variable we can use .promise in require("fs")
// const util = require("util");
// const readFileProm = util.promisify(readFile);
// const writeFileProm = util.promisify(writeFile);

const access = async () => {
  const fileOne = await readFile("./content/first.txt", "utf-8");
  const fileSec = await readFile("./content/second.txt", "utf-8");
  await writeFile(
    "./content/newLrn-util.txt",
    `fileOne Content : ${fileOne}
fileTwo Content : ${fileSec}
    `
  );
  //   console.log(`fileOne Content : ${fileOne}
  // fileTwo Content : ${fileSec}
  //     `);
};

access();
// Normal Approach
const getText = (path) => {
  console.log("We are inside getText function rendering first file");
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

const funTwo = (data) => {
  return new Promise((resolve, reject) => {
    readFile("./content/second.txt", "utf-8", (err, res) => {
      if (data !== res) {
        reject(err);
      } else {
        console.log("Data is correct");
        resolve(res);
      }
    });
  });
};

const funError = () => {
  console.log("File you passed is not correct");
};

//Async/Await Approach:
// const start = async () => {
//   try {
//     const first = await getText("./content/second.txt");
//     const secFile = await getText("./content/first.txt");
//     console.log(`File1 Content : ${first}
//     File2 Content : ${secFile}
//     `);
//   } catch (error) {
//     funError();
//   }
// };
// start();

// Promise Chain Approach:
// getText("./content/second.txt")
//   .then(funTwo)
//   .then((result) => console.log(result))
//   .catch(funError);
