// tim hass
// 2018.1.14

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
	cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];
var playersScore = 0;

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]){
			alert("You found a match!");
			playersScore += 1;
			//console.log(playersScore);
			document.querySelector(".gameTotal").innerHTML = playersScore;

		} else {
			alert("Sorry, try Again.")
	}
}

function flipCard(){
	var cardId = this.getAttribute("data-id");
	// console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	// console.log(cards[cardId].suit);
	// console.log(cards[cardId].cardImage);
	this.setAttribute("src", cards[cardId].cardImage)

	if (cardsInPlay.length === 2){
		checkForMatch();
	} else if (cardsInPlay.length > 2) {
		alert("We need to reset the game.");
		clearGame();
	} 
}

function clearGame(){
	var resetCards = document.querySelectorAll("img");
	for (var i = 0; i < resetCards.length; i++){
		resetCards[i].setAttribute("src", "images/back.png");
	}
	// empty the cardsInPlay array
		cardsInPlay = [];
}

function createGameboard(){
	for (var i = 0; i < cards.length; i++){
		var cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}

	var gameTotal = document.createElement("p");
	gameTotal.className = "gameTotal";
	gameTotal.textContent = playersScore;
	document.getElementById("game-board").appendChild(gameTotal);

	var reset = document.createElement("button");
	reset.textContent = "reset";
	reset.setAttribute("name", "reset");
	reset.className = "instructions";
	reset.addEventListener("click", clearGame);
	document.getElementById("game-board").appendChild(reset);

}

//initate the createGameboard function
createGameboard();