const options = ["rock","paper","scissors"];
const userchoice = document.getElementById("userchoice");
const computerchoice = document.getElementById("computerchoice");
const result = document.getElementById("result")
const winrate = document.getElementById("winrate")
const losses = document.getElementById("losses")
const tries = document.getElementById("tries")
let useroption = "";
let computeroption = "";
let numberofwins = 0;
let numberoflosses = 0;
function rock(){
    let randomoption = options[Math.floor(Math.random() * options.length)]
    useroption = "rock";
    computeroption = randomoption;
    if (computeroption == "paper"){
        userchoice.innerHTML = "Your choice: " + useroption;
        computerchoice.innerHTML = "Computer choice: " + computeroption;
        result.innerHTML = "You lost ):";
        numberoflosses += 1;
        winrate.innerHTML = "Win rate: " + Math.floor(numberofwins / (numberoflosses + numberofwins) * 100) + "%";
        losses.innerHTML = "Number of losses: " + numberoflosses;
        tries.innerHTML = "Number of tries: " + (numberoflosses + numberofwins)

    } else if  (computeroption == "scissors"){
        userchoice.innerHTML = "Your choice: " + useroption;
        computerchoice.innerHTML = "Computer choice: " + computeroption;
        result.innerHTML = "You Win!! ";
        numberofwins += 1;
        winrate.innerHTML = "Win rate: " + Math.floor(numberofwins / (numberoflosses + numberofwins) * 100) + "%";
        losses.innerHTML = "Number of losses: " + numberoflosses;
        tries.innerHTML = "Number of tries: " + (numberoflosses + numberofwins)
    }else {
        userchoice.innerHTML = "Your choice: " + useroption;
        computerchoice.innerHTML = "Computer choice: " + computeroption;
        result.innerHTML = "It's a tie";

    }


}



function paper(){
    let randomoption = options[Math.floor(Math.random() * options.length)]
    useroption = "paper";
    computeroption = randomoption;
    if (computeroption == "scissors"){
        userchoice.innerHTML = "Your choice: " + useroption;
        computerchoice.innerHTML = "Computer choice: " + computeroption;
        result.innerHTML = "You lost ):";
        numberoflosses += 1;
        winrate.innerHTML = "Win rate: " + Math.floor(numberofwins / (numberoflosses + numberofwins) * 100) + "%"
        losses.innerHTML = "Number of losses: " + numberoflosses
        tries.innerHTML = "Number of tries: " + (numberoflosses + numberofwins)

    } else if  (computeroption == "rock"){
        userchoice.innerHTML = "Your choice: " + useroption;
        computerchoice.innerHTML = "Computer choice: " + computeroption;
        result.innerHTML = "You Win!! ";
        numberofwins += 1;
        winrate.innerHTML = "Win rate: " + Math.floor(numberofwins / (numberoflosses + numberofwins) * 100) + "%"
        losses.innerHTML = "Number of losses: " + numberoflosses
        tries.innerHTML = "Number of tries: " + (numberoflosses + numberofwins)
    }else {
        userchoice.innerHTML = "Your choice: " + useroption;
        computerchoice.innerHTML = "Computer choice: " + computeroption;
        result.innerHTML = "It's a tie";

    }

}
function scissors(){
    let randomoption = options[Math.floor(Math.random() * options.length)]
    useroption = "scissors";
    computeroption = randomoption;
    if (computeroption == "rock"){
        userchoice.innerHTML = "Your choice: " + useroption;
        computerchoice.innerHTML = "Computer choice: " + computeroption;
        result.innerHTML = "You lost ):";
        numberoflosses += 1;
        winrate.innerHTML = "Win rate: " + Math.floor(numberofwins / (numberoflosses + numberofwins) * 100) + "%"
        losses.innerHTML = "Number of losses: " + numberoflosses
        tries.innerHTML = "Number of tries: " + (numberoflosses + numberofwins)

    } else if  (computeroption == "paper"){
        userchoice.innerHTML = "Your choice: " + useroption;
        computerchoice.innerHTML = "Computer choice: " + computeroption;
        result.innerHTML = "You Win!! ";
        numberofwins += 1;
        winrate.innerHTML = "Win rate: " + Math.floor(numberofwins / (numberoflosses + numberofwins) * 100) + "%"
        losses.innerHTML = "Number of losses: " + numberoflosses
        tries.innerHTML = "Number of tries: " + (numberoflosses + numberofwins)
    }else {
        userchoice.innerHTML = "Your choice: " + useroption;
        computerchoice.innerHTML = "Computer choice: " + computeroption;
        result.innerHTML = "It's a tie";

    }

}