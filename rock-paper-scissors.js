let computerPick;
let playerPick;
let playerWin = 0;
let computerWin = 0;
let gamesPlayed = 0;
let rock = "rock";
let paper = "paper";
let scissors = "scissors";

function computerPlay(){
    let randomPick = Math.floor(Math.random() * 3) + 1;
    if (randomPick == 1)
        computerPick = "rock";
    if (randomPick == 2)
        computerPick = "paper";
    if (randomPick == 3)
        computerPick = "scissors"; 

    return computerPick;    
}

computerPlay();

playerPick = prompt("rock, paper, or scissors?");

game();

function playRound(playerPick, computerPick)
{

    if ((playerPick == "rock" && computerPick == "rock") || (playerPick == "paper" &&
        computerPick == "paper") || (playerPick == "scissors" && computerPick == "scissors"))
    {
        console.log("Tie. Please try again.");
        computerPick = computerPlay();
        playerPick = prompt("rock, paper, or scissors?");
        playRound(playerPick, computerPick);
    }

    else if (playerPick == "rock" && computerPick == "scissors")
    {
        console.log("Player wins! Rock beats scissors.");
        playerWin++;
        gamesPlayed++;
    }

    else if (playerPick == "rock" && computerPick == "paper")
    {
        console.log("Computer wins! Paper beats rock.");
        computerWin++;
        gamesPlayed++;
    }

    else if (playerPick == "paper" && computerPick == "scissors")
    {
        console.log("Computer wins! Scissors beats paper.");
        computerWin++;
        gamesPlayed++;
    }

    else if (playerPick == "paper" && computerPick == "rock")
    {
        console.log("Player wins! Paper beats rock.");
        playerWin++;
        gamesPlayed++;
    }

    else if (playerPick == "scissors" && computerPick == "paper")
    {
        console.log("Player wins! Scissors beats paper.");
        playerWin++;
        gamesPlayed++;
    }

    else if (playerPick == "scissors" && computerPick == "rock")
    {
        console.log("Computer wins! Rock beats scissors.");
        computerWin++;
        gamesPlayed++;
    }
}

function game(){
    for (let i = 0; i < 5; i++)
    {
        playRound(playerPick, computerPick);
        console.log("Computer: " + computerWin + " Player: " + playerWin);

        if (gamesPlayed == 5)
        {
            if (playerWin > computerWin)
            {
                console.log("Congrats you win!");
            }

            else if (computerWin > playerWin)
            {
                console.log("You lose. Game over.");
            }
        }
       
        else{
        computerPlay();
        playerPick = prompt("rock, paper, or scissors?");
        }
    }
}
