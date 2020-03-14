var wins = 0;
var losses = 0;
var lettersGuessed = [];
var guessesLeft = 12;
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var directionsText = document.getElementById("directions-text");
var userText = document.getElementById("userchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");

var emptySpot = document.getElementById("empty-spot")
var words = ["belmont", "dracula", "alucard", "death", "medusa", "trevor", "simon", "carmilla", "sypha",
    "grant", "frankenstein", "slogra", "gaibon", "golem", "legion", "mummy", "hector", "isaac"];
var word = words[Math.floor(Math.random() * words.length)];
var lettersLeft = word.length;
var emptyArray = [];
function makeEmptyArray(arr) {


    for (var i = 0; i < arr.length; i++) {
        emptyArray.push('_');
        // emptySpot.textContent("");
    }

    return emptyArray;
}
makeEmptyArray(word);
console.log(word);
console.log(emptyArray);


function gameState() {
    if (!emptyArray.includes("_") && guessesLeft >= 0) {
        console.log("You've won the game!");
        wins += 1;
    } else if (guessesLeft <= -1) {
        console.log("Try harder, loser!")
    }
}

function newWord() {
    word = words[Math.floor(Math.random() * words.length)];
    emptyArray = [];
    lettersGuessed = [];
    guessesLeft = 12;
    makeEmptyArray(word);
}

document.onkeyup = function (event) {

    if (alphabet.includes(event.key) && !lettersGuessed.includes(event.key)) {guessesLeft -= 1}
                            // keeps taking away
    document.getElementById("wins-text").innerHTML = "Wins: " + wins;
    document.getElementById("losses-text").innerHTML = "Losses: " + losses;
    document.getElementById("guesses-left").innerHTML = "Guesses left: " + guessesLeft;

    console.log(event.key);
    if (alphabet.includes(event.key) && word.includes(event.key) && !lettersGuessed.includes(event.key)) {
        console.log(word + " contains the letter " + event.key);
        lettersGuessed.push(event.key);
        var indexes = []
        for (var i = 0; i < word.length; i++) {
            if (word[i] === event.key) {
                indexes.push(i)
            }
        }
        indexes.forEach(function(item) {
            emptyArray.splice(item, 1, event.key);      
        }) 
        gameState();
        console.log(emptyArray);
        console.log(indexes);
        console.log(guessesLeft);

    } else if (lettersGuessed.includes(event.key)) {
        console.log("You've already guessed " + event.key)
        gameState();
    } else {
        console.log(word + " does not contain " + event.key);
        gameState();
    }
    
}