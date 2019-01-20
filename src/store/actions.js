const { END_GAME, SET_N_PLAYERS, SET_HANDS } = require("./constants");
const { manipulateHandsForStateTree } = require("../utils/cardHelpers");

const endGame = () => ({
  type: END_GAME,
  payload: {
    gameOver: true
  }
});

const setNPlayers = n => ({
  type: SET_N_PLAYERS,
  payload: {
    nPlayers: n
  }
});

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
