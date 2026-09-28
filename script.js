//Human Logic
function getHumanChoice(){
    return (us_input = prompt("Write an option: rock || paper || scissors"))
}


// Computer Logic
function getComputerChoice(max){
    if(Math.floor(Math.random() * max) == 0){
        return "rock"
    }else if(Math.floor(Math.random() * max) == 1){
        return "paper"
    }else{
        return "scissors"
    }
}


function playGame(){

//Scores
let humanScore= 0;
let computerScore= 0;   
    
    function playRound(humanChoice,computerChoice){ 
        //Human win conditions
        if(humanChoice === "rock" && computerChoice == "scissors"){
            console.log("Human wins! Rock beats Scissors")

            humanScore ++
            console.log(`Scores: Computer score: ${computerScore} || Human score: ${humanScore}`)
        }else if(humanChoice === "paper" && computerChoice == "rock"){
            console.log("Human wins! Paper beats Rock")

            humanScore ++
            console.log(`Scores: Computer score: ${computerScore} || Human score: ${humanScore}`)
        }else if(humanChoice === "scissors" && computerChoice == "paper"){
            console.log("Human wins! Scissors beats Paper")

            humanScore ++
            console.log(`Scores: Computer score: ${computerScore} || Human score: ${humanScore}`)
        }


        //Computer win conditions
        if(computerChoice === "rock" && humanChoice == "scissors"){
            console.log("Computer wins! Rock beats Scissors")

            computerScore ++
            console.log(`Scores: Computer score: ${computerScore} || Human score: ${humanScore}`)
        }else if(computerChoice === "paper" && humanChoice == "rock"){
            console.log("Computer wins! Paper beats Rock")

            computerScore ++
            console.log(`Scores: Computer score: ${computerScore} || Human score: ${humanScore}`)
        }else if(computerChoice === "scissors" && humanChoice == "paper"){
            console.log("Computer wins! Scissors beats Paper")

            computerScore ++
            console.log(`Scores: Computer score: ${computerScore} || Human score: ${humanScore}`)
        }

        //Draw conditions 
        if(humanChoice === "rock" && computerChoice == "rock"){
            console.log("DRAW")
        }else if(humanChoice === "paper" && computerChoice == "paper"){
            console.log("DRAW")
        }else if(humanChoice === "scissors" && computerChoice == "scissors"){
            console.log("DRAW")
        }

    }

    for (let round=1; round<=5; round++) {        
        console.log(`Round ${round}:`); 
        playRound(getHumanChoice(),getComputerChoice());
    }

    if(humanScore > 5){
        console.log("The player wins!")
    }else if (computerScore > 5)(
        console.log("The computer wins!")
    )


}
    


playGame()