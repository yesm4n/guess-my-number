// VARIABLES FOR RANDOM NUMBER / SCORE / HIGHSCORE / ETC

let number = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
let displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

// SELECTING .CHECK AND TURNING THE STRING --> TO NUMBER SO WE CAN MANIPULATE IT

document.querySelector(".check").addEventListener("click", () => {
  let guess = Number(document.querySelector(".guess").value);
  // console.log(guess, typeof guess);

  // LOGIC OF THE CODE NUMBER

  if (!guess) {
    displayMessage("Insert a number.");
  } else if (guess === number) {
    document.querySelector(".number").textContent = number;
    displayMessage("Correct number!! 🏆");
    document.querySelector("body").style.backgroundColor = "#FFC7C7";
    document.querySelector("body").style.color = "#8785A2";
    document.querySelector(".number").style.fontSize = "5em";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? "Too high!" : "Too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("Game over!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

// BUTTON RESET VALUES TO DEFAULT

document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  number = Math.floor(Math.random() * 20 + 1);
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#f6f6f6";
  document.querySelector(".number").style.fontSize = "";
});
