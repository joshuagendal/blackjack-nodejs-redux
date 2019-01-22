const { print } = require("../../userCommunication/print/print");
const {
  getNPlayers,
  getNPlayerBets
} = require("../../userCommunication/promptUser/promptUser");
const { store } = require("../../store/index");
const {
  setNPlayers,
  setHands,
  setPlayersChips
} = require("../../store/actions");
const { getInitialHand } = require("../../utils/cardHelpers");
const sleep = require("sleep");

/*
The class that will run the game via functions to start game, deal, remove busted hands from game, etc...
*/
class Game {
  constructor(nPlayers, currentBets) {
    this.nPlayers = nPlayers;
    this.currentBets = currentBets;
  }

  /*
  A function to begin the game. 
  */
  initGame() {
    print("Hello and welcome to a game of blackjack! \n\n");
    return getNPlayers()
      .then(n => {
        this.nPlayers = n;
        store.dispatch(setNPlayers(n));
        store.dispatch(setPlayersChips(n));
        return n;
      })
      .catch(err => console.log(err));
  }
}

module.exports = Game;
