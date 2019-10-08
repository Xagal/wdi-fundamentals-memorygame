var cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: 	"images/king-of-diamonds.png"
    }
];

var cardsInPlay = [];
var cardIdInPlay = [];
var score = 0;
//not sure what an async function is quite yet but it allowed the sleep function to work
async function flipCard() {
    var cardId = this.getAttribute("data-id");
    console.log("User flipped " + cards[cardId].rank);
    console.log(cards[cardId].cardImage);
    cardsInPlay.push(cards[cardId].rank);
    cardIdInPlay.push(cardId);


    this.setAttribute("src", cards[cardId].cardImage);

    //found this function on the web so the card flip displays before the alert.
    //only solution I could come up with
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    };
      
    await sleep(300);

    checkMatch()
};

function createBoard() {
    for (let i = 0; i < cards.length; i++) {
        var cardElement = document.createElement("img");
        cardElement.setAttribute("src", "images/back.png");
        cardElement.setAttribute("data-id", i);
        document.getElementById("game-board").appendChild(cardElement);
        cardElement.addEventListener("click", flipCard);
    }
};

function checkMatch() {
    if (cardsInPlay.length === 2) {
        if (cardsInPlay [0] === cardsInPlay[1]) {
            alert("You found a match!");
            //resetting game
            for (x in cardIdInPlay) {
                document.getElementsByTagName("img")[cardIdInPlay[x]].setAttribute("src", "images/back.png");
            }
            cardsInPlay = [];
            cardIdInPlay = [];
            //scoring
            score ++;
            console.log("score: " + score);
            document.getElementById("score").innerHTML = "Score: " + score;
        } else {
            alert("Sorry, try again.");
            //resetting game
            for (x in cardIdInPlay) {
                document.getElementsByTagName("img")[cardIdInPlay[x]].setAttribute("src", "images/back.png");
            }
            cardsInPlay = [];
            cardIdInPlay = [];
        }
    }
}

createBoard();
