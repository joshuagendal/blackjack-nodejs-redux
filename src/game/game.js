const print = require("../userCommunication/print/print");
const { getNPlayers } = require("../userCommunication/promptUser/promptUser");
const { store } = require("../store/index");
const { setNPlayers } = require("../store/actions");

/*
The class that will run the game
*/
class Game {
  constructor(nPlayers) {
    this.nPlayers = nPlayers;
  }

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
