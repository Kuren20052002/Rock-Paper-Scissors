const playButton = document.querySelector('#play-button');
const gameChoice = document.querySelectorAll('#game #options .options-img');
const playAgainChoice = document.querySelectorAll('#goodbye #play-again .you-had-fun');

let playerScore = 0;
let computerScore = 0;

playButton.addEventListener('click', toGameScreen);

gameChoice.forEach(function(choice) {
    choice.addEventListener('click', handleGame)
});



playAgainChoice.forEach(function(choice) {
    choice.addEventListener('click', handleEnd)
});

function handleGame(){
        const playerChoice = this.id;
        const computerChoice = getComputerChoice();

        const thisPoint = pointResult(playerChoice, computerChoice);
        const pointResultText = document.querySelector('#point-result');
        switch(thisPoint){
            case 0:
                pointResultText.textContent = `I chose ${computerChoice}, we draw!`;
                updatScoreBoard(playerScore, computerScore);
                break;
            case -1:
                pointResultText.textContent = `I chose ${computerChoice}, you lose!!`;
                computerScore++;
                updatScoreBoard(playerScore, computerScore);
                break;
            default:
                pointResultText.textContent = `I chose ${computerChoice}, i'll get you next point`;
                playerScore++;
                updatScoreBoard(playerScore, computerScore);
                break;     
        };
        
        endGame(playerScore, computerScore);
}

function handleEnd(){
    if(this.id === 'Yes'){
        fadeInAndOut();
        playerScore = 0;
        computerScore = 0;
        updatScoreBoard(playerScore, computerScore);
    }
    else if(this.id === 'No'){
        let overlay = document.createElement('div');
        overlay.setAttribute('id', 'blackout');
        document.body.appendChild(overlay);
        playAgainChoice.forEach((choice) => {
            choice.remove();
        });
    }
}

function toEndScreen(){
    let scrollMark = document.querySelector('#goodbye');
    scrollMark.scrollIntoView({behavior: "smooth"});
}

function toGameScreen(){
    let scrollMark = document.querySelector('#game');
    scrollMark.scrollIntoView({behavior: "smooth"});
}

function randomNumber(min, max){
    if(max < min) return "Try again stupid!";
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputerChoice(){
    //Computer choose randomly between 1 and 3 and the choice get converted to rock, paper, scissors
    switch(randomNumber(1,3)){
        case 1 : return 'rock';
        case 2 : return 'paper';
        default : return 'scissors';
    }
}

function pointResult(playerChoice, computerChoice){
    if(playerChoice === computerChoice) return 0;
    else if(playerChoice === "rock" && computerChoice === "scissors") return 1;
    else if(playerChoice === "paper" && computerChoice === "rock") return 1;
    else if(playerChoice === "scissors" && computerChoice === "paper") return 1;
    else return -1;
}

function updatScoreBoard(playerScore, computerScore){
    const playerScoreBoard = document.querySelector('#game #score-board #your-score');
    const computerScoreBoard = document.querySelector('#game #score-board #my-score');

    playerScoreBoard.textContent = `You: ${playerScore}`;
    computerScoreBoard.textContent = `PC: ${computerScore}`;
}

function endGame(playerScore, computerScore){
    let matchResult = document.querySelector('#goodbye #match-result');
    if(playerScore >= 3 || computerScore >= 3){
        if(playerScore === 3){
            matchResult.textContent = 'You won..'
        }
        else if(computerScore === 3){
            matchResult.textContent = 'YOU LOST!!!!'
        }
        toEndScreen();
    }
}

function fadeInAndOut() {
    let overlay = document.createElement('div');
    overlay.setAttribute('id', 'lightson');
    document.body.appendChild(overlay);

    overlay.offsetWidth;
    overlay.setAttribute('id', 'blackout');

    setTimeout(function() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });

        setTimeout(function() {
            overlay.setAttribute('id', 'lightson');
            setTimeout(function() {
                overlay.remove();
            }, 1000);
        }, 1000); // Adjusted timing to initiate fading out after scrolling
    }, 1000); // Initial delay before scrolling
}  

window.onload = function() {
    window.scrollTo({
        top: 0,
        left: 0
    });
};








