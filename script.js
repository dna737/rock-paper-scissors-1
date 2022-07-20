let playerScore = 0;
let computerScore = 0;
const button1 = document.querySelector('.rock');
const button2 = document.querySelector('.paper');
const button3 = document.querySelector('.scissors');
let yourScore = document.querySelector('.yourScoreValue');
yourScore.textContent = "0";
let compScore = document.querySelector('.compScoreValue');
compScore.textContent = "0";

let playerSelection = "";
let body = document.querySelector('body'); 
let div = document.createElement('div');   
div.setAttribute('align', 'center');
div.style.marginTop = "24px";

button1.addEventListener('click', () =>{
    playerSelection = button1.classList.value;      
    let computerSelection = computerPlay();
    div.textContent = playRound(playerSelection, computerSelection);
    body.appendChild(div);  
});

button2.addEventListener('click', () =>{
    playerSelection = button2.classList.value;
    let computerSelection = computerPlay();
    div.textContent = playRound(playerSelection, computerSelection);
    body.appendChild(div);  
});

button3.addEventListener('click', () =>{
    playerSelection = button3.classList.value;
    let computerSelection = computerPlay();
    div.textContent = playRound(playerSelection, computerSelection);
    body.appendChild(div);  
});





function computerPlay(){
    let randomNumber = randomNum(); //Fetches a random number betweens 0 and 2 (inclusive).  
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
    if(playerScore < 5 && computerScore < 5){
    let pSelection = playerSelection.toUpperCase(); //This takes care of casing problems from the user input.
    if(pSelection == computerSelection.toUpperCase()){
        return "Uh oh! Both the players chose "+ computerSelection;
    }

    switch(pSelection){
        case "ROCK":{
            if(computerSelection.toUpperCase() === ("PAPER")){
                ++computerScore;
                compScore.textContent = computerScore;
                return "You chose " + playerSelection +", and the computer chose " + computerSelection + "\nYou lose! " + computerSelection + " beats " + playerSelection 
            }
            if(computerSelection.toUpperCase() === ("SCISSORS")){
                ++playerScore;
                yourScore.textContent = playerScore;

                return "You chose " + playerSelection +", and the computer chose " + computerSelection +"\nYou win! " + playerSelection + " beats " + computerSelection
            }
            break;
        }
        case "PAPER": {
            if(computerSelection.toUpperCase() === ("ROCK")){
                ++playerScore;
                yourScore.textContent = playerScore;

                return "You chose " + playerSelection +", and the computer chose " + computerSelection +"\nYou win! " + playerSelection + " beats " + computerSelection
            }
            if(computerSelection.toUpperCase() === ("SCISSORS")){
                ++computerScore;
                compScore.textContent = computerScore;

                return "You chose " + playerSelection +", and the computer chose " + computerSelection +"\nYou lose! " + computerSelection + " beats " + playerSelection 
            }
            break;
        }
        case "SCISSORS":{
            if(computerSelection.toUpperCase() === ("ROCK")){
                ++computerScore;
                compScore.textContent = computerScore;

                return "You chose " + playerSelection +", and the computer chose " + computerSelection +"\nYou lose! " + computerSelection + " beats " + playerSelection 
            }
            if(computerSelection.toUpperCase() === ("PAPER")){
                ++playerScore;
                yourScore.textContent = playerScore;
                return "You chose " + playerSelection +", and the computer chose " + computerSelection +"\nYou win! " + playerSelection + " beats " + computerSelection
            }
        }
    }
}else{
    
    if(computerScore > playerScore){
        const refreshPage = document.querySelector('.refresh');
        const refreshButton = document.createElement('button');
        refreshPage.appendChild(refreshButton); 
        refreshButton.addEventListener('click', () => {window.location.reload()});
        return "You lost. Better luck next time!"
    }else{
        const refreshPage = document.querySelector('.refresh');
        refreshPage.setAttribute('display', 'block');
        const refreshButton = document.querySelector('.refreshButton');
        refreshButton.addEventListener('click', () => {window.location.reload()});
        return "You won! Congratulations!" 
    }
}
}


