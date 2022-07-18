let playerScore;
let computerScore;
console.log("Hey, you. You're finally awake. Type \"game()\" to start wasting your time.")

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
    let pSelection = playerSelection.toUpperCase(); //This takes care of casing problems from the user input.
    if(pSelection == computerSelection.toUpperCase()){
        return "Uh oh! Both the players chose "+ computerSelection + "\nYour score: " + playerScore + ". Computer's score: " + computerScore;
    }

    switch(pSelection){
        case "ROCK":{
            if(computerSelection.toUpperCase() === ("PAPER")){
                ++computerScore;
                return "You chose " + playerSelection +", and the computer chose " + computerSelection + "\nYou lose! " + computerSelection + " beats " + playerSelection + "!\nYour score: " + playerScore + ". Computer's score: " + computerScore;
            }
            if(computerSelection.toUpperCase() === ("SCISSORS")){
                ++playerScore;
                return "You chose " + playerSelection +", and the computer chose " + computerSelection +"\nYou win! " + playerSelection + " beats " + computerSelection +  "!\nYour score: " + playerScore + ". Computer's score: " + computerScore;
            }
            break;
        }
        case "PAPER": {
            if(computerSelection.toUpperCase() === ("ROCK")){
                ++playerScore;
                return "You chose " + playerSelection +", and the computer chose " + computerSelection +"\nYou win! " + playerSelection + " beats " + computerSelection +  "!\nYour score: " + playerScore + ". Computer's score: " + computerScore;
            }
            if(computerSelection.toUpperCase() === ("SCISSORS")){
                ++computerScore;
                return "You chose " + playerSelection +", and the computer chose " + computerSelection +"\nYou lose! " + computerSelection + " beats " + playerSelection + "!\nYour score: " + playerScore + ". Computer's score: " + computerScore;
            }
            break;
        }
        case "SCISSORS":{
            if(computerSelection.toUpperCase() === ("ROCK")){
                ++computerScore;
                return "You chose " + playerSelection +", and the computer chose " + computerSelection +"\nYou lose! " + computerSelection + " beats " + playerSelection + "!\nYour score: " + playerScore + ". Computer's score: " + computerScore;
            }
            if(computerSelection.toUpperCase() === ("PAPER")){
                ++playerScore;
                return "You chose " + playerSelection +", and the computer chose " + computerSelection +"\nYou win! " + playerSelection + " beats " + computerSelection +  "!\nYour score: " + playerScore + ". Computer's score: " + computerScore;
            }
        }
    }
}

function game(){
    playerScore = 0;
    computerScore = 0;
    console.log("Welcome to a not-so-fun version of ROCK PAPER SCISSORS! First to 5 wins!")
    while(playerScore != 5 && computerScore != 5){
        const playerSelection = prompt("Choose your weapon!");
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        
    }
    if(playerScore > computerScore){
        console.log("Congratulations! You win!");
    }
    else if(playerScore < computerScore){
        console.log("Oops! You lost :(");
    }
    else{
        console.log("It's a draw!");
    }
    console.log("Thanks for playing! Please type \"game()\" to start a new match!");

}


