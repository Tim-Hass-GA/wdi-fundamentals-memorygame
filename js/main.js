// tim hass
// 2018.1.12

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

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]){
			alert("You found a match!");
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
	}
}

function clearGame(){

}

function createGameboard(){
	for (var i = 0; i < cards.length; i++){
		var cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
	
	var reset = document.createElement("button");
	reset.textContent = "reset";
	reset.setAttribute("name", "reset");
	reset.className = "instructions";
	reset.addEventListener("click", clearGame);
	document.getElementById("game-board").appendChild(reset);
}

// flipCard(0);
// flipCard(2);
createGameboard();