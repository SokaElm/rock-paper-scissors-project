function getComputerChoice() {
  // get random index value
  const randomIndex = Math.floor(Math.random() * 3);

  // get random item
  const array = ["rock", "paper", "scissors"];
  const computerChoice = array[randomIndex];

  return computerChoice;
}

function playRound(lowerPlayerSelection, computerSelection, score) {
  if (lowerPlayerSelection === computerSelection) {
    alert("Even Round! Play Again");
    let result = score;
    return result;
  } else if (
    (lowerPlayerSelection === "rock" && computerSelection === "scissors") ||
    (lowerPlayerSelection === "scissors" && computerSelection === "paper") ||
    (lowerPlayerSelection === "paper" && computerSelection === "rock")
  ) {
    alert(
      "You win this Round! " +
        lowerPlayerSelection +
        " beats " +
        computerSelection
    );
    let result = [score[0] + 1, score[1]];
    return result;
  } else if (
    (lowerPlayerSelection === "rock" && computerSelection === "paper") ||
    (lowerPlayerSelection === "scissors" && computerSelection === "rock") ||
    (lowerPlayerSelection === "paper" && computerSelection === "scissors")
  ) {
    alert(
      "You lose this Round! " +
        computerSelection +
        " beats " +
        lowerPlayerSelection
    );
    let result = [score[0], score[1] + 1];
    return result;
  }
}

function checkPlayerSelection(playerSelection) {
  if (
    playerSelection.toLowerCase() !== "rock" &&
    playerSelection.toLowerCase() !== "paper" &&
    playerSelection.toLowerCase() !== "scissors"
  ) {
    let playerSelection = prompt(
      "We didn't understand your choice. Choose between paper, rock or scissors"
    );
    return checkPlayerSelection(playerSelection);
  } else {
    return (lowerPlayerSelection = playerSelection.toLowerCase());
  }
}

let score = [0, 0];

function playGame() {
  for (let i = 1; i <= 5; i++) {
    let playerSelection = prompt("Choose between paper, rock or scissors");
    let lowerPlayerSelection = checkPlayerSelection(playerSelection);
    let computerSelection = getComputerChoice();

    score = playRound(lowerPlayerSelection, computerSelection, score);

    if (score[0] === 3 || score[1] === 3) {
      break;
    }
  }

  let playerScore = score[0];
  let computerScore = score[1];

  if (playerScore === computerScore) {
    return alert("Even Game. Play Again");
  } else if (playerScore > computerScore) {
    return alert(
      "Game is over! You win this Game. Your score is " +
        playerScore +
        " against " +
        computerScore
    );
  } else {
    return alert(
      "Game is over! You lose this Game. Your score is " +
        playerScore +
        " against " +
        computerScore
    );
  }
}

playGame();
