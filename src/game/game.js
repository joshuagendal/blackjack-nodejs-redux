const print = require("../userCommunication/print/print");

/*
The class that will run the game
*/
class Game {
  constructor(nPlayers) {
    this.nPlayers = nPlayers;
  }

  beginGame() {
    // print("Hello and welcome to a game of blackjack! \n\n");
    this.nPlayers = 4;
    // use an outsourced promptly module function to ask user how many players,
    // assign to nPlayers contructor variable
    // Add redux
  }
}

module.exports = Game;
