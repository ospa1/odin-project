
const values = ["rock", "paper", "scissors"];
function computerPlay(){
    const cpuVal = Math.floor(Math.random() * 3);
    return values[cpuVal];
}

function playerSelection(){
    return prompt("Enter rock, paper or scissors").toLowerCase();
}

function playRound(playerSelect,cpuSelect){
    if(playerSelect === cpuSelect){
        return 2;
    }
    else if(playerSelect === "rock" && cpuSelect === "scissors"){
        return 1;
    }
    else if(playerSelect ===  "paper" && cpuSelect === "rock"){
        return 1;
    }
    else if(playerSelect === "scissors" && cpuSelect === "paper"){
        return 1;
    }
    else{
        return 0;
    }
}

function scoreResult(result, playerScore, cpuScore){

    if(result == 2){
        playerScore++;
        cpuScore++;
    }
    else if(result == 1){
        playerScore++;
    }
    else{
        cpuScore++;
    }

    if(playerScore == 3 && cpuScore == 3){
        console.log("Game is a Tie!");
        return true;
    }
    else if(playerScore == 3){
        console.log("Player Wins!");
        return true;
    }
    else if(cpuScore == 3){
        console.log("CPU Wins!");
        return true;
    }
    
    console.log(`Score--- Player: ${playerScore} CPU: ${cpuScore}`);
    return false;
}

function game(){

    let playerScore = 0;
    let cpuScore = 0;
    let round = 0;

    while(round < 5){
        let result = playRound(playerSelection(),computerPlay());
        let gameEnd = scoreResult(result, playerScore, cpuScore);
        if(gameEnd) break;
        round++;
    }
}
