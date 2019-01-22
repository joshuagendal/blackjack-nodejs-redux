const { END_GAME, SET_N_PLAYERS, SET_HANDS } = require("./constants");
const { manipulateHandsForStateTree } = require("../utils/cardHelpers");
const { setNPlayersWChips } = require("../utils/miscellaneousHelpers");

const endGame = () => ({
  type: END_GAME,
  payload: {
    gameOver: true
  }
});

/*
This action sets the amount of players, and initializes the state tree players array with
n objects, all with 100 chips each
*/
const setNPlayers = n => {
  const players = setNPlayersWChips(n);
  return {
    type: SET_N_PLAYERS,
    payload: {
      nPlayers: n,
      players
    }
  };
};

const setHands = hands => {
  const handsRedux = manipulateHandsForStateTree(hands);
  return {
    type: SET_HANDS,
    payload: {
      hands: handsRedux
    }
  };
};

module.exports = {
  endGame,
  setNPlayers,
  setHands
};
