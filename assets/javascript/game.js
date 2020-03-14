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

document.onkeyup = function (event) {

    console.log(event.key);
    if (alphabet.includes(event.key) && word.includes(event.key)) {
        console.log(word + " contains the letter " + event.key);
    } else {
        console.log(word + " doesn not contain " + event.key);
    }
    
}