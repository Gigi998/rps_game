let btnRock = document.querySelector("#rock");
let btnScissors = document.querySelector("#scissors");
let btnPaper = document.querySelector("#paper");
// Score variable
var computerScore = 0;
var playerScore = 0;
let playerSelection = " ";

const container = document.querySelector(".container");
const div = document.createElement("div");
const result = document.createElement("p");

container.appendChild(div);
container.appendChild(result);

btnRock.addEventListener("click", () => { 
    game_on();
    playerSelection = "rock";
    const computerSelection = computerplay();
    playRound(playerSelection, computerSelection);
    game();
})

btnScissors.addEventListener("click", () => {
    game_on();
    playerSelection = "scissors";
    const computerSelection = computerplay();
    playRound(playerSelection, computerSelection);
    game();
})

btnPaper.addEventListener("click", () => {
    game_on();
    playerSelection = "paper";
    const computerSelection = computerplay();
    playRound(playerSelection, computerSelection);
    game();
})

// Computer random choice
function computerplay(){
    var computer = ["rock", "paper", "scissors"];
    var computerMove = computer[Math.floor(Math.random() * computer.length)];
    return computerMove;
}

// PLayer - round winner
function playerWin(){
    playerScore += 1;
    div.textContent = "You win the round! player score: " + playerScore + ", computer score: " + computerScore;      
}

// Computer - round winner
function computerWin(){
    computerScore += 1;
    div.textContent = "You lose the round! player score: " + playerScore + ", computer score: " + computerScore;
}

// Single round logic
function playRound (playerSelection, computerSelection) {
    
    if (playerSelection == "rock" && computerSelection == "paper"){
        return computerWin();
    }else if (playerSelection == "rock" && computerSelection == "scissors"){
        return playerWin();
    }else if (playerSelection == "paper" && computerSelection == "scissors"){
        return computerWin();
    }else if (playerSelection == "paper" && computerSelection == "rock"){
        return playerWin();
    }else if (playerSelection == "scissors" && computerSelection == "paper"){
        return playerWin();
    }else if(playerSelection == "scissors" && computerSelection == "rock"){
        return computerWin();
    }else {
        div.textContent = "It is a tie! player score: " + playerScore + ", computer score: " + computerScore;
        
    }
}

// Main game loop
function game(){
     
    if (computerScore == 5){
        result.textContent = "You lost!";
    }else if (playerScore == 5){
        result.textContent = "You win!";
    }
}
function game_on(){
    if (playerScore == 5){
        playerScore = 0;
        computerScore = 0;
        result.textContent = "";
    }else if (computerScore == 5){
        computerScore = 0;
        playerScore = 0;
        result.textContent = "";
    }
    
}

function restart (){
    playerScore = 0;
    computerScore = 0;
    result.textContent = "";
    div.textContent = "New game"
}



