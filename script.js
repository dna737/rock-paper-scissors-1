console.log("Welcome to a not-so-fun version of ROCK PAPER SCISSORS!")
const playerSelection = prompt("Choose your weapon!");
const computerSelection = computerPlay();
let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    let randomNumber = randomNum(); //Fetches a random number between 0 and 2 (inclusive).  
    if(randomNumber == 0){
        return "Rock";
    }else if(randomNumber == 1){
        return "Paper";
    }else{
        return "Scissors";
    }
}

function randomNum(){
    //We're not passing any arguments to this function because we only want 0, 1, and 2 to be returned whenever this function is called.
    return Math.floor(Math.random() * 3);
}


function playRound(playerSelection, computerSelection){
    if(playerSelection.equalsIgnoreCase(computerSelection)){
        return "Uh oh! It's a TIE!";
    }

    if(playerSelection.equalsIgnoreCase("Rock")){
        if(computerSelection.equalsIgnoreCase("Scissors")){
            ++playerScore;
            return playerSelection
        }
    }
}

function game(){
    for(let i = 0; i < 5; i++){
        console.log(playRound(playerSelection, computerSelection));
    }
}