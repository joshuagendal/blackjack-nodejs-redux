const Chance = require("chance");
const chance = new Chance();

/*
A function to get n beginning hands for blackjack. Starting hands have 2 cards dealt from deck.
*** arg: n is the number of players
*** returns: an array containing n arrays of one item from cards const
*/
const cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const getBlackjackHands = n => {
  // TODO: throw error if n is 0
  const handsArr = [];
  for (i = 0; i < n; i++) {
    const randomIndexOne = chance.integer({ min: 0, max: 12 });
    const cardOne = cards[randomIndexOne];
    const randomIndexTwo = chance.integer({ min: 0, max: 12 });
    const cardTwo = cards[randomIndexTwo];
    handsArr.push([cardOne, cardTwo]);
  }
  return handsArr;
};

module.exports = {
  getBlackjackHands
};
