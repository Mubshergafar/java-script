const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexCOlor = "#";
  for (i = 0; i < 6; i++) {
    hexCOlor += hex[getRandomNumber()];
  }
  color.textContent = hexCOlor;
  document.body.style.backgroundColor = hexCOlor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
