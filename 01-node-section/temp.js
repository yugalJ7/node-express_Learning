console.log("first Task");
console.time();
for (let i = 0; i < 10; i++) {
  const h1 = document.querySelector("h1");
  h1.textContent = "Hi everyone is waiting for you";
}
console.timeEnd();
console.log("next Task");
