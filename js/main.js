// tim hass
// 2018.1.12

var cards = ["queen","queen","king","king"];
var cardsInPlay = [];

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]){
			alert("You found a match!");
		} else {
			alert("Sorry, try Again.")
	}
}

function flipCard(cardId){

	console.log("User flipped " + cardId);
	var currentCard = cards[cardId];
	cardsInPlay.push(currentCard);
	console.log("currentCard = " + currentCard);

	if (cardsInPlay.length === 2){
		checkForMatch();
	}
}

flipCard(0);
flipCard(2);