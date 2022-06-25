console.log("starting rock paper scissors");

let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
const rockButton = document.querySelector('#rock')
const paperButton = document.querySelector('#paper')
const scissorsButton = document.querySelector('#scissors')
const container = document.querySelector('.container');

function computerPlay() {
    let options = ["rock", "paper", "scissors"]
    let compChoice = options[Math.floor(Math.random() * 3)];
    return compChoice;
}
const para = document.querySelector("#para")
function playRound(playerSelection, computerSelection) {
    
    
    computerSelection = computerPlay();
    if (playerScore >= 5 || computerScore >= 5) {
        if (playerScore > computerScore) {
            para.textContent = `You Won ${playerScore} - ${computerScore}`;
        }
        else if (playerScore == computerScore) {
            para.textContent = `It was a tie between ${playerScore}`;
        }
        else {
            para.textContent = `You lost ${playerScore} - ${computerScore}`
        }
        return;
    }
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
    container.textContent = `${playerScore} - ${computerScore}`;
    para.textContent = result;
    
}

// Play 5 times, tracking the wins for both players but ignoring ties, then show who the overall winner is.

rockButton.addEventListener('click', () => {
    playerSelection = 'rock';
    console.log(playRound(playerSelection, computerSelection));
});
paperButton.addEventListener('click', () => {
    playerSelection = 'paper';
    console.log(playRound(playerSelection, computerSelection));
});
scissorsButton.addEventListener('click', () => {
    playerSelection = 'scissors';
    console.log(playRound(playerSelection, computerSelection));
});


