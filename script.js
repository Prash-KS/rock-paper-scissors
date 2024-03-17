function getComputerChoice() {
    let randomComputerSelection = Math.floor(Math.random()*3);
    let computerSelection;
    if(randomComputerSelection === 0) {
        computerSelection = "rock"
    }
    else if(randomComputerSelection === 1) {
        computerSelection = "paper"
    }
    else if(randomComputerSelection === 2) {
        computerSelection = "scissor"
    }

    document.querySelector("#computerChoice").textContent = "Computer Selected " + computerSelection;
    return computerSelection;
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
    let finalScore;
    if(playerScore > computerScore) {
        finalScore = "Final Score: You Win!"
    }
    else if(playerScore < computerScore) {
        finalScore = "Final Score: You Lose!"
    }
    else {
        finalScore = "Final Score: It's a Tie"
    }
    document.querySelector("#finalScore").textContent = finalScore;
    return finalScore;
}

function resetScore() {
    document.querySelector("#playerScore").textContent = 0;
    document.querySelector("#computerScore").textContent = 0;
    document.querySelector("#finalScore").textContent = "";
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    let buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            if(playerScore===5 || computerScore===5) {
                playerScore = 0;
                computerScore = 0;
                resetScore();
            }

            let playerSelection = e.target.id;

            let computerSelection = getComputerChoice();
            let roundScore = playRound(playerSelection, computerSelection);
            
            if(roundScore === `You Win! ${playerSelection} beats ${computerSelection}`) {
                playerScore++;
                document.querySelector("#playerScore").textContent = playerScore;
            }
            else if(roundScore === `You Lose! ${computerSelection} beats ${playerSelection}`) {
                computerScore++;
                document.querySelector("#computerScore").textContent = computerScore;
            }

            document.querySelector("#roundScore").textContent = roundScore;
            console.log(roundScore); //delete
            

            if(playerScore===5 || computerScore===5) {
                getFinalScore(playerScore, computerScore);
            }
        });
    });
}

playGame();