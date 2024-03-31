// Even though the sum() function itself is not exported, the moment this module is required, the function is executed, and it logs the result of num1 + num2 to the console.

const num1 = 60;
const num2 = 9;

// function sum() {
//   console.log(`total num ${num1 + num2}`);
// }

const sum = () => {
  console.log(`total num ${num1 + num2}`);
};

exports.module = sum;
