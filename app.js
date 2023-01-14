document.getElementById("hello-button").addEventListener("click", printHello);

function printHello() {
  console.log("Hello");
  document.getElementById("hello").innerHTML = "Hello!";
}

let count = 0;

function addOne() {
  count++;
  document.getElementById("counter").innerHTML = count;
}

document.getElementById("counter-button").addEventListener("click", addOne);

function printWatermelon(event) {
  document.getElementById("watermelon-text").innerHTML = event.target.value;
}

document
  .getElementById("watermelon-button")
  .addEventListener("click", printWatermelon);
