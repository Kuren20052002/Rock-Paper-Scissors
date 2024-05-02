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

function RockPaperScissors(){
    let playGame = true;
    while(playGame){
        let points_to_win = +prompt("What's the number of points needed to win?", "1");

        while(isNaN(points_to_win) || points_to_win < 1){
            points_to_win = +prompt("Not valid, try again.", "1")
        }
        while(points_to_win > 9){
            if(confirm(`Are you sure? \n${points_to_win} is a lot of points to play.`)  === true){
                break;
            }
            else points_to_win = +prompt("What's the number of points needed to win?", "preferably less than 10");
        }

        let user_score = 0;
        let computer_score = 0;

        while(user_score < points_to_win && computer_score < points_to_win){
            let user_choice = prompt("What will you choose?", "Rock, Paper or Scissors").toLowerCase().trim();
            while(user_choice !== "rock" && user_choice !== "paper" && user_choice !== "scissors"){
                user_choice = prompt("Not a valid options, please choose again", "Rock, Paper or Scissors").toLowerCase().trim();
            }

            let computer_choice = getComputerChoice();
            let point_result = pointResult(user_choice, computer_choice);
            
            if(point_result > 0){
                user_score++;
                alert(`The computer choose ${computer_choice}, you won a point! \nCurrent score ${user_score} : ${computer_score}`);
            }
            else if(point_result < 0 ){
                computer_score++;
                alert(`The computer choose ${computer_choice}, too bad \nCurrent score ${user_score} : ${computer_score}`);
            }
            else alert(`The computer choose ${computer_choice}, a tie! \nCurrent score ${user_score} : ${computer_score}`);
        }

        if(user_score === points_to_win){
            let win_text = "Congrats, you won! \nPlay again?";
            if(confirm(win_text) === false){
                alert("Bye Bye!");
                playGame = false;
            }
        }
        else if(computer_score === points_to_win){
            let lose_text = "You lose\nPlay again to get good?";
            if(confirm(lose_text) === false){
                alert("Let's get good another day.");
                playGame = false;
            }
        }
    }
}






