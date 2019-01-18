const { print } = require("../userCommunication/print/print");
const { getNPlayers } = require("../userCommunication/promptUser/promptUser");
const { store } = require("../store/index");
const { setNPlayers } = require("../store/actions");
const { getBlackjackHands } = require("../utils/hands");

/*
The class that will run the game via functions to start game, deal, remove busted hands from game, etc...
*/
class Game {
  constructor(nPlayers) {
    this.nPlayers = nPlayers;
  }

  /*
  A function to begin the game. 
  */
  initGame() {
    print("Hello and welcome to a game of blackjack! \n\n");
    return getNPlayers()
      .then(n => {
        this.nPlayers = n;
        return store.dispatch(setNPlayers(n));
      })
      .catch(err => console.log(err));
  }
}

module.exports = Game;
