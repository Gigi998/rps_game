function computerplay(){
    var computer = ["rock", "paper", "scissors"];
    var computerMove = computer[Math.floor(Math.random() * computer.length)];
    return computerMove;
}

function playRound (playerSelection, computerSelection) {

    if (playerSelection == "rock" && computerSelection == "paper"){
        return("You lose! Paper beats Rock");
    }else if (playerSelection == "rock" && computerSelection == "scissors"){
        return("You win! Rock beats scissors");
    }else if (playerSelection == "paper" && computerSelection == "scissors"){
        return("You lose! Scissors beats paper");
    }else if (playerSelection == "paper" && computerSelection == "rock"){
        return("You win! Paper beats rock");
    }else if (playerSelection == "scissors" && computerSelection == "paper"){
        return("You win!" + playerSelection + " beats " + computerSelection);
    }else if(playerSelection == "scissors" && computerSelection == "rock"){
        return("You lose! Rock beats scissors");
    }else {
        return("It is a tie");
    }
}

const playerSelection1 = "rock";
const playerSelection = playerSelection1.toLowerCase();
const computerSelection = computerplay();
console.log(playRound(playerSelection, computerSelection));

