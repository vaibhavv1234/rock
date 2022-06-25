console.log("starting rock paper scissors");

let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
function playerPrompt() {
    let playerChoice = prompt("rock, paper or scissors").toLowerCase();
    while ((playerChoice != "rock") && (playerChoice != "paper") && (playerChoice != "scissors")) {
        alert("Please enter in a correct value");
        playerChoice = prompt("rock, paper or scissors");
    }
    return playerChoice;
}

function computerPlay() {
    let options = ["rock", "paper", "scissors"]
    let compChoice = options[Math.floor(Math.random() * 3)];
    return compChoice;
}

// Get both choices, check to see whether Player or Computer wins, return the outcome.
function playRound(playerSelection, computerSelection) {
    
    playerSelection = playerPrompt();
    computerSelection = computerPlay();

    if ( (playerSelection === "rock" && computerSelection === "scissors") || 
    (playerSelection === "paper" && computerSelection === "rock") || 
    (playerSelection === "scissors" && computerSelection === "paper") ) {
        result = `${playerSelection} beats ${computerSelection}. You win!!`;
        playerScore++;
    }
    else if ( (playerSelection === "rock" && computerSelection === "paper") || 
    (playerSelection === "paper" && computerSelection === "scissors") || 
    (playerSelection === "scissors" && computerSelection === "rock") ) {
        result = `${computerSelection} beats ${playerSelection}. You lose!!`;
        computerScore++;
    }
    else if ( (playerSelection === "rock" && computerSelection === "rock") || 
    (playerSelection === "paper" && computerSelection === "paper") || 
    (playerSelection === "scissors" && computerSelection === "scissors") ) {
        result = `Its a tie with ${playerSelection}. It's a tie!`;
    }

    return result;
}

// Play 5 times, tracking the wins for both players but ignoring ties, then show who the overall winner is.
function game() {
    for (let i = 0; (playerScore + computerScore) < 5; i++) {
        console.log(playRound(playerSelection, computerSelection));
        console.log(`The current score is: Player : ${playerScore}, Computer : ${computerScore}.`);
    }
    let winner = (playerScore > computerScore) ? (`You won ${playerScore} to ${computerScore}.`)
    : (`You lose, ${playerScore} to ${computerScore}.`);
    console.log(winner);
}

// Initialise the game and display a farewell message once win conditions are met.
game();   
console.log("Game Over! Reload to play again!!!");