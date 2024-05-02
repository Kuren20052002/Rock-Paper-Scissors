function randomNumber(min, max){
    if(max < min) return "Try again stupid!";
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputerChoice(){
    switch(randomNumber(1,3)){
        case 1 : return 'rock';
        case 2 : return 'paper';
        default : return 'scissors';
    }
}

function pointResult(user_choice, computer_choice){
    if(user_choice === computer_choice) return 0;
    else if(user_choice === "rock" && computer_choice === "scissors") return 1;
    else if(user_choice === "paper" && computer_choice === "rock") return 1;
    else if(user_choice === "scissors" && computer_choice === "paper") return 1;
    else return -1;
}






