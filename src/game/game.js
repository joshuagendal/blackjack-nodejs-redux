const print = require("../userCommunication/print/print");
const { getNPlayers } = require("../userCommunication/promptUser/promptUser");

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
        // this.nPlayers = n;
        return (this.nPlayers = n);
      })
      .catch(err => console.log(err));

    // use an outsourced promptly module function to ask user how many players,
    // assign to nPlayers contructor variable
    // Add redux
  }
}

module.exports = Game;
