function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function getComputerChoice() {
    let number = getRndInteger(1, 3);
    if (number == 1) {
        return "rock";
    } else if (number == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection == computerSelection) {
        return "Draw";
    } 
    if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            return "Computer wins";
        } else {
            return "You win";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "You win";
        } else {
            return "Computer wins";
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            return "You win";
        } else {
            return "Computer wins";
        }
    }
}

function game() {
    let userScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Insert your choice: ");
        let computerSelection = getComputerChoice()
        let output = playRound(playerSelection, computerSelection);
        console.log(output);
        if (output == "You win") {
            userScore = userScore + 1;
        } else {
            computerScore = computerScore + 1;
        }
        console.log("You : " + userScore + " Computer: " + computerScore);
    }
}