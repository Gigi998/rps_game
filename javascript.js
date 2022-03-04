// Computer random choice
function computerplay(){
    var computer = ["rock", "paper", "scissors"];
    var computerMove = computer[Math.floor(Math.random() * computer.length)];
    return computerMove;
}

// PLayer - round winner
function playerWin(){
    playerScore += 1;
    console.log("You win!");
    console.log("Computer score: " + computerScore);
    console.log("Player score: " + playerScore);
}

// Computer - round winner
function computerWin(){
    computerScore += 1;
    console.log("You lose!")
    console.log("Computer score: " + computerScore);
    console.log("Player score: " + playerScore);
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
        console.log("It's a tie!")
        console.log("COmputer score: " + computerScore);
        console.log("Player score: " + playerScore);
        return("It is a tie");
    }
}

// Score variable
var computerScore = 0;
var playerScore = 0;

// Main game loop
function game(){
    for (var i = 0; i < 5; i++){
        var playerSelection = prompt("What is your choice?");
        const computerSelection = computerplay();
        playRound(playerSelection, computerSelection);
    }
    if (computerScore > playerScore){
        console.log("You lose the game");
    }else if (playerScore > computerScore){
        console.log("You win the game");
    }else{
        console.log("No winner")
    }
}

game();
