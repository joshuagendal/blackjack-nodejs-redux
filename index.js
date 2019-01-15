const Game = require("./src/game/Game");

const playBlackjack = new Game();
playBlackjack
  .initGame()
  .then(res => {
    return res;
  })
  .catch(err => console.log(err));
