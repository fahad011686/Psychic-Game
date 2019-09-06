var alf = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var compIndex = Math.floor(Math.random() * alf.length)
var compChoice = alf[compIndex];

console.log("Secret answer is: " + compChoice);




document.onkeyup = function (event) {
    var letter = event.key.toLowerCase();
    console.log(letter);
    var change = document.querySelector("#change");
    change.innerHTML = letter;

    if (letter === compChoice) {
        alert(compChoice.toUpperCase() + " is right, You Won!");
    }
    else {
        alert(letter.toUpperCase() + " is wrong, Try Again!");
    }
}