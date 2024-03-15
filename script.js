function getPlayerChoice() {
    let playerSelection = prompt("Enter 'Rock', 'Paper' Or 'Scissor'").toLowerCase();
    if(playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissor") {
        console.log("Invalid Choice!");
        playerSelection = "invalid";
    }
    return playerSelection;
}

function getComputerChoice() {
    let computerSelection = Math.floor(Math.random()*3);
    if(computerSelection === 0) {
        return "rock";
    }
    else if(computerSelection === 1) {
        return "paper";
    }
    else if(computerSelection === 2) {
        return "scissor";
    }
        
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === "rock" && computerSelection === "scissor" ||
    playerSelection === "scissor" && computerSelection === "paper" ||
    playerSelection === "paper" && computerSelection === "rock") {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else if(playerSelection === computerSelection) {
        return "It's a Tie!"
    }
    else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function getFinalScore(playerScore, computerScore) {
    if(playerScore > computerScore) {
        return "Final Score: You Win!"
    }
    else if(playerScore < computerScore) {
        return "Final Score: You Lose!"
    }
    else {
        return "Final Score: It's a Tie"
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    for(let i=0; i<5; i++) {
        let playerSelection = getPlayerChoice();
        if(playerSelection === "invalid") {
            return;
        }
        let computerSelection = getComputerChoice();
        let roundScore = playRound(playerSelection, computerSelection);
        
        if(roundScore === `You Win! ${playerSelection} beats ${computerSelection}`) {
            console.log(roundScore);
            playerScore++;
        }
        else if(roundScore === `You Lose! ${computerSelection} beats ${playerSelection}`) {
            console.log(roundScore);
            computerScore++;
        }
        else {
            console.log(roundScore);
        }
    }
    let finalScore = getFinalScore(playerScore, computerScore);
    console.log(finalScore);
}

playGame();