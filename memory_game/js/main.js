var cardInPlay=[];
var cards=["queen","queen","king","king"];
var cardOne=cards[0];
cardInPlay.push(cardOne);
console.log("user flipped "+cardInPlay)
var cardTwo=cards[2];
cardInPlay.push(cardTwo)
console.log("User flipped "+cardInPlay[1])
if (cardInPlay.length===2) {
  if (cardInPlay[0]===cardInPlay[1]) {
    alert("You found a match!")
  } else {
    alert("Sorry, try again.")
  }
}
