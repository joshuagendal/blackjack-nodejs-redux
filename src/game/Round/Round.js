const sleep = require("sleep");
const Game = require("../Game/Game");
const {
  getNPlayerBets
} = require("../../userCommunication/promptUser/promptUser");
const { print } = require("../../userCommunication/print/print");
const { getRandomCard } = require("../../utils/cardHelpers");
const { store } = require("../../store");
const { setInitialHand } = require("../../store/hand/actions");

class Round extends Game {
  constructor(nPlayers, currentBets) {
    super(nPlayers);
    this.currentBets = currentBets;
  }

  beginRound() {
    this.getPlayerBets(this.nPlayers)
      .then(bets => {
        this.dealPlayers();
      })
      .catch(err => console.log(err));
  }

  /*
  A function to run the promptly function to get player bets, set this result to class variable playerBets
  ... the chip value for each round of bets will be stored as a local construct variable. At the end of each round,
  redux actions will be dispatched to the chips reducer to add or subtract the amount of the bet
  */
  getPlayerBets(n) {
    return getNPlayerBets(n)
      .then(bets => {
        this.currentBets = bets;
        return bets;
      })
      .catch(err => console.log(err));
  }

  dealPlayers() {
    const nPlayers = this.nPlayers;
    const hands = [];
    let i;
    for (i = 0; i < nPlayers; i++) {
      const playerHand = this.dealSinglePlayer(i);
      hands.push(playerHand);
    }
    return store.dispatch(setInitialHand(hands));
  }

  dealSinglePlayer(player) {
    const hand = [];
    const playerNum = player + 1;

    print(`Player ${playerNum}:\n\n`);
    sleep.msleep(750);

    const firstCard = getRandomCard();
    hand.push(firstCard);
    print(`${firstCard}`);
    sleep.msleep(750);

    const secondCard = getRandomCard();
    hand.push(secondCard);
    print(`${firstCard}   ${secondCard}\n\n`);
    sleep.msleep(750);

    return hand;
  }
}

module.exports = Round;
