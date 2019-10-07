var card = [" king", " king", " queen", " queen"];
var cardsInPlay = [];
var cardOne = card[0];
cardTwo = card[2];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
console.log("User flipped" + cardsInPlay);
if (cardsInPlay.length === 2) {
    if (cardsInPlay [0] === cardsInPlay[1]) {
        alert("You found a match!")
    } else {
        alert("Sorry, try again.")
    }
}