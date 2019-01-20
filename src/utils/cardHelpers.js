const Chance = require("chance");
const chance = new Chance();
const CARDS = require("./cards");
const faceCardsArr = ["J", "Q", "K"];

/*
A function to get 2 random cards for blaclkjack hand
args: none
returns: array of cards
*/
const getInitialHand = () => {
  const indexOne = chance.integer({ min: 0, max: 12 });
  const indexTwo = chance.integer({ min: 0, max: 12 });
  const initialCards = [CARDS[indexOne], CARDS[indexTwo]];
  return initialCards;
};

manipulateHandsForStateTree = hands => {
  const newHands = [];
  hands.forEach(hand => {
    numericalCount = getInitialHandNumericalVal(hand);
    newHands.push({
      cards: hand,
      numericalCount
    });
  });
  return newHands;
};

getInitialHandNumericalVal = cards => {
  let cardValArr = [];
  console.log("CARDS: ", cards);
  cards.forEach(card => {
    if (typeof card === "number") {
      cardValArr.push(card);
    } else if (faceCardsArr.includes(card)) {
      cardValArr.push(10);
    } else if (card === "A") {
      cardValArr.push(card);
    }
  });
  if (cardValArr.includes("A") && cardValArr.includes(10)) {
    return 21;
  } else if (cardValArr.includes("A") && cardValArr.includes(10) === false) {
    return undefined;
  }
  return cardValArr[0] + cardValArr[1];
};

module.exports = { getInitialHand, manipulateHandsForStateTree };
