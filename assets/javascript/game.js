var alphabetArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n",
"o","p","q","r","s","t","u","v","w","x","y","z"];


var wins = 0;

var losses = 0;

var guessesLeft = 10;

// defines an array to hold users guesses each play round
var guessesSoFar = [];


 // tells the computer to pick a random letter from the alphabetArray
var computerChoice = alphabetArray[Math.floor(Math.random() * alphabetArray.length)];

	console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + 
		" Guesses so far: " + guessesSoFar + " Computer picked: " + computerChoice);



 // Starts listening for events, when the user presses a key, it will run the following function...
	document.onkeyup = function(event) {
    
// recorded in "userGuess" and saves in lowercase
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

// checks to see if it is actually a letter and is not a duplicate choice by the user
// by comparing it to "guessesSoFar" array and comparing against the "alphabetLetters" array
	if (guessesSoFar.indexOf(userGuess) < 0 && alphabetArray.indexOf(userGuess) >= 0) {

		// adds the users guess to the array of "guessesSoFar"
		guessesSoFar.push(userGuess);

		// if it is a new letter it decreases "guessesLeft" by 1
		guessesLeft--;
	}
    				
    if (userGuess == computerChoice){

        wins++;
        // resets "guessesLeft" after the win
        guessesLeft = 10;
        // empties the "guessesSoFar" array
        guessesSoFar = [];
        // and computer chooses a new letter for next round
        computerChoice = alphabetArray[Math.floor(Math.random() * alphabetArray.length)];
    
    }

    if (guessesLeft == 0){

        losses++;
        // resets everything same as above, seems like WET code, maybe there is a better way?
        guessesLeft = 10;
        guessesSoFar = [];
        computerChoice = alphabetArray[Math.floor(Math.random() * alphabetArray.length)];
    }

    


    

    console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + 
    	" Guesses so far: " + guessesSoFar + " Computer picked: " + computerChoice);
  

    // Displaying progress to HTML
	var html = "<h1>The Psychic Game</h1><br><br>" + "<h2>Guess what letter I'm thinking of...</h2><br><br>" + "<h3>Wins: " + wins + "<br><br></h3>" + "<h3>Losses: " + losses + "</h3>" + "<br><br><h3>Guesses Left: " + guessesLeft + "<br><br></h3>" + "<h3>Your guesses so far: " + guessesSoFar.join(', ') + "</h3>";
	// place html into the game ID
	document.querySelector("#game").innerHTML = html;
}
   