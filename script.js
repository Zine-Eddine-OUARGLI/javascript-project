console.log("Hello World!");
console.log(Math.random());

function getComputerChoice () {
    let a = Math.random();
    if (a<(1/3)){
        return "R";
    }
    else if (a<(2/3)){
        return "P";
    }
    else{
        return "S"
    }
}

console.log(getComputerChoice());


function getHumanChoice (){
    let choice = prompt("Choose an answer between rock (R), paper (P) or scissors (S)");
    while(choice == null || choice == ""){
        choice = prompt("Please do enter a valid answer between the three choices given");
    }
    return choice.toUpperCase();
}

console.log(getHumanChoice());