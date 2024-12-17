let randomNum;
const randomBtn = document.getElementById("randomBtn");
const numDisplay = document.getElementById("displayNum");
const max = 6;
const min = 1;
randomBtn.onclick = function () {
  randomNum = Math.floor(Math.random() * max) + min;
  numDisplay.textContent = randomNum;
};
