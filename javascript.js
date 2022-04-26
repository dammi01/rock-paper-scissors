// *** Your game is going to play against the computer, so begin with a function called computerPlay 
// *** that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the 
// *** game to make the computer’s play. Tip: use the console to make sure this is returning the expected 
// *** output before moving to the next step!

//let arr = ["Rock", "Paper", "Scissor"];
            
//function Random_Select() {
//  random_item = arr[Math.floor(Math.random() * arr.length)];
//  console.log(random_item);
//  }

//  Random_Select();

//  *** Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters 
//  *** - the playerSelection and computerSelection - and then return a string that declares the winner of the round 
//  *** like so: "You Lose! Paper beats Rock"

//let arr = ["Rock", "Paper", "Scissor"];
//let playerSelection;
//let computerSelection;

//function Random_Select() {
//  random_item = arr[Math.floor(Math.random() * arr.length)];
//  return random_item;
//	}

//playerSelection = Random_Select();
//console.log("Player ==> ", playerSelection);
//computerSelection = Random_Select();
//console.log("Computer ==> ", computerSelection);

//if (playerSelection == computerSelection) {
//  console.log("Deuce, please try again!");
//} else if (playerSelection == "Rock" && computerSelection == "Scissor") {
//  console.log("You win! Rock beats Scissor."); 
//} else if (playerSelection == "Paper" && computerSelection == "Rock") {
//  console.log("You win! Paper beats Rock.");
//} else if (playerSelection == "Scissor" && computerSelection == "Paper") {
//    console.log("You win! Scissor beats Paper.");
//} else {console.log("You loose!",computerSelection, "beats",playerSelection,".");
//}

//  *** Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK 
//  *** or any other variation).
//  *** Additionally look up for wrong writing at user entry and make a little loop of 5

let arr = ["Rock", "Paper", "Scissor"];
let countPlayer = 0;
let countComputer = 0;

// defines loop for five times 
for (let i = 0; i < 5; i++) {

    // function for random computer select
    function Random_Select() {
        random_item = arr[Math.floor(Math.random() * arr.length)];
        return random_item;
        }

    // receives Player entry and correct Upper and Lower case     
    playerSelection = prompt("Enter your choice ... Rock, Paper or Scissor ==> ");
    firstLetter = playerSelection.charAt(0);
    upperFirstLetter = firstLetter.toUpperCase();
    remaind = playerSelection.slice(1);
    newplayerSelection = upperFirstLetter + remaind.toLowerCase();
    console.log("Player ==> ", newplayerSelection);
    
    // invokes random computer selection
    computerSelection = Random_Select();
    console.log("Computer ==> ", computerSelection);
    
    // verifies if user entry is valid and who wins this round
    if (arr.includes(newplayerSelection)) {
        if (newplayerSelection == computerSelection) {
            console.log("Deuce, please try again!");
        } else if (newplayerSelection == "Rock" && computerSelection == "Scissor") {
            countPlayer = countPlayer +1;
            console.log("You win! Rock beats Scissor."); 
        } else if (newplayerSelection == "Paper" && computerSelection == "Rock") {
            countPlayer = countPlayer +1;
            console.log("You win! Paper beats Rock.");
        } else if (newplayerSelection == "Scissor" && computerSelection == "Paper") {
            countPlayer = countPlayer +1;
            console.log("You win! Scissor beats Paper.");
        } else {console.log("You loose!",computerSelection, "beats",newplayerSelection,".");
            countComputer = countComputer +1;
        }
    } else {console.log("Wrong entry!", newplayerSelection);
    }
    
}
// after finishing the loop show the message with the final count 
console.log("Final count: Player",countPlayer,"x Computer",countComputer);

//  Important note: you want to return the results of this function call, not console.log() them. You’re going 
//  to use what you return later on, so let’s test this function by using console.log to see the results: