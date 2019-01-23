const { print } = require("../../userCommunication/print/print");
const {
  getNPlayers
} = require("../../userCommunication/promptUser/promptUser");
const { store } = require("../../store/index");
const { setNPlayers } = require("../../store/game/actions");
const { setPlayersChips } = require("../../store/chips/actions");

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
        store.dispatch(setNPlayers(n));
        store.dispatch(setPlayersChips(n));
        return n;
      })
      .catch(err => console.log(err));
  }
}

module.exports = Game;
