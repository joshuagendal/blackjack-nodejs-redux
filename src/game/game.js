const { print } = require("../userCommunication/print/print");
const { getNPlayers } = require("../userCommunication/promptUser/promptUser");
const { store } = require("../store/index");
const { setNPlayers, setHands } = require("../store/actions");
const { getInitialHand } = require("../utils/cardHelpers");
const sleep = require("sleep");

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
        return this.dealPlayers(n);
      })
      .catch(err => console.log(err));
  }

  dealPlayers(n) {
    let i;
    let hands = [];
    for (i = 0; i < n; i++) {
      const initialHand = getInitialHand();
      hands.push(initialHand);
      print(
        `Player ${i + 1}'s cards: \n\n${initialHand[0]}  ${initialHand[1]}`
      );
      sleep.sleep(2);
    }
    return store.dispatch(setHands(hands));
  }
}

module.exports = Game;
