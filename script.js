const btn = document.querySelectorAll("button");
const div = document.querySelector("div");
const game = document.querySelector("#game");

game.addEventListener("click", () => {
  let result = [0, 0];
  let i = 0;
  div.textContent = "Game start. Make a Choice";
  btn.forEach((button) => {
    button.addEventListener("click", () => {
      result = playRound(button.id, result);
      i++;
      if (i === 5 || result[0] === 3 || result[1] === 3) {
        checkScore(result);
        i = 0;
        result = [0, 0];
      }
    });
  });
});

function getComputerChoice() {
  // get random index value
  const randomIndex = Math.floor(Math.random() * 3);

  // get random item
  const array = ["rock", "paper", "scissors"];
  const computerChoice = array[randomIndex];

  return computerChoice;
}

function playRound(PlayerSelection, score) {
  let computerSelection = getComputerChoice();
  if (PlayerSelection === computerSelection) {
    div.textContent =
      "Even Round! Play Again. Score is " +
      score[0] +
      " for you and " +
      score[1] +
      " for the Computer";
    return score;
  } else if (
    (PlayerSelection === "rock" && computerSelection === "scissors") ||
    (PlayerSelection === "scissors" && computerSelection === "paper") ||
    (PlayerSelection === "paper" && computerSelection === "rock")
  ) {
    let result = [score[0] + 1, score[1]];

    div.textContent =
      "You win this Round! " +
      PlayerSelection +
      " beats " +
      computerSelection +
      ". Score is " +
      result[0] +
      " for you and " +
      result[1] +
      " for the Computer";
    return result;
  } else if (
    (PlayerSelection === "rock" && computerSelection === "paper") ||
    (PlayerSelection === "scissors" && computerSelection === "rock") ||
    (PlayerSelection === "paper" && computerSelection === "scissors")
  ) {
    let result = [score[0], score[1] + 1];
    div.textContent =
      "You lose this Round! " +
      computerSelection +
      " beats " +
      PlayerSelection +
      ". Score is " +
      result[0] +
      " for you and " +
      result[1] +
      " for the Computer";
    return result;
  }
}

function checkScore(score) {
  let playerScore = score[0];
  let computerScore = score[1];

  if (playerScore === computerScore) {
    div.textContent = "Even Game. Score is " + playerScore;
  } else if (playerScore > computerScore) {
    div.textContent =
      "Game is over! You win this Game. Your score is " +
      playerScore +
      " against " +
      computerScore;
  } else {
    div.textContent =
      "Game is over! You lose this Game. Your score is " +
      playerScore +
      " against " +
      computerScore;
  }
}
