const Chance = require("chance");
const chance = new Chance();
const CARDS = require("./cards");

const getInitialHand = () => {
  const indexOne = chance.integer({ min: 0, max: 12 });
  const indexTwo = chance.integer({ min: 0, max: 12 });
  const initialCards = [CARDS[indexOne], CARDS[indexTwo]];
  return initialCards;
};

module.exports = { getInitialHand };
