const Game = require("../Game/Game");
const {
  getNPlayerBets
} = require("../../userCommunication/promptUser/promptUser");

class Round extends Game {
  constructor(nPlayers, currentBets) {
    super(nPlayers);
    this.currentBets = currentBets;
  }

  /*
  A function to run the promptly function to get player bets, set this result to class variable playerBets
  */
  getPlayerBets() {
    const n = this.nPlayers;
    return getNPlayerBets(n)
      .then(bets => {
        this.currentBets = bets;
        return bets;
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

module.exports = Round;
