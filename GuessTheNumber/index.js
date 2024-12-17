const userInput = document.getElementById("inputNum");
const userDisplay = document.getElementById("display");
const userSubmit = document.getElementById("submitNow");
const userTryAgain = document.getElementById("tryAgain");
const userQuit = document.getElementById("quitGame");
const min = 1;
const max = 100;
let randomNum = Math.floor(Math.random() * max) + min;
console.log(randomNum);
let attempts = 5;
userDisplay.textContent = "Please guess the number within 5 attempts!";
userSubmit.onclick = function () {
  if (attempts > 1) {
    const userGuess = Number(userInput.value);

    if (userGuess == randomNum) {
      userDisplay.textContent = `Congratulations! you guessed the number! ${randomNum}`;
      attempts = 0;
      userTryAgain.style.display = "inline";
      userSubmit.style.display = "none";
      userQuit.style.display = "inline";
      userInput.value = "";
    } else if (randomNum < userGuess) {
      attempts--;
      userDisplay.textContent = `Sorry, too high! You have ${attempts} attempts left.`;
      userDisplay.classList.add("attempts-red");
    } else if (randomNum > userGuess) {
      attempts--;
      userDisplay.textContent = `Sorry, too low! You have ${attempts} attempts left.`;
      userDisplay.classList.add("attempts-red");
    }
  } else if (attempts === 0 || userInput != randomNum) {
    userDisplay.textContent = `Game Over! the correct number was ${randomNum}`;
    userTryAgain.style.display = "inline";
    userSubmit.style.display = "none";
    userQuit.style.display = "inline";
    userInput.value = "";
    userInput.disabled = true;
  }
};

function resetGame() {
  randomNum = Math.floor(Math.random() * max) + min;
  attempts = 5;
  userDisplay.textContent = `New game started! please guess the number within 5 attempts`;
  console.log(randomNum);
  userTryAgain.style.display = "none";
  userSubmit.style.display = "inline";
  userQuit.style.display = "inline";
  userInput.value = "";
  userInput.disabled = false;
}
userTryAgain.onclick = resetGame;

function exitGame() {
  attempts = 0;
  userDisplay.textContent = `Thank you for playing! the correct number was ${randomNum}`;
  userInput.disabled = true;
  userTryAgain.style.display = "inline";
  userSubmit.style.display = "none";
  userQuit.style.display = "inline";
}
userQuit.onclick = exitGame;
