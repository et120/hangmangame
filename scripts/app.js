//Someone thinks of a word and we keep it secret from the other players
//We will display a series of underscores depending on the length of the work
//Each turn the player will guess 1 letter from the word
//If guess is correct we will display the letter in the blank word
//If incorrect we draw a piece of the hangman OR tell the user they have X amount of guesses left
//Add incorrect guess to a div
//Start button
//Replay button

//We'll need an ID for: 
//Start button
//Replay button
//SecretWord
//Wrong guesses
//Hangman
//Guess / Input

//ID Section

let startBtn = document.getElementById("startBtn");
let restartBtn = document.getElementById("restartBtn");

let secretWord = document.getElementById("secretWord");
let wrongGuesses = document.getElementById("wrongGuesses");
let hangMan = document.getElementById("hangMan");
let userInput = document.getElementById("userInput");