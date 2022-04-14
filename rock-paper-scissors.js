const rock = 1;
const paper = 2;
const scissors = 3;

function computerPlay(){
    var computerPick = Math.floor(Math.random() * 3) + 1;
    if (computerPick == 1)
        return "rock";
    if (computerPick == 2)
        return "paper";
    if (computerPick == 3)
        return "scissors"; 
}

console.log("The computer picks " + computerPlay());

