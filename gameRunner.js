const Game = require("./src/game/Game/Game");
const Round = require("./src/game/Round/Round");

const playBlackjack = new Game();
playBlackjack
  .initGame()
  .then(res => {
    const round = new Round(res);
    return round.beginRound();
    // .then(bets => console.log("bets: ", bets))
    // .catch(err => console.log(err));
  })
  .catch(err => console.log(err));
