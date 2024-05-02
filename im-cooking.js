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






