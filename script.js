//console.log("Hello World!");
//console.log(Math.random());

function getComputerChoice () {
    let a = Math.random();
    if (a<(1/3)){
        return "rock";
    }
    else if (a<(2/3)){
        return "paper";
    }
    else{
        return "scissors"
    }
}

//console.log(getComputerChoice());


function getHumanChoice (){
    let choice = prompt("Choose an answer between rock, paper or scissors");
    while(choice == null || choice == ""){
        choice = prompt("Please do enter a valid answer between the three choices given");
    }
    return choice.toLowerCase();
}

//console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice){
    if (humanChoice !== "rock"){
        if(humanChoice !== "paper"){
            if(humanChoice !== "scissors"){
                console.log("Please enter a valid input out of the ones given, replay a round!");
                return
            }
        }
    }
    if(humanChoice === computerChoice){
        console.log("Draw! Nobody wins. Replay a round.");
    }
    else if(humanChoice === "rock"){
        if(computerChoice === "scissors"){
            console.log("You win! " + humanChoice + " beats " + computerChoice +"!");
            humanScore += 1;
        }
        else {
            console.log("You lose! " + computerChoice + " beats " + humanChoice +"!");
            computerScore += 1;
        }
    }
    else if(humanChoice === "paper"){
        if(computerChoice === "rock"){
            console.log("You win! " + humanChoice + " beats " + computerChoice +"!");
            humanScore += 1;
        }
        else {
            console.log("You lose! " + computerChoice + " beats " + humanChoice +"!");
            computerScore += 1;
        }
    }
    else if(humanChoice === "scissors"){
        if(computerChoice === "paper"){
            console.log("You win! " + humanChoice + " beats " + computerChoice +"!");
            humanScore += 1;
        }
        else {
            console.log("You lose! " + computerChoice + " beats " + humanChoice +"!");
            computerScore += 1;
        }
    }

}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
