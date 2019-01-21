const Chance = require("chance");
const chance = new Chance();
const { CARDS, FACE_CARDS } = require("./cards");

/*
A function to get 2 random cards for blackjack hand
args: none
returns: array of cards
*/
const getInitialHand = () => {
  const indexOne = chance.integer({ min: 0, max: 12 });
  const indexTwo = chance.integer({ min: 0, max: 12 });
  const initialCards = [CARDS[indexOne], CARDS[indexTwo]];
  return initialCards;
};

const manipulateHandsForStateTree = hands => {
  const newHands = [];
  hands.forEach(hand => {
    numericalCount = getInitialHandNumericalVal(hand);
    newHands.push({
      cards: hand,
      numericalCount,
      chips: 100
    });
  });
  return newHands;
};

const initialCardNumericalConverter = card => {
  if (typeof card === "number") {
    return card;
  } else if (FACE_CARDS.includes(card)) {
    return 10;
  } else if (card === "A") {
    return card;
  }
};

const initialAceValidation = cardValArr => {
  if (cardValArr.includes("A") && cardValArr.includes(10)) {
    return 21;
  }
  return undefined;
};

// @TODO: seperate lines 33-41 into own function
const getInitialHandNumericalVal = cards => {
  let cardValArr = [];
  cards.forEach(card => {
    cardValArr.push(initialCardNumericalConverter(card));
  });
  if (cardValArr.includes("A")) {
    initialAceValidation(cardValArr);
  }
  return cardValArr[0] + cardValArr[1];
};

module.exports = {
  getInitialHand,
  manipulateHandsForStateTree,
  getInitialHandNumericalVal,
  initialCardNumericalConverter,
  initialAceValidation
};
