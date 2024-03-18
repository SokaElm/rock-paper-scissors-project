function getComputerChoice() {

    // get random index value
    const randomIndex = Math.floor(Math.random() * 3);

    // get random item
    const array=["rock","paper","scissors"];
    const computerChoice = array[randomIndex];

    return computerChoice;
}

function playRound(playerSelection, computerSelection,score) {
    let lowerPlayerSelection = playerSelection.toLowerCase();
    let lowerComputerSelection = computerSelection.toLowerCase();
        
    if (lowerPlayerSelection===lowerComputerSelection) {
        alert("Even Round! Play Again");
        let result = score;
        return result;
    } else if 
    ((lowerPlayerSelection==="rock"&&lowerComputerSelection==="scissors")||
    (lowerPlayerSelection==="scissors"&&lowerComputerSelection==="paper")||
    (lowerPlayerSelection==="paper"&&lowerComputerSelection==="rock")) {
        alert("You win this Round! " + playerSelection + " beats "+ computerSelection);
        let result = [score[0]+1,score[1]];
        return result;

    } else if 
    ((lowerPlayerSelection==="rock"&&lowerComputerSelection==="paper") ||
    (lowerPlayerSelection==="scissors"&&lowerComputerSelection==="rock") ||
    (lowerPlayerSelection==="paper"&&lowerComputerSelection==="scissors")) {
        alert("You lose this Round! " + computerSelection + " beats "+ playerSelection);
        let result = [score[0],score[1]+1];
        return result;
    }
    }
  
let score =[0,0];

function playGame() {
       
    for (let i = 1 ; i<=5; i++) {
    let playerSelection = prompt("Choose between paper, rock or scissors");
    let computerSelection = getComputerChoice();
    score = playRound(playerSelection, computerSelection,score);
    
     if (score[0]===3||score[1]===3) {
        break;
    }
    }

    let playerScore = score[0];
    let computerScore = score[1];

    if (playerScore === computerScore) {
        return alert("Even Game. Play Again");
    } else if (playerScore > computerScore) {
        return alert("Game is over! You win this Game. Your score is " +playerScore+ " against " + computerScore);
    } else {
        return alert("Game is over! You lose this Game. Your score is " +playerScore+ " against " + computerScore);
    }
}

playGame();
