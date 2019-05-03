let wins = 0 
let losses = 0 
let ties = 0   

// this function 
// 1. returns "rock"/"paper"/"scissors" absed on a random integer 
// 2. updates the number of wins/ties/losses displayed on the website
function updateScore (result) {
    //result one of "won" or "tied" or "lost" 
    if (result === "won") {
        wins = wins + 1; 
        document.getElementById("wins").innerHTML = wins;
    }
if (result === "tied") {
    ties = ties +1; 
    document.getElementById("ties").innerHTML = ties;
}
if (result === "lost") {
    losses = losses + 1 
    document.getElementById("losses").innerHTML = losses;
}
}




function computersMove() {
    let randInt = Math.floor(Math.random()*3) //generate betweem 0,1,2
    if (randInt === 0) {
    return "rock";
    } 
    if (randInt === 1) {
        return "paper";
    } 
    if (randInt ===2) {
        return "scissors"
    }
} 

function onClickRock() {
    let cm = computersMove ();
    if (cm === "rock") {
        //tied 
        updateScore("tied");
        alert("The computer picked rock. That means you tied!");
    }
    if (cm === "paper"){
        //lost 
        updateScore("lost");
        alert("The computer pciked paper. That means you lost!");
    } 
    if (cm === "scissors") {

    // won 
    updateScore("won");
    alert("The computer picked scissors. That means you won!");
}  
} 
function onClickPaper() {
    let cm = computersMove ();
    if (cm === "paper") {
        //tied 
        updateScore("tied");
        alert("The computer picked paper. That means you tied!");
    }
    if (cm === "scissors"){
        //lost 
        updateScore("lost");
        alert("The computer pciked scissors. That means you lost!");
    } 
    if (cm === "rock") {

    // won 
    updateScore("won");
    alert("The computer picked rock. That means you won!");
}  
} 
function onClickScissors() {
    let cm = computersMove ();
    if (cm === "scissors") {
        //tied 
        updateScore("tied");
        alert("The computer picked scissors. That means you tied!");
    }
    if (cm === "rock"){
        //lost 
        updateScore("lost");
        alert("The computer pciked rock. That means you lost!");
    } 
    if (cm === "paper") {

    // won 
    updateScore("won");
    alert("The computer picked paper. That means you won!");
}  
} 
document.getElementById("rock").onclick = onClickRock; 
document.getElementById("scissors").onclick = onClickScissors; 
document.getElementById("paper").onclick = onClickPaper